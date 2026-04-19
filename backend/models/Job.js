const mongoose = require('mongoose');

const jobSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  company: {
    type: String,
    required: true,
    trim: true
  },
  location: {
    type: String,
    required: true,
    trim: true
  },
  type: {
    type: String,
    enum: ['Full-time', 'Part-time', 'Contract', 'Freelance', 'Temporary'],
    default: 'Full-time'
  },
  salary: {
    type: String,
    trim: true
  },
  experience: {
    type: String,
    trim: true
  },
  description: {
    type: String,
    required: true
  },
  requirements: [String],
  responsibilities: [String],
  education: String,
  skills: [String],
  companyLogo: String,
  applyLink: String,
  deadline: Date,
  remote: {
    type: Boolean,
    default: false
  },
  postedDate: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Job', jobSchema);
