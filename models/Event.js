const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  department: {
    type: String,
    required: true,
    enum: ['CSE', 'ECE', 'MECH', 'CIVIL', 'IT', 'EEE', 'BME', 'MBA', 'MCA', 'AI&DS']
  },
  place: {
    type: String,
    required: true,
    trim: true
  },
  eventDate: {
    type: String,
    required: true
  },
  timing: {
    type: String,
    required: true
  },
  poster: {
    type: String,
    default: ''
  },
  createdBy: {
    type: String,
    required: true
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Event', eventSchema);