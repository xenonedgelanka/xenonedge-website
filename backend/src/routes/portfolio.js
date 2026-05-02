const express = require('express');
const Portfolio = require('../models/Portfolio');
const { protect } = require('../middleware/auth');
const { upload, cloudinary } = require('../config/cloudinary');

const router = express.Router();

// GET /api/portfolio - Public
router.get('/', async (req, res) => {
  try {
    const filter = req.query.all === 'true' ? {} : { isVisible: true };
    if (req.query.category) filter.category = req.query.category;
    const projects = await Portfolio.find(filter).sort({ order: 1, createdAt: -1 });
    res.json({ success: true, data: projects, count: projects.length });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// GET /api/portfolio/:id
router.get('/:id', async (req, res) => {
  try {
    const project = await Portfolio.findById(req.params.id);
    if (!project) return res.status(404).json({ success: false, message: 'Project not found' });
    res.json({ success: true, data: project });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// POST /api/portfolio - Admin only
router.post('/', protect, upload.single('image'), async (req, res) => {
  try {
    const projectData = { ...req.body };
    if (req.body.technologies && typeof req.body.technologies === 'string') {
      projectData.technologies = req.body.technologies.split(',').map(t => t.trim());
    }
    if (req.file) {
      projectData.image = req.file.path;
      projectData.imagePublicId = req.file.filename;
    }
    const project = await Portfolio.create(projectData);
    res.status(201).json({ success: true, data: project });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
});

// PUT /api/portfolio/:id - Admin only
router.put('/:id', protect, upload.single('image'), async (req, res) => {
  try {
    const project = await Portfolio.findById(req.params.id);
    if (!project) return res.status(404).json({ success: false, message: 'Project not found' });

    const updateData = { ...req.body };
    if (req.body.technologies && typeof req.body.technologies === 'string') {
      updateData.technologies = req.body.technologies.split(',').map(t => t.trim());
    }
    if (req.file) {
      if (project.imagePublicId) await cloudinary.uploader.destroy(project.imagePublicId);
      updateData.image = req.file.path;
      updateData.imagePublicId = req.file.filename;
    }

    const updated = await Portfolio.findByIdAndUpdate(req.params.id, updateData, { new: true, runValidators: true });
    res.json({ success: true, data: updated });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
});

// DELETE /api/portfolio/:id - Admin only
router.delete('/:id', protect, async (req, res) => {
  try {
    const project = await Portfolio.findById(req.params.id);
    if (!project) return res.status(404).json({ success: false, message: 'Project not found' });
    if (project.imagePublicId) await cloudinary.uploader.destroy(project.imagePublicId);
    await project.deleteOne();
    res.json({ success: true, message: 'Project deleted' });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

module.exports = router;
