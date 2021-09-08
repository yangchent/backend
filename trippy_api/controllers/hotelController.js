const express =require('express');
    //dotenv
const dotenv = require("dotenv");
dotenv.config({
	path: "../config.env",
});
const mongoose = require("mongoose");

//connetion to mongoose
mongoose
	.connect(process.env.DB, {
		useNewUrlParser: true,
	})
	.then(() => {
		console.log("Connected to MongoDB !");
	});

  //Mongoose Schema 
  const HotelSchema = new mongoose.Schema({
    name: {
      type: String,
      required: true,
    },
    address:{
        type: String,Number
    },
    city: {
        type: String,
    },    
    country:{
        type:String,
    }, 
    stars: {
        type: Number,
    },
    hasSpa:{
        type : Boolean,
    },   
    hasPool: {
        type: Boolean
    },
    priceCategory : Number
  });
  const Hotel = mongoose.model("Hotel", HotelSchema);

//hotel list
const getHotels = async (_req, res) => {
    const hotels = await Hotel.find()
	res.json({
		status: "OK",
		data: hotels,
	})       
}
//hotel :id
const hotelId = async(req, res) => {
    const hotel = await Hotel.findById(req.params.id);
        res.json({
            status : 'ok',
            data: hotel,
        })
};
// Add a hotel POST
const addHotel= async (req, res) => {
    const add1 = await Hotel.create(req.body) ;
    
        res.json({
            status: "OK",
            message: "Hotel added ",
            data: add1,
        });
    }
//put To change hotel name using /:id
   const putId = async (req,res)=> {

    const idHotel= req.params.id;
    const name1 =req.query.name;
        const hotelId = await Hotel.findOneAndUpdate({idHotel, name :name1});
           
            res.json({
                status: "ok",
                message: "Hotel name changed",
                data : hotelId
            })
    }
//Delete hotel by id::id
    const deleteHotel = async(req, res) => {

        const idHotel= req.params.id;
      
      await Hotel.findByIdAndDelete(idHotel);

        res.json({
            status : 'ok',
            message: "hotel deleted",
            data: idHotel
        })
    };
module.exports = {
	getHotels: getHotels,
    hotelId: hotelId,
    addHotel: addHotel,
    deleteHotel: deleteHotel,
    putId: putId,
}