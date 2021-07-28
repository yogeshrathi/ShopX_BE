const config = require("../config/auth.config");
const db = require("../models");
const User = db.user;

exports.getUser = (req, res) => {
    User.findOne({
        _id: req.body.userid
    })
        .exec((err, user) => {
            if (err) {
                res.status(500).send({ message: err });
                return;
            }

            if (!user) {
                return res.status(404).send({ message: "User Not found." });
            }

            res.status(200).send({
                id: user._id,
                username: user.username,
                email: user.email,
            });
        });
};

exports.changePassword = (req, res) => {
    User.findOne({
        _id: req.body.userid
    })
        .exec((err, user) => {
            if (err) {
                res.status(500).send({ message: err });
                return;
            }

            if (!user) {
                return res.status(404).send({ message: "User Not found." });
            } else{
              return res.status(200);
            }
        });
};

