const studentModel = require("../models/studentModel");

const addStudentToMyGroup = (req, res) => {
  const { id } = req.params;
  const { name } = req.body;

  if (!id || !name) {
    return res.status(400).json({ error: "Invalid request" });
  }

  const item = { id, name };
  const isAdded = studentModel.addItemToMyGroup(item);

  if (isAdded) {
    return res.status(200).json({ message: "Item added successfully" });
  } else {
    return res.status(400).json({ error: "Item already exists" });
  }
};

const getStudentById = (req, res) => {
  const { id } = req.params;
  const student = studentModel.findStudentById(id);

  if (student) {
    return res.status(200).json(student);
  } else {
    return res.status(404).json({ error: "Item not found" });
  }
};

module.exports = {
  addStudentToMyGroup,
  getStudentById,
};
