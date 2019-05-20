//1.
var http = require('http');
var fs = require('fs');
//2.
const port=process.env.PORT || 3000
var server = http.createServer(function (req, resp) {
    //3.
    if (req.url === "/") {
        fs.readFile("project", function (error, pgResp) {
            if (error) {
                resp.writeHead(404);
                resp.write('Contents you are looking are Not Found');
            } else {
                resp.writeHead(200, { 'Content-Type': 'text/html' });
                resp.write(pgResp);
            }
             
            resp.end();
        });
    }
    else if(req.url === "/yst"){
        fs.readFile("yst", function (error, pgResp) {
            if (error) {
                resp.writeHead(404);
            } else {
                resp.writeHead(200);
                resp.write(prResp);
            }
             
            resp.end();
            });
    }
                    
        else {
        //4.
        resp.writeHead(200, { 'Content-Type': 'text/html' });
        resp.write("<b>The content you are looking for is not found!!</b>");
        resp.end();
    }
});
//5.
server.listen(port);
 
console.log('Server Started listening on 5050');
