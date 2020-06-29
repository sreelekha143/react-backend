const mongoose=require('mongoose');

const dishesSchema=mongoose.Schema({
    name:{
        type:String
    },
    category:{
        type:String
    },
    price:{
        type:Number
    },
    rating:{
        type:Number
    },
    image:{
type:String
    }
})


const Dish=module.exports=mongoose.model('Dish',dishesSchema)