var http = require("http");

//variable system defined port
var port = process.env.port||3000;

http.createServer(function(req,res){

    res.writeHead(200,{"content-type":"text/html"});
    res.write("hellow!!");
    res.end();
    
}).listen(port);
