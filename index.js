#!/usr/bin/env node

'use strict';

var program = require('commander'),
  sjcl = require('sjcl');

let content = '';

program
  .arguments('[content]')
  .option('-h, --help', 'Show help')
  .action(function(content) {
    console.log('Content: ' + content);
  })
  .parse(process.argv);
