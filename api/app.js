const express = require("express");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();
require("./db.js");
require("./auth/passaport");

const router = require("./routes");

const app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors());

app.use("/api", router);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  console.log("ruta no encontrada");
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  console.log(err);
});

module.exports = app;
