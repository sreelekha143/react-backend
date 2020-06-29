
const express=require('express');
const jwt=require('jsonwebtoken');
const router=express.Router();
const Cart=require('../Models/Cart.model')

router.post('/',(req,res)=>{
    // var decoded=jwt.verify(req.headers['authorization'],process.env.SECRET_KEY)
    let newCart=new Cart({
      
        name: req.body.name,
        category:req.body.category,
        price:req.body.price,
      
        image: req.body.image 
        
    })
    newCart.save((err,result)=>{
        if(err) console.log(err);
        else res.status(200).send(result)
    })
})
router.delete('/:id',(req,res)=>{
            
    Cart.findByIdAndDelete({_id:req.params.id},(err,result)=>{
        if(err)
         res.status(404).send(err);
         else
         res.status(200).send(result)
    })
    
})
router.get('/',(req,res)=>{

    Cart.find((err,result)=>{
        if(err)
         res.status(404).send(err);
         else
         res.status(200).send(result)
    })
})
module.exports=router;