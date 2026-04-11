const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  role: {
    type: String,
    enum: ['student', 'dept_admin', 'super_admin'],
    required: true
  },
  name: {
    type: String,
    required: true
  },
  department: {
    type: String,
    enum: ['CSE', 'ECE', 'MECH', 'CIVIL', 'IT', 'EEE', 'BME', 'MBA', 'MCA', 'AI&DS']
  },
  registerNumber: String,
  year: String,
  email: String,
  phone: String,
  facultyId: String,
  classIncharge: String,
  permissionGranted: {
    type: Boolean,
    default: false
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('User', userSchema);