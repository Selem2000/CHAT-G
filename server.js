// import express$
const express = require("express");
const connectDB = require("./config/connectDB");

// create instense
const app = express();
require("dotenv").config();

// connect to database
connectDB();
// router
app.use(express.json());
app.use("/api/user", require("./router/user"));
app.use("/api/post", require("./router/post"));
app.use("/api/invitation", require("./router/invitatin"));
// port
const PORT = process.env.PORT;

// run server
app.listen(PORT, (err) => {
  err ? console.log(err) : console.log("server is running");
});
