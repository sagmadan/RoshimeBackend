const mongoose = require('mongoose');

const MemorySchema = new mongoose.Schema({
  sid: { type: Number, required: true },
  date: { type: String, required: true },
  imgurl: { type: String, required: true },
  description: { type: String, required: true }
});

module.exports = mongoose.model('Memory', MemorySchema);
