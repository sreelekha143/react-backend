var express=require('express');
var cors=require('cors');
var bodyparser=require('body-parser');
var app=express();
var mongoose=require('mongoose');
var port=process.env.PORT || 5000

app.use(bodyparser.json());
app.use(cors());
app.use(bodyparser.urlencoded({
    extended:false
})
)
const mongoURI='mongodb://localhost:27017/react'
mongoose.connect(mongoURI,{useNewUrlParser:true}).then(()=>console.log("mongodb connected"))
.catch (err=> console.log(err))

var Users=require('./routes/Users')
//Router connection

const dishesRouter=require('./Routes/Dishes.Route');
const cartRouter=require('./Routes/Cart.Route');

app.use('/users',Users)
app.use('/dishes',dishesRouter);
app.use('/cart',cartRouter);
app.listen(port,()=>{
    console.log('server is running on port:'+port)
})