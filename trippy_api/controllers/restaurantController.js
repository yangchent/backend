//dotenv
const dotenv = require("dotenv");
dotenv.config({
    path: "../config.env",
});

//mongoose
const mongoose = require("mongoose");

mongoose
.connect(process.env.DB,{
    useNewUrlParser: true,
})
.then(() => {
    console.log("Connected to MongoDB !");
});

//Schema
const RestaurantSchema= new mongoose.Schema({
    name: {
        type : String,
        required: true,
    },
	address:{
        type: String,Number //number comes after String
    },
    city: {type : String},
	country:{type : String},
	stars:{type: Number } ,
	cuisine:{type: String},
	priceCategory:{type: Number } 
});
const Restaurant = mongoose.model("Restaurant" , RestaurantSchema)

//Restaurant list
const getRestaurants = async(_req, res) => {
    const restauList = await Restaurant.find()
        res.json({
            status: "OK",
            data: restauList
        })       
}
//restaurant :id
const restaurantId = async (req, res) => {
    const restaurant= await Restaurant.findById(req.params.id)
        res.json({
            status : 'ok',
            data: restaurant
        })
};
// Add a restaurant
const addRestaurant= async (req, res) => {
    const addRes = await Restaurant.create(req.body);
        res.json({
            status: "OK",
            message: "Restaurants added ",
            data: addRes,
        });
    }
//put restaurant
   const putId = async (req,res)=> {
    
    const restauName = await Restaurant.findByIdAndUpdate({ _id: req.params.id },{ name : req.query.name });
        res.json({
            status: "ok",
            message: "Restaurant name changed",
            data : restauName
        })
    }
//Delete Restaurant by id
    const deleterestaurant = async(req, res) => {

        const idRes= req.params.id;
            await Restaurant.findOneAndDelete(idRes)
        res.json({
            status : 'ok',
            data: idRes,
            message: "Restaurant deleted",
        })
    };

module.exports = {
	getRestaurants: getRestaurants,
    restaurantId: restaurantId,
    addRestaurant: addRestaurant,
	putId: putId,
    deleterestaurant: deleterestaurant,
}