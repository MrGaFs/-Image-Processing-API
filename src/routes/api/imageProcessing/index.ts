import express from 'express';
import path from 'path';
import ImageScaler from './imageScaler';

const imageApi = express();

imageApi.get('/',async (req, res) =>{ 

	const filename = req.query.filename as string,
	hight = parseInt(req.query.hight as string),
	width = parseInt(req.query.width as string);

	const imgScaler = new ImageScaler(filename, hight, width);
	const scaledImg = await imgScaler.scale();
	res.sendFile(path.resolve(scaledImg[0]), (err)=>{
	});
})

export default imageApi