export function handler(event, context, callback) {
	callback(null, {
		statusCode: 200,
		body: "Hello, World --- <br>"
			+ JSON.stringify(event)
			+ "<br>"
			+ JSON.stringify(context)
	});
}
