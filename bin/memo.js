#!/usr/bin/env node
const yargs = require('yargs');

yargs
  .command(require('../lib/commands/server.js'))
  .command(require('../lib/commands/new.js'))
  .command(require('../lib/commands/compile.js'))
  .help('help')
 . argv
