require("dotenv").config();

const express=require("express");
const app=express();
const cors = require("cors");

const mongoose = require("mongoose");


mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.error(err));

app.listen(PORT,()=>{
    console.log(`App is listening port ${PORT}`);
})
