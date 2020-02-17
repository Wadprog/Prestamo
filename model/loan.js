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
	status: {
		type: String,
		default: "unpaid"
	},
	previousDebt:[
	{
		id: {
			type: mongoose.Schema.Types.ObjectId,
		ref: 'Loan'
		},
			amount: {
				type:Number, 
				required:true
			},
			date: {
				type:Date, 
				required:true
			}
	}
	], 

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
