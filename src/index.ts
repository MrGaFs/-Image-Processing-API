import express from "express";
import apiRouter from "./routes/api";

const app = express();
const port = 3000;

app.get('/', (req, res) => {
	res.send(`<h1>Hello and welcome To my website</h1>
	<h3>forgive my boring HTML 😅</h3>
	<a href='/api'>api list</a>
	`);
})

app.use('/api', apiRouter);

app.listen(port, () => {
	console.log(`Server is running on port ${port}`);
	
})
export default app;