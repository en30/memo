#!/usr/bin/env node
const fs = require('fs');
const resolve = require('path').resolve;
const yargs = require('yargs');
const moment = require('moment');
const execSync = require('child_process').execSync;
const devServer = require('../lib/devServer');

const newMemo = (argv) => {
  const file = resolve(process.cwd(), 'memos', `${moment().format('YYYY-MM-DDTHHmmss')}.${argv.ext}`)
  fs.writeFileSync(file, '')
  execSync(`${process.env.EDITOR} ${file}`, {stdio: 'inherit'})
}

yargs
  .command('new [ext]', 'create a memo', (yargs) => yargs.default('ext', 'md'), newMemo)
  .command(['server', '*'], 'start development server', {}, devServer.start)
  .help('help')
  .argv
