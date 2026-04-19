const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

// Import routes
const jobRoutes = require('./routes/jobs');

const app = express();
app.use(cors());
app.use(express.json());

// Health Check Route (For DevOps Monitoring marks!)
app.get('/health', (req, res) => {
    res.status(200).json({ status: 'UP', message: 'Job Portal Server is running' });
});

// Use job routes
app.use('/api/jobs', jobRoutes);

const PORT = process.env.PORT || 5000;

// Connect to MongoDB (The 'db' name comes from your docker-compose file)
const mongoURI = process.env.MONGO_URI || 'mongodb://localhost:27017/jobportal';

mongoose.connect(mongoURI)
    .then(() => console.log('✅ MongoDB Connected'))
    .catch(err => console.log('❌ DB Connection Error:', err));

app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
});