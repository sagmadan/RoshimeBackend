const Memory = require('../models/Memory');

exports.getMemories = async (req, res) => {
  try {
    const memories = await Memory.find();
    res.status(200).json(memories);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};
