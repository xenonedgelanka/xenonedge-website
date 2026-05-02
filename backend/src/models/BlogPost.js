const mongoose = require('mongoose');

const blogPostSchema = new mongoose.Schema({
  title: { type: String, required: true, trim: true },
  slug: { type: String, required: true, unique: true },
  excerpt: { type: String, required: true },
  content: { type: String, required: true },
  category: { type: String, required: true },
  tags: [{ type: String }],
  image: { type: String, default: '' },
  imagePublicId: { type: String, default: '' },
  author: { type: String, default: 'XenonEdge Team' },
  status: { type: String, enum: ['draft', 'published'], default: 'draft' },
  featured: { type: Boolean, default: false },
  views: { type: Number, default: 0 },
  readTime: { type: Number, default: 5 },
}, { timestamps: true });

blogPostSchema.pre('save', async function() {
  if (this.isModified('title') && !this.slug) {
    this.slug = this.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
  }
});

module.exports = mongoose.model('BlogPost', blogPostSchema);
