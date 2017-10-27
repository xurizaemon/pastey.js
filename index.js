#!/usr/bin/env node

'use strict';

let program = require('commander'),
  request = require('request'),
  sjcl = require('sjcl');

let content = '';

function encrypt(content, mimetype) {
  let key = sjcl.random.randomWords(4);
  let encrypted = sjcl.json.decode(sjcl.encrypt(key, content));
  encrypted.mime = (typeof mimetype === 'undefined') ? 'text/plain' : mimetype;

  let payload = sjcl.json.encode(encrypted);
  let hash = sjcl.codec.base64.fromBits(key, true);

  request.post({
    url: 'http://paste.wgtn.cat-it.co.nz/',
    form: {text: payload}
  }, function(err, response, body) {
    if (err) {
      console.log('error', err);
    }
    else {
      console.log('body', body);
      console.log('response', response);
    }
  });

  return({
    hash: hash,
    payload: payload
  });
}

program
  .arguments('[content]')
  .option('-h, --help', 'Show help')
  .action(function(content) {
    console.log('Content: ' + content);
    console.log(encrypt(content), 'encrypted');
  })
  .parse(process.argv);
