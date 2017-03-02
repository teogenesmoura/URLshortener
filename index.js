/* TO DO 
   add support for HTTPS requests
   validate URL before passing to backend
   add tests
   make it pretty
*/
var express = require('express');
var linkshort = require('./linkshort.js');
var ejs = require('ejs');
var helper = require('./helper.js');
var bodyparser = require('body-parser');
var validator = require('validator');
var app = express();

app.set('view engine','ejs');
app.use(bodyparser.urlencoded({ extended: false }));

app.get('/:URL', function(req,res){
	var originalURL = linkshort.getOriginalURL(req.params.URL);
	if(originalURL != undefined){
		if(helper.urlContainsProtocol(originalURL)){
			res.redirect(originalURL);
		}
		/* urls without 'https' or 'http' will be assumed to be 'http' */
		else{
			res.redirect("http://" + originalURL);
		}
	}
	else{
		res.send("URL not found");
	}
});
app.get('/', function(req,res){
	res.render('index');
});
app.post('/', function(req,res){
	if(validator.isURL(req.body.originalURL)){
		var redirectionURL = linkshort.addURLRedirection(req.body.originalURL); 
		res.render('shortURL', { redirectionURL: redirectionURL });
	}
	else{
		res.render('errorURL');
	}
});
app.listen(process.env.PORT || 3000);