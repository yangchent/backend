const express = require('express');
const app = express();
app.use(express.json());

//to access config.env 
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
  const StudentSchema = new mongoose.Schema({
    name: {
      type: String,
      required: true,
    },
    surname:{
      type: String,
    },
    nationality : String,
  });
  const Student = mongoose.model("Student", StudentSchema);

app.get('/', async (_req, res) => {
    const student= await Student.find();
    res.json({status :'ok',
            data : student
        });
});

app.get('/students/:id', async (req, res) => {
    const student= await Student.findById(req.params.id);
    res.json({
        status : "ok",
        data : student
    })
  });

app.post('/students', async (req, res) => {
    await Student.create(req.body) ;

    res.json({
        status: "ok",
        message: "new student added",
    })
  });


//app listener
app.listen(process.env.PORT, () => {
  console.log('Server started ');
});