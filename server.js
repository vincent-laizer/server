//1.
var http = require('http');
var fs = require('fs');
//2.
const port=process.env.PORT || 3000
var server = http.createServer(function (req, resp) {
    //3.
    if (req.url === "/") {
                resp.writeHead(200);
                resp.write('genesis1');
                resp.end();
    }         
        else {
        //4
        resp.write(0);
        resp.end();
    }
});
//5.
server.listen(port);
 
console.log('Server Started listening on 5050');
