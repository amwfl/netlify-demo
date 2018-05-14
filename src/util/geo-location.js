
export function getLoc() {
	if ("geolocation" in navigator) {
		// geolocation is available
		return new Promise((resolve, reject) => {
			navigator.geolocation.getCurrentPosition(resolve, reject);
		});
	} else {
		// geolocation IS NOT available
		return null;
	}
}
