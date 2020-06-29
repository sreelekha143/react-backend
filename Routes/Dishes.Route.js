const express=require('express');
const router=express.Router();
const Dishes=require('../Models/Dishes.model');


//retriving data from database

router.get('/',(req,res,next)=>{
    Dishes.find(function(err,mesg){
        if(err){
            res.json(err );
        }
        else{
            res.json(mesg);
        }
    })
   
});
//Inserting the data
router.post('/',(req,res,next)=>{
    let newDishes= new Dishes({
        
        name: req.body.name,
        category:req.body.category,
        price:req.body.price,
       rating:req.body.rating,
        image: req.body.image 
        

    })
    
    newDishes.save((err,newDishes)=>{
        if(err){
            res.json(err);
        }
        else{
            res.json("Dishes added sucessfully");
        }
    })
})
//delete the data
router.delete('/:id',(req,res,next)=>{

    Dishes.findByIdAndDelete({ _id: req.params.id }, (err, result) => {
        if (err)
            res.status(404).send(err);
        else
            res.status(200).send(result);
    })
})






module.exports=router;