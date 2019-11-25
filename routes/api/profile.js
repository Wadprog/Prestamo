const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
const Profile = require('../../model/Profile');
//const User = require('../../model/User');
const { check, validationResult } = require('express-validator');

/*------------------------------------------------
                      Routes
---------------------------------------------------*/

//@route Get api/profiles/
//@desc Get  all  profiles
// @access private
router.get('/', auth, async (req, res) => {
	try {
		const profiles = await Profile.find();
		return res.json(profiles);
	} catch (error) {
		console.log(` Error con el servidor ${error.message}`);
		return res.status(500).send(`Error con el servidor ${error}`);
	}
});

//@route Post  api/profile/
//@desc Create or update a profile for a client
// @access private

router.post(
	'/',
	[
		auth,
		[
			check('name', 'Se necesita un nombre').not().isEmpty(),
			check('address', 'Se necesita una dirreccion').not().isEmpty(),
			check('addressRef', 'Se necesita un referencia').not().isEmpty(),
			check('tel', 'Se necesita un numero de telefono').not().isEmpty(),
			check('cedula', 'Se necesita un numero cedula').not().isEmpty()
		]
	],
	async (req, res) => {
		const errors = validationResult(req);
		if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });

		try {
			const { name, cedula, address, addressRef, comment, tel, date } = req.body;

			let client = await Profile.findOne({ cedula });
			if (client) return res.status(400).json({ msg: 'Usuario con este cedula existe' });
			client = new Profile({
				name,
				cedula,
				address,
				addressRef,
				comment,
				tel,
				date
			});
			await client.save();
			return res.json(client);
		} catch (error) {
			console.log(`Server error`);
			res.status(400).send('Could not save user');
		}
	}
);

//@route Get api/profile/id
// @desc Get a profile in db by id
// @access private
/*
router.post("/", auth, async (req, res) => {

 try {
     const profile = await Profile.findById(req.params.id)
     if (!profile)
         return res.status(404).json({ msg: "No se encontro este perfile" })
     res.json(profile)
 } catch (error) {
     console.log(`Error del servidor al buscar perfil\n ${error}`)
     return res.status(500).send(`Error del servidor al buscar perfil ${error}`)
 }
})*/
module.exports = router;
