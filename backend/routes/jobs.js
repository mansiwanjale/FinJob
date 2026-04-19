const express = require('express');
const router = express.Router();
const {
  getAllJobs,
  getJobById,
  createJob,
  updateJob,
  deleteJob
} = require('../controller/jobController');

// Routes
router.get('/', getAllJobs);              // GET all jobs
router.get('/:id', getJobById);           // GET job by ID
router.post('/', createJob);              // POST create new job
router.put('/:id', updateJob);            // PUT update job
router.delete('/:id', deleteJob);         // DELETE job

module.exports = router;
