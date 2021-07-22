const mongoose = require("mongoose");

const Product = mongoose.model(
  "Product",
  new mongoose.Schema({
    product_name: String,
    price: String,
    imageUrl: String,
    description: String,
    isAvailable: Boolean,
  })
);

module.exports = Product;