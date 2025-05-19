const express=require('express');
const app=express();
const myFirstMiddleware=(req,res,next)=>{
    console.log("this middlweware will be called for every request");
    next();
}
app.use(myFirstMiddleware);
const mySecondMiddleware=(req,res,next)=>{
    console.log("this second middleware will be called for every request");
    next();
} 
app.use(mySecondMiddleware);
// app.use(mySecondMiddleware);
app.get('/',(req,res)=>{
    res.send("hello from express");
})

app.listen(4000,()=>{
    console.log("server is running on port 4000");
})
