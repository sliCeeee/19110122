const studentModel = require("../models/studentModel");

const getMessage = (req, res) => {
  const { id } = req.params;

  if (id) {
    const student = studentModel.findStudentById(id);

    if (student) {
      return res.status(200).send(`<html><body><ul><li>${student.name}</li></ul></body></html>`);
    } else {
      return res.status(400).json({ error: "Invalid item" });
    }
  } else {
    const mygroup = studentModel.getMyGroup();
    const response = `<html><body><ul>${mygroup.map((student) => `<li>${student.name}</li>`).join("")}</ul></body></html>`;
    return res.status(200).send(response);
  }
};

module.exports = {
  getMessage,
};
