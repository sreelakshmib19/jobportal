var express = require("express");
const { findAllJob } = require("../controllers/job-controller");

const {
  getUserLogin,
  getUserSignin,
  createNewUser,
  doUserLogin,
  getJobList,
} = require("../controllers/user-controller");
var router = express.Router();

/* GET home page. */
router.get("/", findAllJob);
router.route("/login").get(getUserLogin).post(doUserLogin);
router.route("/sign-in").get(getUserSignin).post(createNewUser);
router.route("/");
router.route("/job-list").get(getJobList);
module.exports = router;
