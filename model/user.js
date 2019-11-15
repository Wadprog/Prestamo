const mongoose = require('mongoose')

const UserSchema= mongoose.Schema({

 name:{
  type:String,
  required:true
 },
 email:{
  type:String
 },
 password:{
  type:String,
  required:true
 },
 date:{
  type:Date,
  default:Date.now
 }
})

module.exports =User= mongoose.Model('user', UserSchema)