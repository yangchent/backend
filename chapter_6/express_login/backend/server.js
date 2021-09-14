const express = require('express');
const app = express();
app.use(express.json());
const usersRouter = require("./router/usersRouter");

app.use("/users", router);

//app listener
app.listen(process.env.PORT, () => {
  console.log(`Server started on port`);
});