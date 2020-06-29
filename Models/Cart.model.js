const mongoose=require('mongoose');
const cartSchema=mongoose.Schema({
//   userid:{
// type:mongoose.Schema.Types.ObjectId,
// ref:'users'
//   },
    name:{
        type:String
        
    },
  category:{
      type:String
  },
    price:{
        type:Number
        
    },
    
    image:{
        type:String
    },
   
    
})
const Cart=module.exports=mongoose.model('Cart',cartSchema)