var http = require("http");
var fs = require("fs");

const port = process.env.port||3000;

http.createServer(function(req,res){
  res.write(getDate());
  res.end();
}).listen(port);
