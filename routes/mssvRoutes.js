const express = require("express");
const router = express.Router();
const mssvController = require("../controllers/mssvController");

router.post("/:id", mssvController.addStudentToMyGroup);
router.get("/:id", mssvController.getStudentById);

module.exports = router;
