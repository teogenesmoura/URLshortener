var express = require('express');
var linkshort = require('./linkshort.js');

var app = express();

app.get('/:URL', function(req,res){
	var originalURL = linkshort.getOriginalURL(req.params.URL);
	//res.send(originalURL);
	res.redirect("http://" + originalURL);
});
app.get('/', function(req,res){
	res.send('working ok');
});
app.get('/insertRedirection/:url', function(req,res){
	res.send(linkshort.addURLRedirection(req.params.url));
});
app.listen(3000);