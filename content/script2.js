// JavaScript

/* function duckbutt(){

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

    };
};
*/


/*"https://s3-us-west-1.amazonaws.com/jacksand.me/images/duck_1.jpg" */

document.ready(function() {
	
	'#dbutton'.on('click', function() {
		
		.ajax({
			url: https://3k57xj0w23.execute-api.us-west-2.amazonaws.com/dev/buttonClick
			success: function(json) {
				"#div1".append(json.path);
				
				"#div1".createElement("IMG");
				img.setAttribute("src",json.path);
			}
		});
	});
});

/*

https://vo7lhdeful.execute-api.us-east-1.amazonaws.com/development/weather/local/5

https://vo7lhdeful.execute-api.us-east-1.amazonaws.com/development/weather/local

*/




