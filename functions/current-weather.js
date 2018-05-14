import fetch from 'node-fetch';
import {darkSkyApiKey} from './util/api-keys';

const darkSkyBaseUrl = 'https://api.darksky.net/forecast';

export function handler(evt, ctx, cb) {
	handlerLogic(evt).then(
		res => cb(null, {
			statusCode: 200,
			body: JSON.stringify(res)
		})
	).catch(err => cb(null, {
		statusCode: 200,
		body: JSON.stringify(err)
	}));

	// cb(null, {
	// 	statusCode: 200,
	// 	// body: 'hello there'
	// 	body: `<html><body>
	// 		<h1>Hello, World</h1>
	// 		<ul>${Object.keys(evt).map(k => `
	// 			<li><strong>${k}</strong> <code>${(
	// 				typeof evt[k] === 'object'
	// 					? `<ul>${Object.keys(evt[k]).map(
	// 							i => `<li><strong>${i}</strong> ${JSON.stringify(evt[k][i])}</li>`
	// 						).join('')}</ul>`
	// 					: JSON.stringify(evt[k])
	// 				)}</code></li>
	// 		`).join('')}
	// 		</ul>
	// 	</body></html>`
	// });
}

async function handlerLogic(evt) {
	const {lat, lon} = evt.queryStringParameters;
	if (lat == null || lon == null) { return {error: 'BAD LAT LON'}; }
	const exclude = ['minutely', 'hourly', 'daily', 'flags'].join(',');
	const currentWeatherUrl = `${darkSkyBaseUrl}/${darkSkyApiKey}/${lat},${lon}?exclude=${exclude}`;
	try {
		const res = await fetch(currentWeatherUrl);
		return await res.json();
	} catch (err) {
		return err.message;
	}
}
