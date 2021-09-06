const express =require('express');
const router = express.Router();

// const expressValidator = require("express-validator");

users= [
    {
        name: "Peter",
        e_mail: "Andrews@gmail.com",
        nationality: "UK",
    },
    {
        name: "Sandra",
        surname: "bullocks@gmail.com",
        nationality: "UK",
    },
]

const user =(req, res) => {
	res.json({
		status: "OK",
		message: "No users yet",
	})       
}

const addUser= (req, res) => {
    const addUser1 = req.body;
	res.json({
		status: "OK",
		message: "User added ",
        data: addUser1,
	});
    console.log(addUser)
    }

    const randomUserName =(req, res) => {
        const name= req.params.name;
        let user1= users.filter(a => a.name===name);
      res.json({
          status : 'ok',
          data: [user1],
      })
    };

    const id =(req,res)=> {
        const idUser= req.params.id;
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