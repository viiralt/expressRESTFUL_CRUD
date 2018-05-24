const mongoose = require('mongoose');

mongoose.connect('mongodb://admin:admin@ds129540.mlab.com:29540/demogrounds', {})

const db = mongoose.connection;

db.on('error', (err) => {
  console.error(`🙅 🚫 🙅 🚫 🙅 🚫 🙅 🚫 → ${err.message}`);
});

module.exports = db;