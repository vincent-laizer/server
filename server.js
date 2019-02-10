var express = require('express');
var app = express();

app.get('/:name', function(req, res){
   res.send('Name specified is: ' + req.params.name);
});
app.listen(3000);
