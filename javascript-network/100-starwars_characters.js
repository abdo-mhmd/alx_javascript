#!/usr/bin/node
/*
Write a script that prints all characters of a Star Wars movie:

The first argument is the Movie ID - example: 3 = “Return of the Jedi”
Display one character name by line
You must use the Star wars API
You must use the module request
*/

const request = require('request');
const movieId = process.argv[2];
const url = `https://swapi-api.alx-tools.com/api/films/${movieId}/`;

request(url, (error, response, body) => {
  if (!error && response.statusCode === 200) {
    const data = JSON.parse(body).characters;

    data.forEach(element => {
      request(element, (error, response, body) => {
        if (!error && response.statusCode === 200) {
          const data = JSON.parse(body);
          console.log(data.name);
        }
      });
    });
  } else {
    console.log(error);
  }
});
