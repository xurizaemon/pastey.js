#!/usr/bin/env node

'use strict';

let program = require('commander'),
  pastey = require('./lib/pastey.js');

let content = '';

let pasteyurl = process.env.PASTEYURL || 'http://localhost:5000/';

program
  .arguments('[content]')
  .option('-h, --help', 'Show help')
  .option('-u, --url', 'URL of paste server')
  .action(function(content) {
    let encrypted = pastey.encrypt(content, 'text/plain');
    pastey.submit(encrypted, pasteyurl)
      .then(function(result) {
        console.log(result.url);
      });
  })
  .parse(process.argv);
