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
    const result = []
	for (let i = 0; i < data.length; i++) {
		const startWorkingHours = data[i]["workingHours"]["start"];
		const endWorkingHours = data[i]["workingHours"]["end"];
		// Store result of comparison into the 'result' variable
		result.push(startWorkingHours < endWorkingHours)
	}
	expect(result).not.toContain(false)
});
