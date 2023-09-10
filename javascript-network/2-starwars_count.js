#!/usr/bin/node
/*
Write a script that prints the number of movies where the character “Wedge Antilles” is present.

The first argument is the API URL of the Star wars API: https://swapi-api.alx-tools.com/api/films/
Wedge Antilles is character ID 18 - your script must use this ID for filtering the result of the API
You must use the module request
*/

const request = require('request');

const url = process.argv[2];
const characterId = 18;

request(url, (error, response, body) => {
  if (!error && response.statusCode === 200) {
    const data = JSON.parse(body).results;
    let count = 0;
    data.forEach(character => {
      for (x in character.characters) {
        if (character.characters[x].includes(characterId)) {
          count++;
        }
      }
    });
    console.log(count);
  } else {
    console.log(error);
  }
});
