#! /usr/bin/env node
// const exec = require('child_process').exec;
const path = require('path');
const npmRun = require('npm-run');
const pkg = require('../package.json');

process.stdin.setEncoding('utf8');

const cmds = pkg.commands;
const cmdsArgs = pkg.commandsArgs;

const commandArg = process.argv[2];
const command = cmds[commandArg];
if (!command) {
  console.log(`
  ci-ops version: ${pkg.version}

  List of available commands:

${Object.keys(cmds).map((c, i) =>
    `    - ci-ops ${c} ${cmdsArgs[c]}`).join('\n')}
`);
  process.exit(1);
}
const args = [...process.argv].slice(3).join(' ');

npmRun.exec('npm root', (err, stdout/* , stderr */) => {
  if (err) { throw new Error(err); }

  const rootCWD = path.resolve(stdout, '../');
  const cmd = npmRun.exec(
    `${command} ${args}`,
    { cwd: rootCWD, stdio: 'inherit' },
    (err, stdout, stderr) => {
      if (err) { console.warn(err); }
      if (stderr) { console.warn(stderr); }
      console.log(stdout);
      process.exit(0);
    });

  const stdin = process.openStdin();
  stdin.addListener('data', (d) => {
    console.log('user iinput', d);
    cmd.stdin.pipe(stdin);
  });
  const cmdStdin = process.openStdin();

  cmd.on('close', (code) => {
    console.log(`child process exited with code ${code}`);
  });

  cmd.on('data', (code) => {
    console.log(`child process exited with code ${code}`);
  });

  cmd.stdout.pipe(process.stdout);
  cmd.stderr.pipe(process.stderr);
});
