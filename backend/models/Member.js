const mongoose = require('mongoose');

const memberSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true
  },
  phone: {
    type: String,
    required: true
  },
  membershipType: {
    type: String,
    enum: ['Basic', 'Premium', 'Elite'],
    default: 'Basic'
  },
  joinDate: {
    type: Date,
    default: Date.now
  },
  status: {
    type: String,
    enum: ['Active', 'Inactive', 'Suspended'],
    default: 'Active'
  },
  age: Number,
  gender: String,
  emergencyContact: String,
  goal: String
}, { timestamps: true });

module.exports = mongoose.model('Member', memberSchema);
