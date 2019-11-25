const mongoose = require('mongoose');

const ProfileSchema = mongoose.Schema({
	name: {
		type: String,
		required: true
	},
	cedula: {
		type: String,
		required: true,
		unique: true
	},
	address: {
		type: String,
		required: true
	},
	addressRef: {
		type: String,
		required: true
	},
	comment: {
		type: String
	},
	tel: {
		type: String,
		required: true
	},
	date: {
		type: Date,
		default: Date.now
	},
	loans: [
		{
			amount: {
				type: Number,
				required: true
			},
			plan: {
				type: String,
				required: true
			},
			paidStatus: {
				type: Boolean,
				default: false
			},
			date: {
				type: Date,
				default: Date.now
			}
		}
	]
});

module.exports = Profile = mongoose.model('profile', ProfileSchema);
