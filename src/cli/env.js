const parseEnv = () => {
  const { stdout, env } = process;
  for (const key in env) {
    if (key.includes('RSS_')) {
      stdout.write(`${key}=${env[key]};\n`);
    }
  }
};

parseEnv();
