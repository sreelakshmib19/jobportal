const User = require("../models/user-model");
const bcrypt = require("bcrypt");
const getUserLogin = (req, res) => {
  res.render("login", { title: "login-page" });
};
const getUserSignin = (req, res) => {
  res.render("sign-in", { title: "signin-page" });
};
const createNewUser = async (req, res) => {
  console.log(req.body);
  try {
    let oldPassword = req.body.password;
    req.body.password = await bcrypt.hash(oldPassword, 10);
    const user = await User.create(req.body);
    res.send("sign-in success");
  } catch (error) {
    console.log(error);
    res.redirect("/sign-in");
  }
};
const doUserLogin = async (req, res) => {
  try {
    // console.log(req.body);
    const user = await User.findOne({ Email_Id: req.body.Email_Id });
    console.log(user);
    if (user) {
      const exist = await bcrypt.compare(req.body.password, user.password);
      console.log(exist);
      if (exist) return res.send("Success");
    }
    console.log("invalid user");
    res.redirect("/login");
  } catch (error) {
    console.log(error);
    res.redirect("/login");
  }
};

const getJobList = (req, res) => {
  // res.render("sign-in", { title: "job-list" })
  console.log(req.body);
};
module.exports = {
  getUserLogin,
  getUserSignin,
  createNewUser,
  doUserLogin,
  getJobList,
};
