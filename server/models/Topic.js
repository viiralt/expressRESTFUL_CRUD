const mongoose = require('mongoose');

const topicSchema = new mongoose.Schema({
  title: String,
  score: Number,
  date: {
    type: Date,
    default: Date.now()
  }
})

module.exports = mongoose.model('Topic', topicSchema);