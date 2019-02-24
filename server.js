var fs = require("fs");
var http = require('http');
var url = require('url');

//define the port
const port=process.env.PORT || 3000;

//create the server
http.createServer(function(req,res){
  res.writeHead(200,{'content-Type':'text/html'});

  //reading the query string
  var query = url.parse(req.url,true).query;
  var fileName = query.file;

  //reading files
  fs.readFile(fileName,function(err,data){
    if(err){
      console.log("Error in opening: "+fileName);
    }
    else{
      console.log("File read succesfully");

      //sending the content to client
      content = data.toString();
      res.write(content);
    }
  });


}).listen(port);
