var http = require("http");

//variable system defined port
var port = process.env.port||3000;

//creating the server
http.createServer(function(req,res){

    res.write("its working!!");
    res.end();
}).listen(port);
