import fs from 'fs/promises';
import { stat } from 'fs/promises';
const create = async () => {
    const { stdout } = process;
    try {
      await stat().then(url => {
        console.log(url);
      });
      /*
      fs.writeFile(
        path.join( '/fs', '/files', '/fresh.txt'),
        'I am fresh and young',
        (error) => {
          if (error) {
            throw error;
          }
          stdout.write('File was created\n');
        }
      );
      */
    }
    catch (error) {
      stdout.write(`Error. ${error}\n`);
    }
};

await create();
