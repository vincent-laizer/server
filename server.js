var http = require("http");

var port = process.env.PORT || 3000;

http.createServer(function(req,res){

    res.end("hello!!");

}).listen(port);
