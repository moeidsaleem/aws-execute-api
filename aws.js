var AWS = require('aws-sdk')
var apigateway = new AWS.APIGateway({
    accessKeyId :'AKIAIJJYLIPMKT5GDVBQ',
    secretAccessKey  : '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',
    region :'us-east-2',
    endpoint :'https://api.discursolivre.com.br/v1/lastnews/'
//apiVersion: '2015-07-09'});

});


apigateway.makeRequest('execute-api',{ ExceptSources: [], Page: 1, Type: 'right' },function(err, data){
    if(err){
        console.log(err);
    }
    console.log(data);
})