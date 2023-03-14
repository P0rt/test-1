// eslint-disable-next-line no-undef
const config = require('../config');

test('status should be 200', async () => {
    let actualStatus;
    try {
		const response = await fetch(`${config.API_URL}/api/v1/kits/788888`, {
			method: 'DELETE',
		});
        actualStatus = response.status;
	} catch (error) {
		console.error(error);
	}
    expect(actualStatus).toBe(200);
});

test('status should be 200', async () => {
    let actualStatus;
    try {
		const response = await fetch(`${config.API_URL}/api/v1/kits/7/products`);
        console.log(await response.json())
        actualStatus = response.status;
	} catch (error) {
		console.error(error);
	}
    expect(actualStatus).toBe(200);
});
