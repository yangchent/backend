const express = require("express");
const router = express.Router();
const usersController = require('../controllers/usersController')

// ici, on est dans /users
router.get("/", usersController.user);

router.post("/users", usersController.addUser);

router.get("/users/:userName", usersController.randomUserName);

router.get("/users/id/:id", usersController.id);

module.exports = router;