var authors = [
    {
        name: "Lawrence Nowell",
        nationality: "UK",
        books: ["Beowulf"]
    },
    {
        name: "William Shakespeare",
        nationality: "UK",
        books: ["Hamlet", "Othello", "Romeo and Juliet", "MacBeth"]
    },
    {
        name: "Charles Dickens",
        nationality: "US",
        books: ["Oliver Twist", "A Christmas Carol"]
    },
    {
        name: "Oscar Wilde",
        nationality: "UK",
        books: ["The Picture of Dorian Gray", "The Importance of Being Earnest"]
    },
]
const express = require('express');
const app = express();
//to access config.env 
const dotenv = require("dotenv");
dotenv.config({
	path: "../config.env",
});
const mongoose = require("mongoose");
app.use(express.json());

//connetion to mongoose
mongoose
	.connect(process.env.DB, {
		useNewUrlParser: true,
	})
	.then(() => {
		console.log("Connected to MongoDB !");
	});

  //Mongoose Schema 
  const AuthorSchema = new mongoose.Schema({
    name: {
      type: String,
      required: true,
    },
    nationality:{
      type: String,
    },
    books : String,
  });
  const Author = mongoose.model("Author", AuthorSchema);

//exercise 1
app.get('/', (_req, res) => {
    res.json({
      message : 'Authors API'});
});

  //exercise 2
app.get('/authors/:id', (req, res) => {
    let nameA = req.params.id;
    res.json(`${authors[nameA].name}, ${authors[nameA].nationality}`)
  });


//exercise 3
app.get('/authors/:id/books', (req, res) => {
    let nameA = req.params.id;
    res.json(`${authors[nameA].books}`)
  });

//app listener
app.listen(process.env.PORT, () => {
  console.log('Server started on port: ');
});