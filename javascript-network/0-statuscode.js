#!/usr/bin/node

// script that display the status code of a GET request
// The first argument is the URL to request (GET)
// The status code must be printed like this: code: <status code>
// You must use the module request (NB: It must be installed if you haven’t already installed it)

var request = require('request');
var url = process.argv[2];

request(url, function(error, response) {
  if (!error) {
    console.log(`code: ${response.statusCode}`);
  }
  else {
    console.log(error);
  }
});
