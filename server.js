//1.
var http = require('http');
var fs = require('fs');
//2.
const port=process.env.PORT || 3000
var server = http.createServer(function (req, resp) {
    //3.
    if (req.url === "/") {
        fs.readFile("data.txt", function (error, pgResp) {
            if (error) {
                resp.writeHead(404);
                resp.write('Contents you are looking are Not Found');
            } else {
                resp.writeHead(200, { 'Content-Type': 'text/plain' });
                resp.write("You are accessing this content from: " + req.url + "\n");
                resp.write(pgResp);
            }
             
            resp.end();
        });
    } else {
        //4.
        resp.writeHead(200, { 'Content-Type': 'text/html' });
        resp.write('<h1>Product Manaager</h1><br /><br />To create product please enter: ' + req.url);
        resp.end();
    }
});
//5.
server.listen(port);
 
console.log('Server Started listening on 5050');
