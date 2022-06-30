const mongoose = require('mongoose')
const dotenv = require('dotenv')
// const express = require('express')
const app = require('./app')

dotenv.config({path : './config.env'})

const DB = process.env.DATABASE.replace('<PASSWORD>',process.env.DATABASE_PASSWORD)

mongoose.connect(DB,{
    useNewUrlParser:true,
}).then(()=>{
    console.log ("DATA BASE ATTACHED")
})

const port=process.env.PORT || 3000
app.listen(port,()=>{
    console.log("server active now")
})