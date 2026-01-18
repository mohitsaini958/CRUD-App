require("dotenv").config();

const express=require("express");
const app=express();
const cors = require("cors");

const mongoose = require("mongoose");

app.use(express.json());
app.use(cors());
const PORT=process.env.PORT || 4000;

app.use("/crud", require("./routes/routs"));

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.error(err));

app.listen(PORT,()=>{
    console.log(`App is listening port ${PORT}`);
})
