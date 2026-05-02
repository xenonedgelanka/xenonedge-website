const express = require('express');
const BlogPost = require('../models/BlogPost');
const { protect } = require('../middleware/auth');
const { upload, cloudinary } = require('../config/cloudinary');

const router = express.Router();

// GET /api/blog - Public
router.get('/', async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const filter = {};

    if (req.query.status && req.query.status !== 'all') filter.status = req.query.status;
    else if (!req.query.status) filter.status = 'published';

    if (req.query.category) filter.category = req.query.category;
    if (req.query.featured === 'true') filter.featured = true;

    const total = await BlogPost.countDocuments(filter);
    const posts = await BlogPost.find(filter)
      .sort({ createdAt: -1 })
      .skip((page - 1) * limit)
      .limit(limit);

    res.json({
      success: true,
      data: posts,
      pagination: { page, limit, total, pages: Math.ceil(total / limit) }
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// GET /api/blog/:id
router.get('/:id', async (req, res) => {
  try {
    const post = await BlogPost.findById(req.params.id);
    if (!post) return res.status(404).json({ success: false, message: 'Post not found' });
    res.json({ success: true, data: post });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// POST /api/blog - Admin only
router.post('/', protect, upload.single('image'), async (req, res) => {
  try {
    const postData = { ...req.body };
    if (req.body.tags && typeof req.body.tags === 'string') {
      postData.tags = req.body.tags.split(',').map(t => t.trim());
    }
    if (req.file) {
      postData.image = req.file.path;
      postData.imagePublicId = req.file.filename;
    }
    if (!postData.slug) {
      postData.slug = postData.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '') + '-' + Date.now();
    }
    const post = await BlogPost.create(postData);
    res.status(201).json({ success: true, data: post });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
});

// PUT /api/blog/:id - Admin only
router.put('/:id', protect, upload.single('image'), async (req, res) => {
  try {
    const post = await BlogPost.findById(req.params.id);
    if (!post) return res.status(404).json({ success: false, message: 'Post not found' });

    const updateData = { ...req.body };
    if (req.body.tags && typeof req.body.tags === 'string') {
      updateData.tags = req.body.tags.split(',').map(t => t.trim());
    }
    if (req.file) {
      if (post.imagePublicId) await cloudinary.uploader.destroy(post.imagePublicId);
      updateData.image = req.file.path;
      updateData.imagePublicId = req.file.filename;
    }

    const updated = await BlogPost.findByIdAndUpdate(req.params.id, updateData, { new: true, runValidators: true });
    res.json({ success: true, data: updated });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
});

// DELETE /api/blog/:id - Admin only
router.delete('/:id', protect, async (req, res) => {
  try {
    const post = await BlogPost.findById(req.params.id);
    if (!post) return res.status(404).json({ success: false, message: 'Post not found' });
    if (post.imagePublicId) await cloudinary.uploader.destroy(post.imagePublicId);
    await post.deleteOne();
    res.json({ success: true, message: 'Post deleted' });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

module.exports = router;
