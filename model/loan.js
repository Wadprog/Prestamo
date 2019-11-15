const mongoose = require('mongoose')

const LoanSchema= mongoose.Schema({

 client:{
  type:mongoose.Schema.Types.ObjectId,
  ref:'user'
 },
 value:{
  type:Number,
  required:true
 },
 plan:{
  type:Number
 },
 payments:[{
  date:{
   type:Date,
   required:true
}, 
amount:{
 type:Number,
 required:true
},
collector:{
type:String
}
 }],

 status:{
  type:Boolean,
  required:true,
  default:false
 },

 date:{
  type:Date,
  default:Date.now
 }
})

module.exports =Loan= mongoose.Model('loan', LoanSchema)