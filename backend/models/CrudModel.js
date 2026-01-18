const mongoose=require("mongoose");

const CrudSchema = new mongoose.Schema(
  {
    title: {
      type: String,
    },
    content: {
      type: String,
    }
  },
  {
    timestamps: true
  }
);


module.exports=mongoose.model("Crud",CrudSchema);