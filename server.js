//express 
const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');
const app = express();



var http  = require('http'),
    https = require('https'),
    aws4  = require('aws4');


    let accessKey = 'AKIAIJJYLIPMKT5GDVBQ';
    let secretKey = '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';
    let serviceName = 'execute-api';
 
    app.use(bodyParser.urlencoded({extended: true}));
    app.use(bodyParser.json());




   let x= aws4.sign(String({
        host:'api.discursolivre.com.br',
        path:'/v1/lastnews/',
        region:'us-east-2',
        method: 'POST',
        body: { ExceptSources: [], Page: 1, Type: 'right' },


    }), {accessKeyId: accessKey, secretAccessKey: secretKey})

console.log(x.headers);
var options = { 
    method: 'POST',
  url: 'https://api.discursolivre.com.br/v1/lastnews',
  headers: x.headers,
  body: { ExceptSources: [], Page: 1, Type: 'right' },
  json: true };






request(options, function (error, response, body) {
  if (error) throw new Error(error);

  console.log(body);
});
