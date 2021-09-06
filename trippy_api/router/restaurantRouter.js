const express = require("express");
const router = express.Router();
const hotelController = require('../controllers/restaurantController')

// hotel routers
router.get("/", restaurantController.getRestaurants);

router.get("/:id", restaurantController.restaurantId);

router.post("/", restaurantController.addRestaurant);

router.put("/:id", restaurantController.putId);

router.delete("/:id", restaurantController.deleterestaurant);

module.exports = router;