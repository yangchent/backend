const express = require("express");
const dotenv = require("dotenv");
dotenv.config({
    path: "../config.env",
});
const mongoose= require("mongoose");
const app = express();

app.use(express.json());

//mongoDB connection
mongoose.connect(process.env.DB, {
    useNewUrlParser: true,
})
.then(() => {
    console.log("Connected to MongoDB !")
});

const StudentSchema = new mongoose.Schema({
     
    firstName : {
        type: String
    },
    surname: {
        type : String
    },
    address : {type : mongoose.Types.ObjectId, ref: "Address"}
 });

const AddressSchema = new mongoose.Schema({
    
    streetName: {
        type: String
    },
    streetNumber: {
        type: String
    },
    postCode: {
        type: String
    },
    city: {
        type: String
    },
});
const Student = mongoose.model("Student", StudentSchema);
const Address = mongoose.model("Address", AddressSchema);

app.post("/addresses", async (req, res) => {
	await Address.create(req.body);

	res.json({
		message: "OK",
	});
});
app.post("/students", async (req, res) => {
	await Student.create(req.body);

	res.json({
		message: "OK",
	});
});

app.listen(process.env.PORT,()=> {
    console.log("Listening on port 3000")
})