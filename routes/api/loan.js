const express = require('express');
const router = express.Router();

/*----------------------------------------------------------
                         Routes
------------------------------------------------------------*/

//@routes get api/user/
//@desc test route
//@desc access public
router.get('/', (req, res) => {
	res.send('Loan route');
});

module.exports = router;