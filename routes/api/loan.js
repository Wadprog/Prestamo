const express = require('express');
const router = express.Router();

const Loan = require('../../model/Loan');

/*----------------------------------------------------------
                         Routes
------------------------------------------------------------*/

//@routes post  api/loan/
//@desc add new loan
//@desc access public will private
const oldLoans = loans => {
	var totalOwed = 0;
	var unpaidLoans = [];
	loans.forEach(loan => {
		totalOwed += loan.amount;
		unpaidLoans.push({
			id: loan.id,
			amount: loan.amount,
			date: loan.date
		});
	});
	console.log(`here are previous dette ${unpaidLoans[0]}`);
	let info = {
		unpaidLoans: unpaidLoans,
		totalOwed: totalOwed
	};
	return info;
};

const updateOldLoans = async (loans, id) => {
	loans.forEach(async function(loan) {
		try {
			await loan.updateOne({
				status: 'transfered to ' + id,
				paidStatus: true
			});
		} catch (error) {
			console.log(error);
		}
	});
};
router.post('/', async (req, res) => {
	console.log(` here we are body : ${req.body.client}`);
	try {
		// get all the loans from that user.

		let loans = await Loan.find();
		let loan = new Loan(req.body);

		// check if there is a old debt
		const oldDebts = loans.filter(
			clientLoan => clientLoan.client == req.body.client && clientLoan.status == 'unpaid'
		);

		if (oldDebts.length > 0) {
			const debts = oldLoans(oldDebts);
		// upadating the loan adding the older loans 
			loan.amount += debts.totalOwed;
			debts.unpaidLoans.forEach(previousDebt => {
				loan.previousDebt.push(previousDebt);
			});
		
		}
		await loan.save();
		if (oldDebts.length > 0) updateOldLoans(oldDebts, loan.id);

		return res.json(loan);
	} catch (error) {
		console.log(`error ${error}`);
		return res.status(500).json(`Error ${error}`);
	}
});

//@routes get  api/loan/
//@desc get all loan
//@desc access public will private

router.get('/', async (req, res) => {
	try {
		const loans = await Loan.find();
		return res.json(loans);
	} catch (error) {
		console.log(`server error ${error}`);
		return res.status(500).json({ msg: `server error ${error}` });
	}
});
//@routes post   api/loan/dues/id
//@desc add new due to a loan
//@desc access public will private

router.post('/due/:id', async (req, res) => {
	try {
		let loan = await Loan.findById(req.params.id);
		if (!loan) return res.status(404).json({ msg: 'Prestamo no existe' });
		const { amount, collector } = req.body;
		let newDue = { amount };
		if (collector) newDue.collector = collector;
		loan.dues.push(newDue);

		await loan.save();
		res.json(loan);
	} catch (error) {
		console.log(`server error ${error}`);
		return res.status(500).json({ msg: 'server error' + error.message });
	}
});
//@routes post   api/loan/dues/id
//@desc add new dues(array) to a loan
//@desc access public will private
router.post('/dues/:id', async (req, res) => {
	try {
		//res.json(req.body)
		let loan = await Loan.findById(req.params.id);
		if (!loan) return res.status(404).json({ msg: 'Prestamo no existe' });
		req.body.map(due => loan.dues.push(due));

		await loan.save();
		res.json(loan);
	} catch (error) {
		console.log(`server error ${error}`);
		return res.status(500).json({ msg: 'server error' + error.message });
	}
});

module.exports = router;
