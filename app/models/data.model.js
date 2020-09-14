const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
  segment: String,
  title: String,
  latitude: String,
  longitude: String,
  addressProject: String,
  description: Array,
  phone: String,
  juridical: String,
  address: String,
  direction: String,
  projectName: String,
  investor: String,
  scale: String,
  images: Array,
  balconyDirection: String,
  furniture: String,
  areaM2: String,
  price: String,
  facadeM: String,
  wayInM: String,
  floors: String,
  bedroooms: String,
  toilets: String,
  dateSubmitted: Date,
  expirationDate: Date,
  floorNumber: String,
  furnishingSell: String,
  apartmentFeature: String,
});

dataSchema.index({ title: 1 })

const Data = mongoose.model(
  "Data",
  dataSchema
);

async function getPerPage(limitPerPage, pageNumber, type) {
  return Data.find({ segment: type }).limit(limitPerPage).skip(limitPerPage * pageNumber).exec();
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
