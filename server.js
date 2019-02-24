//1.
var http = require('http');
var fs = require('fs');
var urls = require('url');

//2.
const port=process.env.PORT || 3000
var server = http.createServer(function (req, resp) {
    
    //3.
    if (req.url) {
        
            //obtain data from query string
            var query = urls.parse(req.url, true).query;
            var fileName = query.file;
        
        fs.readFile(fileName, function (error, pgResp) {
            if (error) {
                resp.writeHead(404);
                resp.write('Contents you are looking are Not Found');
            } else {
                resp.writeHead(200, { 'Content-Type': 'text/plain' });
                resp.write("You are accessing this content from: " + req.url + "\n");
                resp.write(fileName);
                resp.write(pgResp);
            }
             
            resp.end();
        });
    } else {
        //4.
        resp.writeHead(404, { 'Content-Type': 'text/html' });
        resp.write('<h1>Invalid URL</h1><br /><br />The file you are looking for is not found.');
        resp.end();
    }
});
//5.
server.listen(port);
 
console.log('Server Started listening on 5050');
