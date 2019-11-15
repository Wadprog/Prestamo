const express= require('express')
const router= express.Router(); 
const auth= require('../../middleware/auth')
const Profile = require('../../model/profile')
const user= require('../../model/user')
const {check, validationResult}= require('express-validator')

/*------------------------------------------------
                      Routes
---------------------------------------------------*/

//@route Get api/profiles/
//@desc Get  all  profiles
// @access private 
router.get('/', auth, async (req, res) => {
 try {
 
     const profiles = await Profile.find().populate('client', ['name', 'cedula']);
     return res.json(profiles)

 } catch (error) {
     console.log(` Error con el servidor ${error.message}`)
     return res.status(500).send("Error con el servidor")
 }

})

//@route Get api/profile/id
// @desc Get a profile in db by id
// @access private 

router.get("/:id", auth, async (req, res) => {

 try {
     const profile = await Profile.findById(req.params.id)
     if (!profile)
         return res.status(404).json({ msg: "No se encontro este perfile" })
     res.json(profile)
 } catch (error) {
     console.log(`Error del servidor al buscar perfil\n ${error}`)
     return res.status(500).send(`Error del servidor al buscar perfil ${error}`)
 }
})


