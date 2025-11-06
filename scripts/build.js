const { spawn } = require("child_process");
const chalk = require("chalk");
const { buildCmds, envMaps, setCustomAppEnv, setOriginMpType } = require("./utils");

// 默认取 CI 注入的 MP_TYPE
let MP_TYPE = process.env.MP_TYPE;

if (!MP_TYPE) {
  MP_TYPE = process.argv[process.argv.length - 1];
  // 模拟 CI 注入的 MP_TYPE
  setOriginMpType(MP_TYPE);
  // 补充 `npm run build weapp` 的 CODE_ENV
  process.env.CODE_ENV = process.env.CODE_ENV || 'pro';
}

// 获取转换后的 MP_TYPE
const NEW_MP_TYPE = envMaps[MP_TYPE] || MP_TYPE;

// 重置为转换后新的 MP_TYPE
process.env.NEW_MP_TYPE = NEW_MP_TYPE;

let buildCmd = buildCmds[NEW_MP_TYPE];

if (!buildCmd) {
 console.log(`
${chalk.red('✗ [ERR] Invalid MP_TYPE provided.')}

Please use one of the following commands:

- ${chalk.cyan('npm run fat[uat|pre|pro] <MP_TYPE>')}
- ${chalk.cyan('npm run build <MP_TYPE>')}

Valid ${chalk.cyan('MP_TYPE')} values: ${chalk.cyan(Object.values(envMaps).join(' | '))}
`);
  process.exit(1);
}

setCustomAppEnv(NEW_MP_TYPE);

if (process.argv.includes('--watch')) {
  buildCmd = buildCmd + ' --watch';
} else {
  buildCmd = 'NODE_ENV=production ' + buildCmd;
}

const child = spawn(buildCmd, { stdio: 'inherit', shell: true });

child.on('error', (error) => {
  process.exit(1);
});

child.on('close', (code) => {
  if (code !== 0) {
    process.exit(1);
  }
});