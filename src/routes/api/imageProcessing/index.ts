import express from 'express';
import path from 'path';
import ImageScaler from './imageScaler';
import imgLister from './imgList';

const imageApi = express();

imageApi.get('/', async (req: express.Request, res: express.Response): Promise<void> => {
	if (Object.keys(req.query).length === 0)
		res.send(`<h1> This is image proccessing Api Modify the url to be able to use the api</h1>`)
	else {
		const filename = req.query.filename as string,
			hight = parseInt(req.query.hight as string),
			width = parseInt(req.query.width as string);
		if (!filename || !hight || !width)
			res.send(`<h1> This is image proccessing Api Modify the url to be able to use the api</h1>`)
		else if (hight <= 0 || width <= 0)
			res.send(`<h1> This is image proccessing Api Modify the url to be able to use the api</h1>`)
		else {
			try {
				const imgScaler = new ImageScaler(filename, hight, width);
				const scaledImg = await imgScaler.scale();
				res.sendFile(path.resolve(scaledImg[0]));
			}
			catch{
				res.send(`<h1>This image is not in the database</h1>
				<h2>Please check the url for the names</h2>
				<a href='image/list'>Go back to the home page</a>`);
			}
		}
	}
})

imageApi.use('/List', imgLister);

export default imageApi