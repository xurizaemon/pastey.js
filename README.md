# Pastey

Pastey is a client for an encrypted pastebin like [fincham/paste](https://github.com/fincham/paste).

An encrypted pastebin means the pastebin service doesn't see the pastebin data - decryption happens in your browser, based on the encrypted paste data and a key only the browser sees.

## Dependencies

    node, npm

## Installation

    npm i -g pastey

## Configuration

The only configuration so far is the URL of your paste server. Perhaps your company runs a paste server, or you can run [fincham/paste](https://github.com/fincham/paste) yourself.

To configure:

    $ pastey --config --url http://pastey.example

This will save the configuration to ~/.config/pastey-nodejs/config.json for future calls. If no URL config is set via that file, Pastey tries the environment variable `PASTEYURL` or finally http://localhost:5000

## Usage

### Example

    $ pastey "this is some text"
    http://pastey.example/ec43c7#4ljVqnjpuRSmVrauLx/woA

### Paste a file

    $ pastey words.txt
    http://pastey.example/gu4SV275ThOGBNXl#0IURwZ2WC7VgvqHSJSfdqA

### Stdin

    $ ls | pastey
    http://pastey.example/vAkHQcdV0R8pfGkS#lmi1jUgpsNtdBgiX0pAw/g

## Alternatives

* [PrivateBin/PrivateBin](https://github.com/PrivateBin/PrivateBin) + [PrivateBin/PrivateBin-Cli](https://github.com/PrivateBin/PrivateBin-Cli)
