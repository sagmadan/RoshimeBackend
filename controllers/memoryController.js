const Memory = require('../models/Memory');

// Get all memories
exports.getMemories = async (req, res) => {
  try {
    const memories = await Memory.find();
    res.status(200).json(memories);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

// Update reaction for a specific memory by sid
exports.updateReaction = async (req, res) => {
  const { sid, reaction } = req.body;
  try {
    const memory = await Memory.findOne({ sid });
    if (!memory) {
      return res.status(404).json({ message: 'Memory not found' });
    }

    memory.reaction = reaction; // Update reaction
    await memory.save();
    res.status(200).json({ message: 'Reaction updated successfully', memory });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

// Add a new comment for a specific memory by sid
exports.addComment = async (req, res) => {
  const { sid, comment } = req.body;
  try {
    const memory = await Memory.findOne({ sid });
    if (!memory) {
      return res.status(404).json({ message: 'Memory not found' });
    }

    memory.comments.push(comment); // Append the new comment
    await memory.save();
    res.status(200).json({ message: 'Comment added successfully', memory });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};
