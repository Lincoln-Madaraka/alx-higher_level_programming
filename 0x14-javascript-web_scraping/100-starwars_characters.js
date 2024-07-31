#!/usr/bin/node
const request = require('request');
const process = require('process');
const id = process.argv[2];
const url = `https://swapi-api.hbtn.io/api/films/${id}`;
request(url, (error, responce, body) => {
  if (error) {
    console.log(error);
  }
  const film = JSON.parse(body);
  for (const charachter of film.characters) {
    request(charachter, (error, responce, body) => {
      if (error) {
        console.log(error);
      }
      const name = JSON.parse(body).name;
      console.log(name);
    });
  }
});
