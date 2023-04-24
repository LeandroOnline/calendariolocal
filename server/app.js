const express = require("express");
const cors = require("cors");

const app = express();

//midlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

//routes
app.use("/api", require("./routes"));

module.exports = app;
