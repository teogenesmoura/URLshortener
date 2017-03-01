var exports = module.exports = {};
var HashTable = require('hashtable');
var randomstring = require('randomstring');
var helper = require('./helper.js');
var hashtable = new HashTable();
var HTTPSList = [];

/*
	@params originalURL
	receives a URL and returns a new redirection URL
*/
exports.addURLRedirection = function(originalURL){
	if(helper.isOriginalURLHTTPS(originalURL)){
		addSiteHTTPSList(originalURL);
	}
	var redirectionURL = randomstring.generate(7);
	hashtable.put(redirectionURL,originalURL);
	return redirectionURL;
}
/*
	@params redirectionURL
	receives the redirection URL and returns the
    original URL associated with it
 */
exports.getOriginalURL = function(redirectionURL){
	return hashtable.get(redirectionURL);
}

exports.addSiteHTTPSList = function(originalURL){
	HTTPSList.put(originalURL);
}

exports.isSiteHTTPS = function(originalURL){
	return (HTTPSList.indexOf(originalURL) != -1);
}