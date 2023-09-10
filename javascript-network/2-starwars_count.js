#!/usr/bin/node
/*
Write a script that prints the number of movies where the character “Wedge Antilles” is present.

The first argument is the API URL of the Star wars API: https://swapi-api.alx-tools.com/api/films/
Wedge Antilles is character ID 18 - your script must use this ID for filtering the result of the API
You must use the module request 
*/

const request = require('request');

const url = 'https://swapi-api.alx-tools.com/api/films/';
const characterId = 18;

request(url, (error, response, body) => {
    if (!error && response.statusCode === 200) {
        const data = JSON.parse(body);
        console.log(data.characters.filter(character => character === characterId).length);
    }
    else {
        console.log(error);
    }
});