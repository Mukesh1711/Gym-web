const Class = require('../models/Class');

// Get all classes
exports.getAllClasses = async (req, res) => {
  try {
    const classes = await Class.find();
    res.json(classes);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get single class
exports.getClass = async (req, res) => {
  try {
    const gymClass = await Class.findById(req.params.id);
    if (!gymClass) return res.status(404).json({ message: 'Class not found' });
    res.json(gymClass);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Create new class
exports.createClass = async (req, res) => {
  const gymClass = new Class(req.body);
  try {
    const newClass = await gymClass.save();
    res.status(201).json(newClass);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Update class
exports.updateClass = async (req, res) => {
  try {
    const gymClass = await Class.findById(req.params.id);
    if (!gymClass) return res.status(404).json({ message: 'Class not found' });
    Object.assign(gymClass, req.body);
    const updatedClass = await gymClass.save();
    res.json(updatedClass);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete class
exports.deleteClass = async (req, res) => {
  try {
    const gymClass = await Class.findByIdAndDelete(req.params.id);
    if (!gymClass) return res.status(404).json({ message: 'Class not found' });
    res.json({ message: 'Class deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
