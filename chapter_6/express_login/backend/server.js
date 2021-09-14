const express = require("express");
const dotenv = require("dotenv");
dotenv.config({
    path: "../../../config.env",
});
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");
const app = express();

//middlewares
app.use(express.json());
app.use(cookieParser());

function protect(req,res,next){
    try{
        const data= jwt.verify(req.cookies.jwt, process.env.JWT_SECRET);
        req.cookies.jwtData= data;
        next();
    }catch(err){
        return res.status(404).json({
            message: "Your token is not valid"
        })
    }
}

//connection to mongoDB
mongoose.connect(process.env.DB, {
    useNewUrlParser: true,
})
.then(()=> {
    console.log("Connected to MongoDB !")
});

//Models
const UserSchema = mongoose.Schema({
    email : {
        type : String,
        unique: true,
    },
    password: String,
    cPassword: String,
    firstname: String,
    surname: String,
    dateOfBirth: Number,
});
const User= mongoose.model("User",UserSchema);

// Routes
app.post("/register", async (req, res)=>{
    const { email, password, cPassword, firstname, surname, dateOfBirth} = req.body;
    const hashedPassword= await bcrypt.hash(password, 12);
//Save user to DataBase
try{ await User.create({ email: email, password: hashedPassword, cPassword: password,firstname: firstname, surname: surname, dateOfBirth: dateOfBirth });
}    catch (err){
    return res.status(400).json({
        message: "User already exists"
    });
}
res.status(201).json({
    message : `User created with email: ${email}`
})
});

app.post("/login", async (req,res)=>{
    const {email, password }=req.body;
    const user= await User.findOne({email})
        if(!user){
            return res.status(404).json({
                message: "Invalid email or password",
            })
        }
    const isPasswordValid= await bcrypt.compare(password, user.password);
        if(!isPasswordValid){
            return res.status(404).json({
                message: "Invalid email or password",
            })
        } 
//Create token     
const token= jwt.sign({id: user._id}, process.env.JWT_SECRET);
//Create cookie
res.cookie("jwt", token,{httpOnly: true, secure: false});
res.json({
    message: "Here is your cookie for subsequent requests"
});      
});

//Authorization to protect the route with middleware
app.get("/users", protect, async (req, res) => {
    console.log("Requested by user: ", req.cookies.jwtData.id);

    res.json({
        message: "You are authorized",
    });
});

//app listener
app.listen(process.env.PORT, () => {
  console.log(`Server started on port 3000`);
});