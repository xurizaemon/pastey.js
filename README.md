# Pastey

Pastey is a client for an encrypted pastebin like [fincham/paste](https://github.com/fincham/paste).

An encrypted pastebin means the pastebin service doesn't see the pastebin data - decryption happens in your browser, based on the encrypted paste data and a key only the browser sees.

## Dependencies

    node, npm

## Installation

    npm i -g pastey

## Configuration

Set environment variable `PASTEYURL`.

## Usage

### Example

    $ pastey "this is some text"
    http://pastebin.example/ec43c7#4ljVqnjpuRSmVrauLx/woA

### Paste a file

@TODO

    $ pastey words.txt
    http://pastebin.example/#bcdefghijklm

### Stdin

@TODO

    $ ls | pastey
    http://pastebin.example/#cdefghijklmn

## TODO

* Rather if pastey.submit() returned the updated paste object, rather than a promise which will resolve to same.
* Supply paste content from stdin. (Not sure how to do this with Commander!)
* Read a filename argument, read the file.
