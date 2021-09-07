const express = require('express');
const app = express();

//to access config.env 
const dotenv = require("dotenv");
dotenv.config({
	path: "../config.env",
});
const mongoose = require("mongoose");
app.use(express.json());

//connection to mongoose
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
    books : [String],
  });
  const Author = mongoose.model("Author", AuthorSchema);

//exercise 1
app.get('/', async (_req, res) => {
  const author = await Author.find();
    res.json({
      message : 'Authors API'
    });
});

  //exercise 2
app.get('/authors/:id', async(req, res) => {
    const authorName = await Author.findById(req.params.id);
    res.json({
      message: "ok",
      data: authorName
    })
  });


//exercise 3
app.get('/authors/:id/books', async(req, res) => {
  const authorName =await Author.findById(req.params.id);
    res.json({
      message: "ok",
      data: authorName.books
     })
  });

 // Post some info
 app.post("/authors", async (req, res) => {
	await Author.create(req.body);

	res.json({
		message: "OK",
	});
});
//app listener
app.listen(process.env.PORT, () => {
  console.log('Server started on port: ');
});