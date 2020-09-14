const dataModel = require('../models/data.model');

exports.getAll = async (req,res) => {
  const limitPerPage = 10;
  const pageNumber = req.params.page >= 1 ? req.params.page : 1;

  const data = await dataModel.getPerPage(limitPerPage, pageNumber);
  res.status(200).json(data);
}

exports.getDetail = async (req,res) => {
  const id = req.params.id;

  const item = await dataModel.get(id);
  res.status(200).json(item);
}