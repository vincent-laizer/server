var http = require("http");
var url = require("url");

//variable system defined port
var port = process.env.port||3000;

http.createServer(function(req,res){

    res.writeHead(200,{"content-type":"text/html"});
    res.end("hello");
    
}).listen(port);
