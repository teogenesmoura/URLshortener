var exports = module.exports = {};

/*
	@params originalURL
	given an URL, returns whether or not it is preceeded by 'https://'
*/
exports.isOriginalURLHTTPS = function(originalURL){
	originalURL = originalURL.toLowerCase();
	return originalURL.indexOf("https://") != -1;
}
