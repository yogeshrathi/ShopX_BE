const db = require("../models");
const Cart = db.cart;

exports.addProductToCart = (req, res) => {
    Cart.findOne({
        user: req.userId
    }).exec((err, cart) => {
        if (err) {
            res.status(500).send({ message: err });
            return;
        }
        if(cart?.products){
            cart.products = req.products
            cart.save((err, userC) => {
                if (err) {
                    res.status(500).send({ message: err });
                    return;
                } else {
                    res.send({ message: "Cart updated successfully!" });   
                }   
            })
        } else{
            let userCart = new Cart({
                user: req.userId,
                products: req.products
            });

            userCart.save((err, usersCart) => {
                if (err) {
                    res.status(500).send({ message: err });
                    return;
                } else {
                    res.send({ message: "Cart updated successfully!" });   
                }
            })
        } 
    })
};
