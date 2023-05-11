import { GetTemperature } from "@teamkeel/sdk";

export default GetTemperature(async (input, api) => {
    api.permissions.allow()
	 // get the lat and long from the input type
	 const { latitude, longitude } = input;
	const params = "airTemperature";

	// call API
	const res = await api.fetch(
		`https://api.stormglass.io/v2/weather/point?lat=${latitude}&lng=${longitude}&params=${params}`,
		{ 
			headers: {
			Authorization:
			  "411512a6-b996-11ea-9409-0242ac130002-41151364-b996-11ea-9409-0242ac130002",
		  },
		}
	);

	//return whatever API returns
	return res.json()
});
