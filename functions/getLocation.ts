import { GetLocation } from '@teamkeel/sdk';

export default GetLocation(async (input, api) => {
	api.permissions.allow()

	 // get the lat and long from the input type
	const { latitude, longitude } = input;

	// call API
	const res = await api.fetch(
		`https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${latitude}&lon=${longitude}`,
		{ 
			headers: {},
		}
	);

	//return whatever API returns
	return res.json()
});
	