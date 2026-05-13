const Pricing = require('../models/Pricing');

// Get all pricing plans
exports.getAllPricing = async (req, res) => {
  try {
    const pricing = await Pricing.find({ isActive: true });
    res.json(pricing);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get single pricing plan
exports.getPricing = async (req, res) => {
  try {
    const pricing = await Pricing.findById(req.params.id);
    if (!pricing) return res.status(404).json({ message: 'Pricing plan not found' });
    res.json(pricing);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Create pricing plan
exports.createPricing = async (req, res) => {
  const pricing = new Pricing(req.body);
  try {
    const newPricing = await pricing.save();
    res.status(201).json(newPricing);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Update pricing plan
exports.updatePricing = async (req, res) => {
  try {
    const pricing = await Pricing.findById(req.params.id);
    if (!pricing) return res.status(404).json({ message: 'Pricing plan not found' });
    Object.assign(pricing, req.body);
    const updatedPricing = await pricing.save();
    res.json(updatedPricing);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete pricing plan
exports.deletePricing = async (req, res) => {
  try {
    const pricing = await Pricing.findByIdAndDelete(req.params.id);
    if (!pricing) return res.status(404).json({ message: 'Pricing plan not found' });
    res.json({ message: 'Pricing plan deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
