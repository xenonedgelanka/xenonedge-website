const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
  author: { type: String, required: true, trim: true },
  company: { type: String, required: true, trim: true },
  role: { type: String, required: true, trim: true },
  text: { type: String, required: true },
  rating: { type: Number, default: 5, min: 1, max: 5 },
  avatar: { type: String, default: '' },
  avatarPublicId: { type: String, default: '' },
  source: { type: String, enum: ['Direct', 'Google'], default: 'Direct' },
  isVisible: { type: Boolean, default: true },
  isApproved: { type: Boolean, default: false },
  order: { type: Number, default: 0 },
}, { timestamps: true });

module.exports = mongoose.model('Review', reviewSchema);
