import { promises as fs } from 'fs';
import express from 'express';

const imgLister = express();
imgLister.get(
	'/',
	async (req: express.Request, res: express.Response): Promise<void> => {
		const files = await fs.readdir('assets/full');
		res.send(`<h1>List of images names</h1> 
	${files.map((file) => `<h2>${file.slice(0, -4)}</h2>`).join('\n')}`);
	}
);
export default imgLister;
