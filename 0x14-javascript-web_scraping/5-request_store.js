#!/usr/bin/node
const fs = require('fs');
const process = require('process');
const request = require('request');
const url = process.argv[2];
const filename = process.argv[3];
try {
  request(url, (error, responce, body) => {
    if (error) {
      console.log(error);
    }
    fs.writeFile(filename, body, 'utf-8', err => {
      if (err) {
        console.log(err);
      }
    });
  });
} catch (err) {
  console.log(err);
}
