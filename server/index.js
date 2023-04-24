const dotenv = require("dotenv").config();

const app = require("./app");
require('./database.js');

app.listen(process.env.PORT, ()=>console.log("Server ON"));
