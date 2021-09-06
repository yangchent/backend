const express = require('express');

const app = express();

app.use(express.json());
const hotelRouter = require("./router/hotelRouter");

app.use("/hotels", hotelRouter);

app.use("/restaurants",restaurantRouter );

app.listen(3001, () => {
    console.log('Server listening....');
  });