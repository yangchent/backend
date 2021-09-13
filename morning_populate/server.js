const express = require("express");
const app = express();
app.use(express.json());
const router = require('./router')

//router
app.use("/students", router);
app.use("/addresses", router);


//listening to Localhost 3000 through env
app.listen(process.env.PORT,()=> {
    console.log("Listening on port 3000")
})
