const express =require('express');
const router = express.Router();

// const expressValidator = require("express-validator");
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
  const UserSchema = new mongoose.Schema({
    name: {
      type: String,
      required: true,
    },
    e_mail:{
        type:String,
    },
    nationality:{
        type : String,
    },    
  });
  const UserController = mongoose.model("UserController", UserSchema);
  
//get 
const user = async (_req, res) => {

	res.json({
		status: "OK",
		message: "No users yet",
	})       
}
//post
const addUser= async (req, res) => {
   await UserController.create(req.body);
   
	res.json({
		status: "OK",
		message: "User added ",
        data: req.body,
	});
}
//get by name    
    const randomUserName = async (req, res) => {
        const name1= await UserController.findOne({name : req.params.name});
      res.json({
          status : 'ok',
          data: name1,
      })
    };
//get by id path/id/:id
    const id =async (req,res)=> {
        const idUser= await UserController.findById(req.params.id);
        res.json({
                status: "ok",
                data: idUser,
            })
        }
module.exports = {
	user: user,
    addUser: addUser,
    randomUserName: randomUserName, id: id,
}