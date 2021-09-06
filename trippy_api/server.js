const express = require('express');

const app = express();

app.use(express.json());
const hotelRouter = require("./router/hotelRouter");

app.use("/hotels", hotelRouter);//get 
// app.use("/hotels/:id", hotelRouter);//get
// app.use("/hotels", hotelRouter);//post hotel
// app.use("/hotels/:id?name=newName", hotelRouter);//put
// app.use("/hotels", hotelRouter);//delete hotel

app.listen(3001, () => {
    console.log('Server listening....');
  });