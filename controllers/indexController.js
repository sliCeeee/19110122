const studentModel = require("../models/studentModel");

const getMyGroup = (req, res) => {
  const mygroup = studentModel.getMyGroup();
  return res.status(200).json(mygroup);
};

module.exports = {
  getMyGroup,
};
