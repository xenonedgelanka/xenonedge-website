const express = require('express');
const jwt = require('jsonwebtoken');
const Admin = require('../models/Admin');

const router = express.Router();

const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'xenonedgelanka@gmail.com',
    pass: 'zjxd sowo szlt todp'
  }
});

// Verification codes store
const verificationCodes = new Map();

const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: '7d' });
};

// @route POST /api/auth/login
router.post('/login', async (req, res) => {
  try {
    const { username, password } = req.body;
    
    if (!username || !password) {
      return res.status(400).json({ success: false, message: 'Please provide username and password' });
    }

    const admin = await Admin.findOne({ $or: [{ username }, { email: username }] });
    
    if (!admin || !(await admin.matchPassword(password))) {
      return res.status(401).json({ success: false, message: 'Invalid credentials' });
    }

    res.json({
      success: true,
      token: generateToken(admin._id),
      admin: {
        id: admin._id,
        username: admin.username,
        name: admin.name,
        email: admin.email,
        avatar: admin.avatar,
        role: admin.role,
      }
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// @route GET /api/auth/me
const { protect } = require('../middleware/auth');
router.get('/me', protect, async (req, res) => {
  res.json({ success: true, admin: req.admin });
});

// @route POST /api/auth/request-code
router.post('/request-code', protect, async (req, res) => {
  try {
    const code = Math.floor(100000 + Math.random() * 900000).toString();
    verificationCodes.set(req.admin._id.toString(), { code, expires: Date.now() + 10 * 60 * 1000 }); // 10 min

    await transporter.sendMail({
      from: '"XenonEdge Security" <xenonedgelanka@gmail.com>',
      to: req.admin.email,
      subject: "Your Admin Verification Code",
      text: `Your verification code is: ${code}. It expires in 10 minutes.`
    });

    res.json({ success: true, message: 'Verification code sent to your email' });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// @route POST /api/auth/update-profile
router.post('/update-profile', protect, async (req, res) => {
  try {
    const { username, password, code } = req.body;
    const stored = verificationCodes.get(req.admin._id.toString());

    if (!stored || stored.code !== code || Date.now() > stored.expires) {
      return res.status(400).json({ success: false, message: 'Invalid or expired verification code' });
    }

    const admin = await Admin.findById(req.admin._id);
    if (username) admin.username = username;
    if (password) admin.password = password;
    await admin.save();

    verificationCodes.delete(req.admin._id.toString());

    res.json({ success: true, message: 'Profile updated successfully' });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// Setup route disabled for security as admin already exists.

// @route DELETE /api/auth/wipe-secret-8899 - Removes all admins to allow fresh setup
router.delete('/wipe-secret-8899', async (req, res) => {
  try {
    await Admin.deleteMany({});
    res.json({ success: true, message: 'All admin accounts removed. You can now use the setup URL.' });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

module.exports = router;
