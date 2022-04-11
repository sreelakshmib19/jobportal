const Job = require("../models/job-model");

const getNewJobForm = (req, res) => {
  res.render("add_new_jobs");
};
const createNewJob = async (req, res) => {
  console.log(req.body);
  try {
    const job = await Job.create(req.body);
    res.send("job added successfully");
  } catch (error) {
    console.log(error);
    res.redirect("/employer/add-new-job");
  }
};
const findAllJob = async (req, res) => {
  try {
    const allJob = await Job.find({});
    console.log(allJob);
    res.render("homepage", { allJob });
  } catch (error) {
    console.log(error);
  }
};
module.exports = { getNewJobForm, createNewJob, findAllJob };
