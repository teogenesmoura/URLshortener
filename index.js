var express = require('express');
var linkshort = require('./linkshort.js');
var ejs = require('ejs');
var bodyparser = require('body-parser');
var app = express();

app.set('view engine','ejs');
app.use(bodyparser.urlencoded({ extended: false }));

app.get('/:URL', function(req,res){
	var originalURL = linkshort.getOriginalURL(req.params.URL);
	if(originalURL != undefined){
		res.redirect("http://" + originalURL);
	}
	else{
		res.send("URL not found");
	}
});
app.get('/', function(req,res){
	res.render('index');
});
app.post('/', function(req,res){
	//res.send(req.body.originalURL);
	var redirectionURL = linkshort.addURLRedirection(req.body.originalURL); 
	res.render('shortURL', { redirectionURL: redirectionURL });
});
app.listen(3000);