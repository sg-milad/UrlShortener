const express = require("express");
const app = express();
const morgan = require("morgan");
const DB = require("./connect/mongo");
const cors = require("cors");
const dotenv = require("dotenv").config();
app.use(morgan("dev"));
app.use(cors());

app.use(express.static("public"));

app.use(express.urlencoded({ extended: true }));
app.use(require("./routes/shorturl"));
app.set("view engine", "ejs");
let port = process.env.PORT;
if (port == null || port == "") {
  port = 8000;
}
app.listen(port);

app.listen(port, () => console.log("server is running"));
