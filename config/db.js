const mongoose = require('mongoose');

const connectDb = () => {
	mongoose
		.connect('mongodb+srv://Almonte:Poupouy12@cluster0-tdnol.mongodb.net/test?retryWrites=true&w=majority', {
			useUnifiedTopology: true,
			useNewUrlParser: true
		})
		.then(() => console.log('Connected from Server.js'))
		.catch(err => console.log(`Db connection fails error details: ${err}`));
};

module.exports = connectDb;
