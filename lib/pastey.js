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
 *
 * @TODO I'd like to return a result rather than a promise.
 */
exports.submit = function(encrypted, url) {
  return rp.post({
    uri: url,
    form: {
      text: encrypted.payload
    },
    simple: false,
    resolveWithFullResponse: true
  })
    .then(function(response) {
      encrypted.url = `${response.headers.location}#${encrypted.hash}`;
      return encrypted;
    })
    .catch(function(err) {
      console.log('err', err.statusCode + ': ');
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
 *
 * @TODO Implement.
 */
exports.decrypt = function() {};

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
