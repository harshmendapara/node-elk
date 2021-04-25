const express = require('express');
require('dotenv').config()

const logger = require('./config/winston');

const PORT = process.env.PORT;

const app = express();

app.get('/', (req, res, next) => {
	const data = {
		date: new Date(),
		user: "telkom",
		items: [
			"one",
			"two"
		]
	};
	
	logger.info('info', 'user in', data);
	res.json({"hello": "helloooo"});
});

app.listen(PORT, () => {
	console.log(`app listen on port ${PORT}`);
});
