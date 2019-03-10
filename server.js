var http = require("http");
var http = require('http');
var url = require('url');

//variable system defined port
var port = process.env.port||3000;

//creating the server
http.createServer(function(req,res){

    res.writeHead(200,{
        'content-Type':"text/html"
    });
    res.write("its working!!");
    res.end();
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  var q = url.parse(req.url, true).query;
  var txt = q.year + " " + q.month;
  res.end(txt);
}).listen(port);
