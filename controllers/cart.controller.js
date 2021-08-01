const db = require("../models");
const Cart = db.cart;
const mongoose = require("mongoose");

exports.addProductToCart = (req, res) => {
    Cart.findOne({
        user: req.userId
    }).exec((err, cart) => {
        if (err) {
            res.status(500).send({ message: err });
            return;
        }
        if (cart?.products) {
            cart.products = req.body
            cart.save((err, userC) => {
                if (err) {
                    res.status(500).send({ message: err });
                    return;
                } else {
                    res.send({ message: "Cart updated successfully!" });
                }
            })
        } else {
            let userCart = new Cart({
                user: req.userId,
                products: req.body
            });

            userCart.save((err, usersCart) => {
                if (err) {
                    res.status(500).send({ message: err });
                    return;
                } else {
                    res.send({ message: "Cart added successfully!" });
                }
            })
        }
    })
};

exports.getCart = (req, res) => {
    let id = mongoose.Types.ObjectId(req.userId);
    Cart.aggregate([
        { $match: { "user": id } },
        {
            $lookup: {
                from: 'products',
                localField: 'products._id',
                foreignField: '_id',
                as: 'product'
            }
        }
    ]).exec((err, cart) => {
        if (err) {
            res.status(500).send({ message: err });
            return;
        } 
        res.send(cart);
    });
}
