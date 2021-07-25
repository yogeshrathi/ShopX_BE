const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const db = {};

db.mongoose = mongoose;

db.user = require("./user.model");
db.role = require("./role.model");
db.product = require("./product.model");
db.product = require("./banner.model");

db.ROLES = ["user", "admin", "moderator"];

module.exports = db;