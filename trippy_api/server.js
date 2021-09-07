const express = require('express');

const app = express();

app.use(express.json());
const hotelRouter = require("./router/hotelRouter");
const restaurantRouter= require("./router/restaurantRouter");
app.use("/hotels", hotelRouter);

app.use("/restaurants",restaurantRouter );

app.listen(3001, () => {
    console.log('Server listening....');
  });