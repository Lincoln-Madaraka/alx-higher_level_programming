#!/usr/bin/node
const fs = require('fs');
const process = require('process');
const filename = process.argv[2];
const data = process.argv[3];
try {
  fs.writeFile(filename, data, 'utf-8', err => {
    if (err) {
      console.log(err);
    }
  });
} catch (err) {
  console.log(err);
}
