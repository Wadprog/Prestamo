const mongoose = require('mongoose')

const ClientSchema= mongoose.Schema({

 name:{
  type:String,
  required:true
 },
 cedula:{
  type:String,
  required:true
 },
 date:{
  type:Date,
  default:Date.now
 }
})

module.exports =Client= mongoose.Model('client', ClientSchema)