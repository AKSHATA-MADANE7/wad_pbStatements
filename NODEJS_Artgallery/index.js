const express=require("express");//import express
const app=express();//call express
app.use(express.static('public'));//use express
app.listen(4000,()=>{
    console.log("server running");
})
