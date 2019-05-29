var http = require("http");
var fs = require("fs");

var port = process.env.port||3000;

http.createServer(function(req,res){
  res.write("working...");
  res.end();
}).listen(port);
