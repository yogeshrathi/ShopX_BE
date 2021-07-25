const config = require("../config/auth.config");
const db = require("../models");
const Banner = db.banner;

var jwt = require("jsonwebtoken");

exports.addBanner = (req, res) => {
    const banner = new Banner({
        banner_name: req.body.banner_name,
        imageUrl: req.body.imageUrl,
        description: req.body.description,
        isAvailable: req.body.isAvailable
    });

    banner.save((err, user) => {
        if (err) {
            res.status(500).send({ message: err });
            return;
        } else {
            res.send({ message: "Banner added successfully!" });
        }
    });
}

exports.getBanners = (req, res) => {
    Banner.find()
     .exec((err, banners) => {
            if (err) {
                res.status(500).send({ message: err });
                return;
            }

            if (!banner) {
                return res.status(404).send({ message: "No banner found." });
            }

            res.status(200).send({
                data: banner
            });
        });
};