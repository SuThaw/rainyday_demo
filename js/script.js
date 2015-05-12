function run() {
	var image = document.getElementById('img1'); // get the image by Id
	image.onload = function() {					// image on load event
		var engine = new RainyDay({				// create new rainy day engine
			image: this 						// 
		});
		engine.rain([ [1, 2, 50], [3, 3, 1] ], 100);  // put the rain drop effect
	};
		image.crossOrigin = 'anonymous';
        image.src = 'img/1.jpg';		// add the image url
}
