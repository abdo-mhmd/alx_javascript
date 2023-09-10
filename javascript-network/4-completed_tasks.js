#!/usr/bin/node
/*
Write a script that computes the number of tasks completed by user id.

The first argument is the API URL: https://jsonplaceholder.typicode.com/todos
Only print users with completed task
You must use the module request
*/
const request = require('request');
const url = process.argv[2];

request(url, (error, response, body) => {
  if (!error && response.statusCode === 200) {
    const data = JSON.parse(body);
    const dataFilter = data.filter(task => task.completed);
    const user = {};
    dataFilter.forEach(element => {
      if (user[element.userId] === undefined) {
        user[element.userId] = 1;
      } else {
        user[element.userId]++;
      }
    });
    console.log(user);
  } else {
    console.log(error);
  }
});
