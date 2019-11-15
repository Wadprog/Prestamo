const mongoose= require('mongoose')

const ProfileSchema= mongoose.Schema({
 client:{
  type:mongoose.Schema.Types.ObjectId,
  ref:'client'
 },
dirreccion:{
 type:String,
 required:true
},
comment:{
 type:String,
 required:true,
},
telefono:{
 type:String,
 required:true
}
})

module.exports=Profile=mongoose.Model('user',ProfileSchema)