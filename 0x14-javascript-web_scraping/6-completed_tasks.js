#!/usr/bin/node
const request = require('request');
const process = require('process');
const url = process.argv[2];
const id = 'userId';
request(url, (error, responce, body) => {
  if (error) {
    console.log(error);
  }

  const todos = JSON.parse(body);
  const users = {};
  for (const task of todos) {
    if (task.completed) {
      if (users[task[id]]) {
        users[task[id]]++;
      } else {
        users[task[id]] = 1;
      }
    }
  }
  console.log(users);
});
