const express = require("express");
const router = express.Router();
const hotelController = require('../controllers/hotelController')

// hotel routers
router.get("/", hotelController.getHotels);

router.get("/:id", hotelController.hotelId);

router.post("/", hotelController.addHotel);

router.put("/:id", hotelController.putId);

router.delete("/:id", hotelController.deleteHotel);

module.exports = router;