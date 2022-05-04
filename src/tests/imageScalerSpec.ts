import ImageScaler from "../routes/api/imageProcessing/imageScaler";
import {promises as fs} from 'fs';

describe('Make sure that the links provided are correct and the pic is cached', ()=>{
	beforeAll(async () => {
		let folder = './assets/thumb';
		let files = await fs.readdir(folder);
		for(let i = 0 ; i < files.length ; ++ i){
			await fs.unlink(`${folder}/${files[i]}`);
		}
	});
	it('first test', async ()=>{
		expect(await new ImageScaler('encenadaport', 300, 300).scale())
		.toEqual(['assets/thumb/encenadaport_thumb300X300.jpg', false]);

	});

	it('second test', async ()=>{
		expect(await new ImageScaler('encenadaport', 300, 300).scale())
		.toEqual(['assets/thumb/encenadaport_thumb300X300.jpg', true]);

	});
})