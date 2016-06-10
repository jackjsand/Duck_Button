'use strict';

module.exports.handler = function(event, context, cb) {
  
	var result = duckbutt2(event);
  
	return cb(null, {
	  message: 'Go Serverless! Your Lambda function executed successfully!'
	});
  
	// JavaScript
	/*  function duckbutt2(event) {

		var n = document.images.length;
		var i = 1;

		if (n = 0) {

			var img = document.createElement("IMG");
			img.setAttribute("src","https://s3-us-west-1.amazonaws.com/jacksand.me/images/duck_1.jpg");
			//img.setAttribute("width", "600");
			//img.setAttribute("width", "400");
			//img.setAttribute("alt", "Rubber Duck");
			// naturalHeight & naturalWidth
			document.getElementById('div1').appendChild(img);
			i++;


		} else if (n != 0 && i > 21) {

			// CODE
			var path = "https://s3-us-west-1.amazonaws.com/jacksand.me/images/duck_1.jpg";
			document.getElementById("IMG").src = path;
			i = 2;

		} else {

			// CODE
			var j = i.toString();
			var path = "https://s3-us-west-1.amazonaws.com/jacksand.me/images/duck_" + j + ".jpg";
			document.getElementById("IMG").src = path;
			i++;

		}; */

	function duckbutt2(event) {
		return {
			path: "https://s3-us-west-1.amazonaws.com/jacksand.me/images/duck_1.jpg",
			event: event // ignoring input data
		}
	}	
		
};
