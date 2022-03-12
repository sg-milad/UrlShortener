const express = require("express");
const app = express();
const morgan = require("morgan");
const DB = require("./connect/mongo");
const cors = require("cors");
const dotenv = require("dotenv").config();
app.use(morgan("dev"));
app.use(cors());

app.use(express.urlencoded({ extended: true }));
app.use(require("./routes/shorturl"));
let port = process.env.PORT || 8000;
if (port == null || port == "") {
  port = 8000;
}

app.listen(port);
