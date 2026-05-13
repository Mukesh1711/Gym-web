const mongoose = require('mongoose');

const classSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  description: String,
  instructor: {
    type: String,
    required: true
  },
  schedule: {
    day: String,
    startTime: String,
    endTime: String
  },
  maxCapacity: {
    type: Number,
    default: 30
  },
  currentEnrollment: {
    type: Number,
    default: 0
  },
  difficulty: {
    type: String,
    enum: ['Beginner', 'Intermediate', 'Advanced'],
    default: 'Intermediate'
  },
  price: Number,
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Class', classSchema);
