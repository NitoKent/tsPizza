import express from "express";
import jwt from "jsonwebtoken";
import mongoose from "mongoose";
// import UserSchema from "./models/User"

const password = encodeURIComponent("123");

const uri = `mongodb+srv://Bot5:${password}@cluster0.5qzjnvl.mongodb.net/?retryWrites=true&w=majority`;

mongoose
  .connect(uri)
  .then(() => console.log("Db Ok"))
  .catch((err) => console.log("Db error", err));

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.post("/auth/login", (req, res) => {});

app.listen(3000, (err) => {
  if (err) {
    return console.log(err);
  }
  console.log("Server ok");
});
