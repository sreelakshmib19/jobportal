const Employer = require("../models/employe-model");
const bcrypt = require("bcrypt");
const { render } = require("express/lib/response");
const async = require("hbs/lib/async");

const getSignUpForm = (req, res) => {
  res.render("employer-signup");
};

const createSignupForm = async (req, res) => {
  console.log(req.body);
  try {
    let oldPassword = req.body.password;
    req.body.password = await bcrypt.hash(oldPassword, 10);
    const employ = await Employer.create(req.body);
    res.send("sign-in success");
  } catch (error) {
    console.log(error);
    res.redirect("employer/employer-signup");
  }
};
const getEmployerLogin = (req, res) => {
  res.render("employer-login", { title: "login-page" });
};
const doEmployerLogin = async (req, res) => {
  try {
    const employer = await Employer.findOne({ Email_Id: req.body.Email_Id });
    console.log(employer);
    if (employer) {
      const exist = await bcrypt.compare(req.body.password, employer.password);
      console.log(exist);
      if (exist) return res.send("Success");
    }
    console.log("invalid employer");
    res.redirect("/employer/employer-login");
  } catch (error) {
    console.log(error);
    res.redirect("/employer/employer-login");
  }
};
const getCompanyForm = (req, res) => {
  res.render("update-company-profile", { id: "6237f70400717f1052d9d644" });
};
const updateCompanyProfile = async (req, res) => {
  console.log(req.body);
  try {
    const employer = await Employer.findOneAndUpdate(
      { _id: req.params.id },
      req.body,
      { new: true }
    );
    console.log(req.file);
    let company_image = req.file.company_image;
    await company_image.mv("./public/images/company/" + employer._id + ".jpg");
    res.send("success");
  } catch (error) {
    console.log(error);
    res.redirect("/employer/update-company-profile");
  }
  res.render("update-company-profile");
};

module.exports = {
  getSignUpForm,
  createSignupForm,
  getEmployerLogin,
  doEmployerLogin,
  getCompanyForm,
  updateCompanyProfile,
};
