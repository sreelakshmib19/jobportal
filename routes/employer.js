const express = require("express");
const router = express.Router();
const {
  getNewJobForm,
  createNewJob,
} = require("../controllers/job-controller");

const {
  getSignUpForm,
  createSignupForm,
  doEmployerLogin,
  getEmployerLogin,
  getCompanyForm,
  updateCompanyProfile,
} = require("../controllers/employer-controller");

router.route("/add-new-job").get(getNewJobForm).post(createNewJob);
router.route("/employer-signup").get(getSignUpForm).post(createSignupForm);
router.route("/employer-login").get(getEmployerLogin).post(doEmployerLogin);
router
  .route("/update-company-profile/:id")
  .get(getCompanyForm)
  .post(updateCompanyProfile);
module.exports = router;
