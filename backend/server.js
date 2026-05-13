const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

console.log('🚀 Using File-Based Storage (JSON)');
console.log('📊 Data will be saved to: backend/data/members.json');
console.log('🌐 View data at: http://localhost:5000/api/members/dashboard/view');

// Routes
app.use('/api/members', require('./routes/membersLocal'));

// Mock Classes Data
app.get('/api/classes', (req, res) => {
  const classes = [
    {
      _id: '1',
      name: 'Strength Training',
      instructor: 'John Smith',
      schedule: { day: 'Monday', startTime: '06:00', endTime: '07:00' },
      difficulty: 'Beginner',
      price: 50
    },
    {
      _id: '2',
      name: 'HIIT Cardio',
      instructor: 'Sarah Johnson',
      schedule: { day: 'Tuesday', startTime: '17:00', endTime: '18:00' },
      difficulty: 'Advanced',
      price: 60
    },
    {
      _id: '3',
      name: 'Yoga & Flexibility',
      instructor: 'Mike Davis',
      schedule: { day: 'Wednesday', startTime: '18:00', endTime: '19:30' },
      difficulty: 'Beginner',
      price: 40
    },
    {
      _id: '4',
      name: 'CrossFit',
      instructor: 'Emma Wilson',
      schedule: { day: 'Thursday', startTime: '07:00', endTime: '08:00' },
      difficulty: 'Intermediate',
      price: 70
    }
  ];
  res.json(classes);
});

// Mock Pricing Data
app.get('/api/pricing', (req, res) => {
  const pricing = [
    {
      _id: '1',
      planName: 'Basic',
      monthlyPrice: 29,
      annualPrice: 290,
      features: ['Access to gym', 'Basic equipment', 'Email support'],
      description: 'Perfect for beginners',
      isActive: true
    },
    {
      _id: '2',
      planName: 'Premium',
      monthlyPrice: 59,
      annualPrice: 590,
      features: ['All Basic features', 'Free classes', 'Personal trainer consultation', 'Priority support'],
      description: 'Most popular',
      isActive: true
    },
    {
      _id: '3',
      planName: 'Elite',
      monthlyPrice: 99,
      annualPrice: 990,
      features: ['All Premium features', 'One-on-one coaching', 'Nutrition plan', '24/7 priority support'],
      description: 'For serious athletes',
      isActive: true
    }
  ];
  res.json(pricing);
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'Server is running', timestamp: new Date() });
});

// Error handling middleware
app.use((error, req, res, next) => {
  console.error('Error:', error);
  res.status(error.status || 500).json({
    message: error.message || 'Internal Server Error',
    error: process.env.NODE_ENV === 'development' ? error : {}
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
  console.log(`📊 Data storage: File-based (backend/data/members.json)`);
  console.log(`🌐 Dashboard: http://localhost:${PORT}/api/members/dashboard/view`);
});
