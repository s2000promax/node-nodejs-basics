import fs from 'fs';
import path from 'path';

const read = async () => {
    // Write your code here
  const { stdout } = process;
  try {
    fs.readFile(
      path.join( '/fs', '/files', 'fileToRead.txt'),
      (error) => {
        if (error) {
          throw error;
        }
      },
      (data) => {
        console.log(data);
      }
    );
  }
  catch (error) {
    stdout.write(`Error. ${error}\n`);
  }
};

await read();
