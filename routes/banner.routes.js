const controller = require("../controllers/banner.controller");

module.exports = function (app) {
    app.use(function (req, res, next) {
        res.header(
            "Access-Control-Allow-Headers",
            "x-access-token, Origin, Content-Type, Accept"
        );
        next();
    });

    app.post(
        "/api/banners/add", controller.addBanner
    );

    app.get("/api/banners", controller.getBanners);
};