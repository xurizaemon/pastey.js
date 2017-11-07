# Pastey

Pastey is a client for an encrypted pastebin like [fincham/paste](https://github.com/fincham/paste).

An encrypted pastebin means the pastebin service doesn't see the pastebin data - decryption happens in your browser, based on the encrypted paste data and a key only the browser sees.

## Requirements

* A version of NodeJS with ES6 support

## Installation

    npm i -g pastey

## Configuration

The only configuration so far is the URL of your paste server. Perhaps your company runs a paste server, or you can run [fincham/paste](https://github.com/fincham/paste) yourself.

To configure:

    $ pastey --config --url http://pastey.example

This will save the configuration to ~/.config/pastey-nodejs/config.json for future calls. If no URL config is set via that file, Pastey tries the environment variable `PASTEYURL` or finally http://localhost:5000

## Usage

Once configured, you can paste files by filename (including images) or by STDIN (text only).

### Paste a file (text, image)

    $ pastey words.txt
    http://pastey.example/gu4SV275ThOGBNXl#0IURwZ2WC7VgvqHSJSfdqA
    $ pastey image.png
    http://pastey.example/NakdWombnx6hFCCX#XSl3PhOH9zyVoiqCKqVEzQ

### Stdin (text)

    $ git diff | pastey
    http://pastey.example/vAkHQcdV0R8pfGkS#lmi1jUgpsNtdBgiX0pAw/g

### Context menus

To make it easy to paste a file from GUI, check recipe(s) in [`docs/integrations.md`](https://github.com/xurizaemon/pastey/blob/master/docs/integrations.md). Additions welcome for your preferred environment :)

## Alternatives

* [PrivateBin/PrivateBin](https://github.com/PrivateBin/PrivateBin) + [PrivateBin/PrivateBin-Cli](https://github.com/PrivateBin/PrivateBin-Cli)
