const Job = require('../models/Job');

// Get all jobs
const getAllJobs = async (req, res) => {
  try {
    const jobs = await Job.find().sort({ postedDate: -1 });
    res.status(200).json(jobs);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching jobs', error });
  }
};

// Get job by ID
const getJobById = async (req, res) => {
  try {
    const job = await Job.findById(req.params.id);
    if (!job) {
      return res.status(404).json({ message: 'Job not found' });
    }
    res.status(200).json(job);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching job', error });
  }
};

// Create a new job
const createJob = async (req, res) => {
  try {
    const { 
      title, 
      company, 
      location, 
      type, 
      salary, 
      experience, 
      description, 
      skills,
      requirements,
      responsibilities,
      education,
      applyLink,
      remote
    } = req.body;

    // Validate required fields
    if (!title || !company || !location || !description) {
      return res.status(400).json({ message: 'Missing required fields' });
    }

    // Convert comma-separated strings to arrays
    const skillsArray = typeof skills === 'string' ? 
      skills.split(',').map(s => s.trim()).filter(s => s) : 
      skills || [];
    
    const requirementsArray = typeof requirements === 'string' ? 
      requirements.split(',').map(r => r.trim()).filter(r => r) : 
      requirements || [];
    
    const responsibilitiesArray = typeof responsibilities === 'string' ? 
      responsibilities.split(',').map(r => r.trim()).filter(r => r) : 
      responsibilities || [];

    const newJob = new Job({
      title,
      company,
      location,
      type,
      salary,
      experience,
      description,
      skills: skillsArray,
      requirements: requirementsArray,
      responsibilities: responsibilitiesArray,
      education,
      applyLink,
      remote: remote || false
    });

    const savedJob = await newJob.save();
    res.status(201).json(savedJob);
  } catch (error) {
    res.status(500).json({ message: 'Error creating job', error });
  }
};

// Update a job
const updateJob = async (req, res) => {
  try {
    const job = await Job.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!job) {
      return res.status(404).json({ message: 'Job not found' });
    }
    res.status(200).json(job);
  } catch (error) {
    res.status(500).json({ message: 'Error updating job', error });
  }
};

// Delete a job
const deleteJob = async (req, res) => {
  try {
    const job = await Job.findByIdAndDelete(req.params.id);
    if (!job) {
      return res.status(404).json({ message: 'Job not found' });
    }
    res.status(200).json({ message: 'Job deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting job', error });
  }
};

module.exports = {
  getAllJobs,
  getJobById,
  createJob,
  updateJob,
  deleteJob
};
