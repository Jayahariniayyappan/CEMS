const mongoose = require('mongoose');

const odRequestSchema = new mongoose.Schema({
  studentId: {
    type: String,
    required: true
  },
  eventId: {
    type: String,
    required: true
  },
  registrationId: {
    type: String,
    required: true
  },
  department: {
    type: String,
    required: true,
    enum: ['CSE', 'ECE', 'MECH', 'CIVIL', 'IT', 'EEE', 'BME', 'MBA', 'MCA', 'AI&DS']
  },
  status: {
    type: String,
    enum: ['pending', 'approved', 'rejected'],
    default: 'pending'
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('ODRequest', odRequestSchema);