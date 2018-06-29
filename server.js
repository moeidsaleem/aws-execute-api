//express 
const express = require('express');
const bodyParser = require('body-parser');
 const request = require('request');
const app = express();

//some data
let accessKey = '<access-key>';
let secretKey = '<your-secret-key>';
let serviceName = 'execute-api';
var aws4  = require('aws4');
let cors = require('./cors');

//credentials 
let credentials = {accessKeyId: accessKey, secretAccessKey: secretKey}


//middlewares
    app.use(cors.permission)
    app.use(bodyParser.urlencoded({extended: true}));
    app.use(bodyParser.json());



request(aws4.sign({
    "host":"<host-url>",
    "path":"<path>",
    "region":"us-east-2",
    "method":"POST",
    "url":"https://<url-api>/v1/lastnews",
    "service": "execute-api",
    "body":`{"ExceptSources":[],"Page": 1,"Type":"right"}`
}, credentials), function(err, resp, body){
    console.log(body);
})





// axios(aws4.sign(finalData, credentials)).then((response)=>{
//  console.log(response.data);
// }).catch(err=>{ console.log(err.response.data)});
