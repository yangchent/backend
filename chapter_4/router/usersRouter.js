const express = require("express");
const router = express.Router();
const usersController = require('../controllers/usersController')

// ici, on est dans /users
router.get("/", usersController.user);

router.post("/", usersController.addUser);

router.get("/:userName", usersController.randomUserName);

router.get("/id/:id", usersController.id);

module.exports = router;