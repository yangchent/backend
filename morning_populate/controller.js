const dotenv = require("dotenv");
dotenv.config({
    path: "../config.env",
});
const mongoose= require("mongoose");

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

const addAddresses= async (req, res) => {
	await Address.create(req.body);

	res.json({
		message: "OK",
	});
};
const addStudents = async (req, res) => {
	await Student.create(req.body);

	res.json({
		message: "OK",
	});
};
const getStudentDetail=async (_req, res)=>{
    try {
        const student= await Student.find().populate('address')
    res.json({
        message: "OK",
        data: student,
    });
}
catch(err){
    res.status(404).json({
        message: err,
    })
}
};
// function saveData(student, address){

//     app.post('/students/:id',async  (req,res) => {
//         student= await Student.findById(req.params.id)
//         res.json({
//             status: "ok",
//             data : student
//         })
//     })
// }

module.exports = {
    addAddresses: addAddresses,
    addStudents: addStudents,
    getStudentDetail: getStudentDetail
}