const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');

const dataSchema = new mongoose.Schema({
  segment: Number,
  title: String,
  latitude: Number,
  longitude: Number,
  addressProject: String,
  description: Array,
  phone: Number,
  juridical: String,
  address: String,
  direction: String,
  projectName: String,
  investor: String,
  scale: String,
  images: Array,
  balconyDirection: String,
  furniture: String,
  areaM2: Number,
  price: Number,
  facadeM: Number,
  wayInM: Number,
  floors: Number,
  bedroooms: Number,
  toilets: Number,
  dateSubmitted: Date,
  expirationDate: Date,
  floorNumber: Number,
  furnishingSell: String,
  apartmentFeature: String,
});

dataSchema.index({ title: 1 })

const Data = mongoose.model(
  "Data",
  dataSchema
);

async function getPerPage(limitPerPage, pageNumber) {
  return Data.find({}).limit(limitPerPage).skip(limitPerPage * pageNumber).exec();
}

async function get(id) {
  return Data.findById(id);
}

async function update(data) {
  return Data.updateOne({
    _id: data._id,
  }, data)
    .then(async (afterUpdated) => [null, afterUpdated])
    .catch(async (error) => [error]);
}


module.exports = {
  getPerPage,
  get,
  update,
};
