var http = require("http");

var port = sys.env.port||3000;

http.createServer(function(req,res){

    res.end("hello!!");

}).listen(port);
