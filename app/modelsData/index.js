const mongoose = require('mongoose');
const dbData = {};

mongoose.Promise = global.Promise;

dbData.mongoose = mongoose;
dbData.data = require('./data.model');

module.exports = dbData;