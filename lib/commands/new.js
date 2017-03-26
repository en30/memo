const fs = require('fs');
const resolve = require('path').resolve;
const moment = require('moment');
const execSync = require('child_process').execSync;
const format = require('../format')

exports.command = 'new [ext]'

exports.description = 'create a memo'

exports.builder = (yargs) => yargs.default('ext', 'md')

exports.handler = (argv) => {
  const file = resolve(process.cwd(), 'memos', `${moment().format(format)}.${argv.ext}`)
  fs.writeFileSync(file, '')
  execSync(`${process.env.EDITOR} ${file}`, {stdio: 'inherit'})
}
