#!/usr/bin/node
const request = require('request');
const process = require('process');
const url = process.argv[2];
const searchId = '18';
request(url, (error, responce, body) => {
  if (error) {
    console.log(error);
  }
  let count = 0;
  const films = JSON.parse(body);
  for (const film of films.results) {
    for (const people of film.characters) {
      if (people.includes(searchId)) {
        count++;
      }
    }
  }
  console.log(count);
});
