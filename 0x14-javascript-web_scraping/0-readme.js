#!/usr/bin/node
const fs = require('fs');
const process = require('process');
const filename = process.argv[2];
try {
  fs.readFile(filename, 'utf8', (err, data) => {
    if (err) {
      console.log(err);
    }
    console.log(data);
  });
} catch (err) {
  console.log(err);
}
