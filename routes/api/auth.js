const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
const jwt=require('jsonwebtoken')
const User = require('../../model/User');
/*----------------------------------------------------------
                         Routes
------------------------------------------------------------*/

//@routes get api/auth/
//@desc test route
//@desc access private
router.get('/', auth, async (req, res) => {
	try {
		const user = await User.findById(req.user.id).select('-password');
		res.json(user);
	} catch (error) {
		res.status(500).send('Server error fething user from database' + error);
	}
});

//@routes get api/auth/
//@desc test route
//@desc access public
router.post('/', async (req, res)=>{
 
})

module.exports = router;
