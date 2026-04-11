const mongoose = require('mongoose');

const registrationSchema = new mongoose.Schema({
  eventId: {
    type: String,
    required: true
  },
  studentId: {
    type: String,
    required: true
  },
  status: {
    type: String,
    enum: ['approved', 'rejected', 'cancelled'],
    default: 'approved'
  },
  odApproved: {
    type: Boolean,
    default: false
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Registration', registrationSchema);