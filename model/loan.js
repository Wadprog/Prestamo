const mongoose = require('mongoose');

const LoanSchema = mongoose.Schema({
	client: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'profile'
	},
	amount: {
		type: Number,
		required: true
	},
	plan: {
		type: String
	},
	paidStatus: {
		type: Boolean,
		default: false
	},
	dues: [
		{
			date: {
				type: Date,
				default: Date.now
			},
			amount: {
				type: Number,
				required: true
			},
			collector: {
				type: String
			}
		}
	],

	

	date: {
		type: Date,
		default: Date.now
	}
});

module.exports = Loan = mongoose.model('loan', LoanSchema);
