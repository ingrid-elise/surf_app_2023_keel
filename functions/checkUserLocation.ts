import { models, permissions, CheckUserLocation } from '@teamkeel/sdk';


export default CheckUserLocation(async (input) => {
	permissions.allow()

	// navigator.geolocation.getCurrentPosition(
	// 	(position) => {
	// 	  const latitude = position.coords.latitude.toString();
	// 	  const longitude = position.coords.longitude.toString();
	// 	  const latitude2 = position.coords.latitude;
	// 	  const longitude2 = position.coords.longitude;
	// 	  const airTemperature = "";
	  
	let {latitude, longitude} = input;

	let latitudeString: string = latitude.toString();
	let longitudeString: string = longitude.toString();

		  // Send notification if location is Bondi Beach
		  checkUserLocation(latitudeString, longitudeString);
	  
		  function checkUserLocation(latitude2: number, longitude2: number) {
			// Specific location coordinates
			const locationLat = -33.8864409;
			const locationLng = 151.2842256;
	  
			// Calculate distance between user and location using Haversine formula
			const R = 6371e3; // metres
			const φ1 = (latitude2 * Math.PI) / 180; // φ, λ in radians
			const φ2 = (locationLat * Math.PI) / 180;
			const Δφ = ((locationLat - latitude2) * Math.PI) / 180;
			const Δλ = ((locationLng - longitude2) * Math.PI) / 180;
	  
			const a =
			  Math.sin(Δφ / 2) * Math.sin(Δφ / 2) +
			  Math.cos(φ1) * Math.cos(φ2) * Math.sin(Δλ / 2) * Math.sin(Δλ / 2);
			const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
	  
			const distance = R * c; // Distance in metres
		  }
		
		// (error) => {
		//   console.error(error);
		// }


});
	