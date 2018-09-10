/**
 * @file
 * Talk to an encrypted paste server.
 */
/* jshint esversion: 6 */

(function () {
  'use strict';

  let sjcl = require('sjcl'),
    rp = require('request-promise');

  var exports = module.exports = {};

  /**
   * Encrypt a paste.
   */
  exports.encrypt = function(content, mimetype) {
    let key = sjcl.random.randomWords(4);
    let encrypted = sjcl.json.decode(sjcl.encrypt(key, content));
    encrypted.mime = (typeof mimetype === 'undefined') ? 'text/plain' : mimetype;

    let payload = sjcl.json.encode(encrypted);
    let hash = sjcl.codec.base64.fromBits(key, true);

    return {
      hash: hash,
      payload: payload
    };
  };

  /**
   * Submit encrypted to pastebin service over http.
   */
  exports.submit = function(data, url) {
    var pjson = require('../package.json');
    return new Promise(function (resolve, reject){
      var options = {
        uri: url,
        method: 'POST',
        simple: false,
        headers: {
          'User-Agent': `${pjson.name}/${pjson.version} (${pjson.homepage})`
        },
        form: {
          text: data.payload
        },
        resolveWithFullResponse: true
      };
      rp.post(url, options)
        .then(function(res) {
          if (res.statusCode == '302' || res.statusCode == '303') {
            data.url = `${res.headers.location}#${data.hash}`;
            resolve(data);
          }
          else {
            console.log(`Err: ${res.statusCode} ${res.statusMessage}`);
            data.error = {
              statusCode: res.statusCode,
              statusMessage: res.statusMessage
            };
            reject(data);
          }
        });
    });
  };

  /**
   * Fetch from the pastebin service over HTTP and decrypt.
   *
   * @TODO Implement.
   */
  exports.fetch = function() {};

  /**
   * Decrypt a paste.
   */
  exports.decrypt = function(data, key) {
    console.log(`decrypting ${data} with ${key}`);
    return sjcl.codec.base64.toBits(sjcl.decrypt(key, data));
  };

  /**
   * Write a paste locally.
   *
   * Perhaps to keep encrypted pastes locally, or to retrieve
   * and record pastes from remote.
   *
   * @TODO Implement.
   */
  exports.write = function() {};

  /**
   * Display a paste.
   *
   * Since pastes can be text or image, different display method req'd.
   *
   * @TODO Implement.
   */
  exports.display = function() {};
}());
