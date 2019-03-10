var http = require("http");

const port = process.env.port||3000;

http.createServer(function(req,res){

  res.end("help");
});
