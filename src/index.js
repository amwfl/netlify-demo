import {getLoc} from './util/geo-location';
const $ = window.jQuery;

const canvasSize = Math.min($(window).width(), $(window).height()) * 0.7;
$('#weather').attr('height', canvasSize).attr('width', canvasSize);
const skycons = new Skycons({"color": "#0e4d7d"});
const dayNames = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
const weatherData = [];
let currentIndex = 0;

getLoc().then(({coords}) => {
	const {latitude: lat, longitude: lon} = coords;
	$.getJSON(`/.netlify/functions/current-weather?lat=${lat}&lon=${lon}`)
		.then(res => {
			console.log('WEATHER RESPONSE', res);
			renderWeather(res.currently, 'Currently');
			weatherData.push(res.currently, ...res.daily.data);
			$(document).click(function (evt) {
				currentIndex += 1;
				if (currentIndex === weatherData.length) { currentIndex = 0; }
				const label = (
					currentIndex === 0
					? 'Currently'
					: dayNames[(new Date(weatherData[currentIndex].time * 1000)).getDay()]
				)
				renderWeather(weatherData[currentIndex], label);
			});
		});
});

function renderWeather(w, label) {
	$('#timeframe').text(label);
	$('#title').text(w.summary);

	// you can add a canvas by it's ID...
	skycons.set("weather", w.icon);

	// start animation!
	skycons.play();
}
