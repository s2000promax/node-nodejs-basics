const parseArgs = () => {
  const { stdout, argv } = process;
  for (let index = 2; index < argv.length; index += 1) {
    if (argv[index].includes('--')) {
      stdout.write(`${argv[index].split('--').filter(sym => sym !== '--').join('')} ${argv[index + 1]}\n`);
    }
  }
};

parseArgs();
