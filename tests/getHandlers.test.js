// eslint-disable-next-line no-undef
const config = require('../config');

test('status should be 200', async () => {
	let actualStatus;
	try {
		const response = await fetch(`${config.API_URL}/api/v1/warehouses`);
		actualStatus = response.status;
	} catch (error) {
		console.error(error);
	}
	expect(actualStatus).toBe(200);
});

test('the opening hour is earlier than the closing hour', async () => {
	let response
	try {
		response = await fetch(`${config.API_URL}/api/v1/warehouses`);
	} catch (error) {
        console.error(error);
	}
	let data = await response.json();
	const startWorkingHours = data[0]["workingHours"]["start"];
	const endWorkingHours = data[0]["workingHours"]["end"];
	expect(endWorkingHours).toBeGreaterThan(startWorkingHours)
});
