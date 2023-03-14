// eslint-disable-next-line no-undef
const config = require('../config');

const requestBody = { "price": 175 }

test('status should be 200', async () => {
    let actualStatus;
    try {
		const response = await fetch(`${config.API_URL}/api/v1/products/7`, {
			method: 'PUT',
			headers: {
			'Content-Type': 'application/json'
			},
			body: JSON.stringify(requestBody)
		});
        actualStatus = response.status;
	} catch (error) {
		console.error(error);
	}
    expect(actualStatus).toBe(200);
});

test('response should be ok', async () => {
    const expectedResponse = { ok: true };
    let actualResponse;
    try {
		const response = await fetch(`${config.API_URL}/api/v1/products/7`, {
			method: 'PUT',
			headers: {
			'Content-Type': 'application/json'
			},
			body: JSON.stringify(requestBody)
		});
        actualResponse = await response.json();
	} catch (error) {
		console.error(error);
	}
    expect(actualResponse).toEqual(expectedResponse);
});