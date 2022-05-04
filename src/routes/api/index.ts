import express from 'express';
import imageApi from './imageProcessing';

const apiRouter = express();

apiRouter.get('/', (req, res) => {
	res.send(`<h1> Api lists<h1>
		<a href= '${req.originalUrl}/image'><h2>image API</img></a>
	`);
});
apiRouter.use('/image', imageApi);
export default apiRouter;