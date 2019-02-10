cont http = require('http');
const port=process.env.PORT || 3000

var express = require('express');
var app = express();

app.get('/:name', function(req, res){
   res.send('Name specified is: ' + req.params.name);
});
app.listen(port);

