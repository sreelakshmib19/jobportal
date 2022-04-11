const fileUpload = require("express-fileupload");
// const multer = require("multer");
var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
const mongoose = require("mongoose");

var indexRouter = require("./routes/index");
const employerRouter = require("./routes/employer");
var usersRouter = require("./routes/users");

var app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "hbs");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use(fileUpload());
// app.use(multer());

async function connect() {
  try {
    let url =
      "mongodb+srv://admin:80898@projects.8p4fn.mongodb.net/job-portal?retryWrites=true&w=majority";
    await mongoose.connect(url);
    console.log("DB connected successfully");
  } catch (error) {
    console.log(error);
  }
}
connect();

app.use("/", indexRouter);
app.use("/employer", employerRouter);
app.use("/users", usersRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
