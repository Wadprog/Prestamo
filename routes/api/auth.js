const express = require('express');
const router = express.Router();

/*----------------------------------------------------------
                         Routes
------------------------------------------------------------*/

//@routes post api/user/
//@desc create new user
//@desc access Protected
router.get('/', (req, res) => {
	res.send('hello');
});

module.exports = router;
