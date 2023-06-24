const express = require("express");
const app = express();
const mongoose = require("mongoose");

const PORT = 3005;
const MongooseConnect = "Mongodb";
app.use(express.json());

const productSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  discreption: {
    type: Number,
    required: true,
  },
  ingredients:{
    type: String,
    required: true,
  },
  instructions:{
    type: String,
    required: true,
  },
  img:{
    type: <Img></Img>,
  }
});

const Products = mongoose.model("Products", productSchema);


app.post("/add", async (req, res) => {
  const newpProdct = new Products({
    ...req.body,
  });
  await newpProdct.save();
  res.send(newpProdct);
});


app.get("/AddItems", async (req, res) => {
  const data = await Products.find();
  res.send(data);
});


app.get ("/AddItems/:id", async (req,res)=>{
    const {id} = req.params
    const target = await Products.findById(id)
    res.send(target)
})


app.delete("/AddItems/:id", async (req, res) => {
  const { id } = req.params;
  await Products.findByIdAndDelete(id);
  res.send("product has been deleted");
});


mongoose.connect(MongooseConnect).then(() => {
  console.log("DB CONNECTED");
});


app.listen(PORT, () => {
  console.log("App is running");
});