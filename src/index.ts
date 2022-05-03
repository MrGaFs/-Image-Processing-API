import express from "express";

const app = express();
const port = 3000;

app.get('/api', (req, res) => {
	res.send('<h1>Hello that\'s me</h1>');
})

app.listen(port, () => {
	console.log('Hello world');
})