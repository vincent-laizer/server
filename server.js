var http = require("http");

//creating the server
http.createServer(function(req,res){

    res.write("its working!!");
    res.end();
});
