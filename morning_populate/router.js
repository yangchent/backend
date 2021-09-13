const express = require("express");
const router = express.Router();
const controller = require('./controller')


router.post("/", controller.addAddresses);
router.post("/", controller.addStudents);
router.get("/", controller.getStudentDetail);


module.exports = router;