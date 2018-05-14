import {getLoc} from './util/geo-location';

// testing...
console.log('testing');

getLoc().then(({coords}) => {
	const {latitude: lat, longitude: lon} = coords;
	jQuery.getJSON(`/.netlify/functions/current-weather?lat=${lat}&lon=${lon}`)
		.then(res => {
			console.log(res);
			jQuery('#title').text(res.currently.summary);

			var skycons = new Skycons({"color": "black"});
			// you can add a canvas by it's ID...
			skycons.add("weather", res.currently.icon);

			// start animation!
			skycons.play();
		});
});
