const express = require('express');
const ContactMessage = require('../models/ContactMessage');
const { protect } = require('../middleware/auth');

const router = express.Router();

// POST /api/contact - Public (submit contact form)
router.post('/', async (req, res) => {
  try {
    const { firstName, lastName, email, phone, country, service, message } = req.body;
    
    if (!firstName || !email || !message) {
      return res.status(400).json({ success: false, message: 'Required fields missing' });
    }

    const msg = await ContactMessage.create({
      firstName, lastName, email, phone, country, service, message,
      ipAddress: req.ip,
    });

    res.status(201).json({ success: true, message: 'Message sent successfully', id: msg._id });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// GET /api/contact - Admin only
router.get('/', protect, async (req, res) => {
  try {
    const status = req.query.status;
    const filter = status ? { status } : {};
    const messages = await ContactMessage.find(filter).sort({ createdAt: -1 });
    res.json({ success: true, data: messages, count: messages.length });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// PATCH /api/contact/:id/status - Admin only (mark as read/replied)
router.patch('/:id/status', protect, async (req, res) => {
  try {
    const { status } = req.body;
    const msg = await ContactMessage.findByIdAndUpdate(req.params.id, { status }, { new: true });
    if (!msg) return res.status(404).json({ success: false, message: 'Message not found' });
    res.json({ success: true, data: msg });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// DELETE /api/contact/:id - Admin only
router.delete('/:id', protect, async (req, res) => {
  try {
    const msg = await ContactMessage.findByIdAndDelete(req.params.id);
    if (!msg) return res.status(404).json({ success: false, message: 'Message not found' });
    res.json({ success: true, message: 'Message deleted' });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// GET /api/contact/stats - Admin only
router.get('/stats', protect, async (req, res) => {
  try {
    const total = await ContactMessage.countDocuments();
    const newMsgs = await ContactMessage.countDocuments({ status: 'new' });
    const replied = await ContactMessage.countDocuments({ status: 'replied' });
    res.json({ success: true, data: { total, new: newMsgs, replied } });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

module.exports = router;
