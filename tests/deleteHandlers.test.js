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

test('response should be ok', async () => {
    const expectedResponse = { ok: true };
    let actualResponse;
    try {
		const response = await fetch(`${config.API_URL}/api/v1/kits/788888`, {
			method: 'DELETE',
		});
        actualResponse = await response.json();
	} catch (error) {
		console.error(error);
	}
    expect(actualResponse).toEqual(expectedResponse);
});
