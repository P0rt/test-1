// eslint-disable-next-line no-undef
const config = require('../config');

const requestBody = {
    "products": [
        {
            "id": 5,
            "quantity": 100500
        }
    ]
}

test('status should be 200', async () => {
    let actualStatus;
    try {
		const response = await fetch(`${config.API_URL}/api/v1/warehouses/check`, {
			method: 'POST',
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


test('status should be 200', async () => {
    const actualResult = [];
    try {
		const response = await fetch(`${config.API_URL}/api/v1/warehouses/check`, {
			method: 'POST',
			headers: {
			'Content-Type': 'application/json'
			},
			body: JSON.stringify(requestBody)
		});
        const data = await response.json();
        for (let shop in data) {
            for(let item in data[shop]) {
                actualResult.push(data[shop][item])
            }
        }
	} catch (error) {
		console.error(error);
	}
    expect(actualResult).not.toContain(true);
});