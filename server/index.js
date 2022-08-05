const express = require("express");
const app = express();// use for middlewares, api start, create routes
const mongoose = require("mongoose");
const UserModel = require('./models/Users'); // Model in db
const port = 5004;

const cors = require("cors");


app.use(express.json());
app.use(cors());
mongoose.connect("mongodb+srv://mongo:mongo@cluster0.cajquna.mongodb.net/myMERN?retryWrites=true&w=majority");


// Cors headers start;
// app.use((req, res, next) => {
//  res.setHeader('Access-Control-Allow-Origin', '*');
//  res.setHeader(
//   'Access-Control-Allow-Headers',
//   'Origin, X-Requested-With, Content-Type, Accept, Authorization'
//  );
//  res.setHeader(
//   'Access-Control-Allow-Methods',
//   'GET, POST, PATCH, DELETE, OPTIONS'
//  );
//  next();
// });



app.get("/getUsers", (req, res) => {
 UserModel.find({}, (err, result) => {
  if (err) {
   res.json(err); y;
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

app.listen(port, () => {
 console.log(`Server is running on ${port}`);
});