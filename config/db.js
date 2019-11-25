const mongoose = require('mongoose');
const config = require('config');
const db = config.get('mongoURI');
const connectDb = async () => {
	try {
		await mongoose.connect(db, {
			useUnifiedTopology: true,
			useNewUrlParser: true
		});
		console.log(`Mongo connected with success`);
	} catch (error) {
		console.log(`Failled to connect to the dataBase ${error}`);
		//Exit process with failluer
		process.exit(1);
	}
	
};

module.exports = connectDb;
