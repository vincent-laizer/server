var http = require("http");

//variable system defined port
var port = process.env.port||7000;

//creating the server
http.createServer(function(req,res){
    
    res.writeHead(200,{
        'content-Type':"text/html"
    });
    res.write("its working!!");
    res.end();
}).listen(port);
