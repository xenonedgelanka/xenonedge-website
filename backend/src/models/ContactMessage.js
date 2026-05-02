const mongoose = require('mongoose');

const contactMessageSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, default: '' },
  country: { type: String, default: '' },
  service: { type: String, default: '' },
  message: { type: String, required: true },
  status: { type: String, enum: ['new', 'read', 'replied', 'archived'], default: 'new' },
  ipAddress: { type: String, default: '' },
}, { timestamps: true });

module.exports = mongoose.model('ContactMessage', contactMessageSchema);
