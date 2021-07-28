const config = require("../config/auth.config");
const db = require("../models");
const Product = db.product;

var jwt = require("jsonwebtoken");

exports.addProduct = (req, res) => {
    const product = new Product({
        product_name: req.body.payload.product_name,
        price: req.body.payload.price,
        imageUrl: req.body.payload.imageUrl,
        description: req.body.payload.description,
        isAvailable: req.body.payload.isAvailable ? req.body.payload.isAvailable : true
    });

    product.save((err, user) => {
        if (err) {
            res.status(500).send({ message: err });
            return;
        } else {
            res.send({ message: "Product added successfully!" });
        }
    });
}

exports.getProducts = (req, res) => {
    Product.find()
     .exec((err, products) => {
            if (err) {
                res.status(500).send({ message: err });
                return;
            }

            if (!products) {
                return res.status(404).send({ message: "No products found." });
            }

            res.status(200).send({
                data: products
            });
        });
};