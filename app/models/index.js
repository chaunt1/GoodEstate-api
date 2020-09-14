const mongoose = require('mongoose');
const db = {};

mongoose.Promise = global.Promise;
db.mongoose = mongoose;
db.user = require("./user.model");
db.role = require("./role.model");
db.data = require('./data.model');
db.ROLES = ["user", "admin", "moderator"];

module.exports = db;