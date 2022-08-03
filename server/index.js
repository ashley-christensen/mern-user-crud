const express = require("express");
const app = express();// use for middlewares, api start, create routes
const mongoose = require("mongoose");
const UserModel = require('./models/Users'); // Model in db


app.use(express.json());
mongoose.connect("mongodb+srv://mongo:mongo@cluster0.cajquna.mongodb.net/myMERN?retryWrites=true&w=majority");

app.get("/getUsers", (req, res) => {
 UserModel.find({}, (err, result) => {
  if (err) {
   res.json(err);
  } else {
   res.json(result);
  }
 });
});

app.post("/createUser", async (req, res) => {
 const user = req.body;
 const newUser = new UserModel(user);
 await newUser.save();

 res.json(user);

});

app.listen(3020, () => {
 console.log('SERVER RUNS on port 3020!!');
});