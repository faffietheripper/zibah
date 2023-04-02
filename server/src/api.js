"use strict";
const express = require("express");
const mongoose = require("mongoose");
const Product = require("./models/products");
const cors = require("cors");
const bp = require("body-parser");

require("dotenv").config();

const app = express();
app.use(cors());
app.use(bp.json());
app.use(bp.urlencoded({ extended: true }));

//const PORT = process.env.PORT || 8080;

//connection to database(pretty important)
mongoose.connect(process.env.DATABASE_URL);

//READ
app.get("https://zibahcreations.netlify.app/products", async (request, response) => {
  try {
    const products = await Product.find(request.query);
    //e.g. {product-type: bag}
    response.status(200).json(products);
  } catch (error) {
    console.log(error);
    response.status(404).json(error);
  }
});

//CREATE
app.post("https://zibahcreations.netlify.app/products", async (request, response) => {
  try {
    const newProduct = await Product.create(request.body);
    response.status(200).json(newProduct);
  } catch (error) {
    response.status(500).json(error);
  }
});

//DELETE e.g. localhost: 8080/products/9q050y2787293-(certain id)
app.delete("https://zibahcreations.netlify.app/products/:id", async (request, response) => {
  try {
    const id = request.params.id;
    const deletedProduct = await Product.findByIdAndDelete(id);
    response.status(200).send(deletedProduct);
  } catch (error) {
    console.log(error);
    response.status(500).json(error);
  }
});

//UPDATE
app.put("https://zibahcreations.netlify.app/products/:id", async (request, response) => {
  try {
    const updatedProduct = await Product.findByIdAndUpdate(request.params.id, request.body);
    response.status(200).json(updatedProduct);
  } catch (error) {
    console.log(error);
    response.status(500).json(error);
  }
});

/* app.listen(PORT, () => console.log(`server is running on port ${PORT}`));*/

// new Netlify way to start the server
const handler = serverless(app);

// we use this so the handler can use async (that mongoose uses)
module.exports.handler = async (event, context) => {
  // you can do any code here
  const result = await handler(event, context);
  // and here
  return result;
};
