const dataModel = require('../models/data.model');

exports.getAll = async (req,res) => {
  const limitPerPage = 5;
  const pageNumber = req.params.page >= 1 ? req.params.page : 1;
  const type = req.params.type;

  const data = await dataModel.getPerPage(limitPerPage, pageNumber, type);
  res.status(200).json(data);
}

exports.getDetail = async (req,res) => {
  const id = req.params.id;

  const item = await dataModel.get(id);
  res.status(200).json(item);
}

exports.search = async (req,res) => {
  const limitPerPage = 5;
  const pageNumber = req.params.page >= 1 ? req.params.page : 1;
  const search = req.params.input;

  const item = await dataModel.search(limitPerPage, pageNumber, search);
  res.status(200).json(item);
}