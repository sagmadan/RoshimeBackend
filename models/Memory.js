const mongoose = require('mongoose');

const MemorySchema = new mongoose.Schema({
  title: { type: String, required: true },
  sid: { type: Number, required: true },
  date: { type: String, required: true },
  imgurl: { type: String, required: true },
  description: { type: String, required: true },
  tags: { type: [String], required: true },  // list of strings
  reaction: { type: String, default: null }, // optional
  comments: { type: [String], default: [] }  // optional, list of strings
});

module.exports = mongoose.model('Memory', MemorySchema);
