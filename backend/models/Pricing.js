const mongoose = require('mongoose');

const pricingSchema = new mongoose.Schema({
  planName: {
    type: String,
    required: true,
    enum: ['Basic', 'Premium', 'Elite']
  },
  monthlyPrice: {
    type: Number,
    required: true
  },
  annualPrice: {
    type: Number,
    required: true
  },
  features: [String],
  description: String,
  isActive: {
    type: Boolean,
    default: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Pricing', pricingSchema);
