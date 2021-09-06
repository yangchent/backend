const express = require('express');
const router = express.Router();
const app = express();

app.use(express.json());
const usersRouter = require("./router/usersRouter");

app.use("/", usersRouter);
app.use("/users", usersRouter);
app.use("/users/:userName", usersRouter);
app.use("/users/id/:id", usersRouter);

app.listen(3000, () => {
    console.log('Server listening....');
  });