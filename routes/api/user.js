const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const config = require('config');
const { check, validationResult } = require('express-validator');
//The model 
const User = require('../../model/User');
/*----------------------------------------------------------
                         Routes
------------------------------------------------------------*/

//@routes post api/user/
//@desc create new user
//@desc access public will be protected
router.post(
	'/',
	[
		check('name', 'Se necesita un nombre').not().isEmpty(),
		check('password', 'Entrar contrasena con un minimo de 4 caracter').isLength({ min: 4 })
	],
	async (req, res) => {
		const errors = validationResult(req);
		if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });
		//If no error
		const { name, password } = req.body;
		try {
			let user = await User.findOne({ name });
			if (user) return res.status(400).json({ errors: [ { msg: 'Existe un usuario con este nombre' } ] });

			//If user does not exist let create one
			user = new User({
				name,
				password
			});

			//Hashing the password.
			const salt = await bcrypt.genSalt(10);
			user.password = await bcrypt.hash(password, salt);
			//Saving the user in the database
			await user.save();
			// Creating the payload
			const payload = {
				user: {
					id: user.id
				}
			};
			//Using the payload a returning the token
			jwt.sign(
				payload,
				config.get('jwtSecret'),
				{
					expiresIn: 360000
				},
				(err, token) => {
					if (err) return res.status(500).json({ errors: [ { msg: 'Error al crear token ${err}' } ] });
					return res.json({ token });
				}
			);
		} catch (error) {
			console.log('Server error' + error);
			return res.status(500).json({ errors: [ { msg: error.message } ] });
		}
	}
);

module.exports = router;
