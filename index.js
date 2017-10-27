#!/usr/bin/env node

'use strict';

var program = require('commander'),
  sjcl = require('sjcl');

// We can populate this later.
let content = 'This is my sample content.';

program
  .arguments('[file]')
  .option('-h, --help', 'Show help')
  .action(function(file) {
    console.log(program);
    if (typeof file === 'undefined') {
      // Not happening at present.
      process.stdin.setEncoding('utf8');
      process.stdin.on('readable', function() {
        const chunk = process.stdin.read();
        console.log(chunk);
        if (chunk !== null) {
          content += chunk;
        }
      });
    }
    else {
      content = file;
    }
    // console.log(process);
    console.log('hello, wo: ' + content);
  })
  .parse(process.argv);
