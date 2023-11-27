const express = require("express")
const mongoose = require("mongoose")

const app = express()
const PORT = process.env.PORT || 5000

async function start(){
  try{
    await mongoose.connect("mongodb+srv://admin:<password>@cluster0.r5frqga.mongodb.net/?retryWrites=true&w=majority")
  } catch (error){
    console.error(error)
  }
}