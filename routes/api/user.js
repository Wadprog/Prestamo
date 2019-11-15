const express=require("express")
const router=express.Router()
const jwt = require("jsonwebtoken")
const gravatar = require("gravatar")
const auth=require('../../')
const User= require('../../model/user')
const {check, validationResult}=require('express-validator')
/*----------------------------------------------------------
                         Routes
------------------------------------------------------------*/

//@routes post api/user/
//@desc create new user
//@desc access Protected
router.post('/',[
 check("name", "Se necesita un nombre").not().isEmpty(),
 check("password", "Entrar contrasena con un minimo de 4 caracter").isLength({ min: 4 })
],async(req, res)=>{
const errors=validationResult(req);
if(!errors.isEmpty())
   return res.status(400).json({errors:errors.array()})
 //If no error 
 const {name, email, password}=req.body;
 
 try{
  //check if user exist 
  let user = await User.findOne({name})
  if(user)
  return res.status(400).json({errors:[{msg:'Existe un usuario con este nombre'}]})

  //If user does not exist let create one
  user=new User({
   name,
   email,
   password
  })

  await user.save();
  const payload={
   user:{
    id:user.id
   }
  }
  jwt.sign(
   payload,
   "My Big Secret",{
    expiresIn:360000
   },(err,token)=>{
    if(err)
    return res.status(500).json({errors:[{msg:'Error al crear token ${err}'}]})
    return res.json({token})
   }
  )

 }catch(error){
  console.log("Server error"+ error)
  return res.status(500).send(`server error ${error}`)
 }  

})
//@routes get api/user/
//@desc gell all users
//@desc access Protected
//router.get('/',auth,async (req, res)=>{})

module.exports=router;
