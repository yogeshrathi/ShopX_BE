const mongoose = require("mongoose");

const Cart = mongoose.model(
    "Cart",
    new mongoose.Schema({
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        },
        products: [{
            product: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Product"
            }, 
            quantity: Number,
        }

        ]
    })
);

module.exports = Cart;