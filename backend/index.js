import express from "express";
import mongoose from "mongoose";
import {
  registerValidator,
  loginValidator,
  postCreatePizzaValidator,
} from "./validations/validations.js";
import checkAuth from "./utils/checkAuth.js";
import * as PostController from "./controllers/PostController.js";
import { register, login, getMe } from "./controllers/UserController.js";

const password = encodeURIComponent("123");

const uri = `mongodb+srv://Bot5:${password}@cluster0.5qzjnvl.mongodb.net/blog?retryWrites=true&w=majority`;

mongoose
  .connect(uri)
  .then(() => console.log("Db Ok"))
  .catch((err) => console.log("Db error", err));

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.post("/auth/login", loginValidator, login);
app.post("/auth/register", registerValidator, register);
app.get("/auth/me", checkAuth, getMe);

app.get("/post", PostController.getAll);
app.get("/post/:id", PostController.getOne);
app.post("/post", checkAuth, postCreatePizzaValidator, PostController.create);
app.delete("/post/:id", checkAuth, PostController.remove);
app.patch("/post/:id", checkAuth, PostController.update);

app.listen(3000, (err) => {
  if (err) {
    return console.log(err);
  }
  console.log("Server ok");
});
