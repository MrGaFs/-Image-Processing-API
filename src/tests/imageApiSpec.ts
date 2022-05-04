import supertest from "supertest";
import app from "..";

const request = supertest(app);

describe('testing Api endpoint',() =>{
	it('The Api working correctly 1', async () => {
		const response = await request.get('/api/image?filename=encenadaport&width=200&hight=200')
		expect(response.status).toBe(200);

	});
	it('The Api working correctly 2', async () => {
		const response = await request.get('/api')
		expect(response.status).toBe(200);
	});
})