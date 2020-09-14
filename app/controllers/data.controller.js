const dataModel = require('../models/data.model');

exports.getAll = async (req,res) => {
  const data = await dataModel.getAll();
  res.status(200).json(data);
}