var exports = module.exports = {};
var HashTable = require('hashtable');
var randomstring = require('randomstring');
var hashtable = new HashTable();

/*
	@params originalURL
	receives a URL and returns a new redirection URL
*/
exports.addURLRedirection = function(originalURL){
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