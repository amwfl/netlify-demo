import {getLoc} from './util/geo-location';
const $ = window.jQuery;

$('#weather')
	.attr('height', $(window).height() * 0.7)
	.attr('width', $(window).width() * 0.7);

getLoc().then(({coords}) => {
	const {latitude: lat, longitude: lon} = coords;
	$.getJSON(`/.netlify/functions/current-weather?lat=${lat}&lon=${lon}`)
		.then(res => {
			console.log('WEATHER RESPONSE', res);
			$('#title').text(res.currently.summary);

			var skycons = new Skycons({"color": "white"});
			// you can add a canvas by it's ID...
			skycons.add("weather", res.currently.icon);

			// start animation!
			skycons.play();
		});
});
