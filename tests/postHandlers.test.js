// eslint-disable-next-line no-undef
const config = require('../config');

const requestBody = {
    "products": [
        {
            "id": 5,
            "quantity": 1
        },
        {
            "id": 4,
            "quantity": 5
        }
    ]
}

test('status should be 200', async () => {
    let actualStatus;
    try {
		const response = await fetch(`${config.API_URL}/api/v1/warehouses/check`, {
			method: 'POST',
			// Set headers
			headers: {
			'Content-Type': 'application/json'
			},
			// Set request body and convert the data object into a JSON string
			body: JSON.stringify(requestBody)
		});
        actualStatus = response.status;
	} catch (error) {
		console.error(error);
	}
    expect(actualStatus).toBe(200);
});