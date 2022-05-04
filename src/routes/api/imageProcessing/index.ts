import express from 'express';
import path from 'path';
import ImageScaler from './imageScaler';

const imageApi = express();

imageApi.get('/', async (req, res) => {
	console.log(req.query);
	if (Object.keys(req.query).length === 0)
		res.send(`<h1> This is image proccessing Api Modify the url to be able to use the api</h1>`)
	else {

		const filename = req.query.filename as string,
			hight = parseInt(req.query.hight as string),
			width = parseInt(req.query.width as string);

		const imgScaler = new ImageScaler(filename, hight, width);
		const scaledImg = await imgScaler.scale();
		res.sendFile(path.resolve(scaledImg[0]), (err) => {
		}
		);
	}
})

export default imageApi