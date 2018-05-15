export function handler(event, context, callback) {
	callback(null, {
		statusCode: 200,
		body: 'Hello World'
	});

	// callback(null, {
	// 	statusCode: 200,
	// 	body: "Hello, World\n\n"
	// 		+ JSON.stringify(event, undefined, 2)
	// 		+ "\n\n-------------------\n\n"
	// 		+ JSON.stringify(context, undefined, 2)
	// });
}
