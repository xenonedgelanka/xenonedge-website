const express = require('express');
const Review = require('../models/Review');
const { protect } = require('../middleware/auth');
const { upload, cloudinary } = require('../config/cloudinary');

const router = express.Router();

// GET /api/reviews - Public
router.get('/', async (req, res) => {
  try {
    const filter = req.query.all === 'true' ? {} : { isVisible: true, isApproved: true };
    const reviews = await Review.find(filter).sort({ order: 1, createdAt: -1 });
    res.json({ success: true, data: reviews, count: reviews.length });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// GET /api/reviews/:id
router.get('/:id', async (req, res) => {
  try {
    const review = await Review.findById(req.params.id);
    if (!review) return res.status(404).json({ success: false, message: 'Review not found' });
    res.json({ success: true, data: review });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// POST /api/reviews - Admin only
router.post('/', protect, upload.single('avatar'), async (req, res) => {
  try {
    const reviewData = { ...req.body };
    if (req.file) {
      reviewData.avatar = req.file.path;
      reviewData.avatarPublicId = req.file.filename;
    }
    const review = await Review.create(reviewData);
    res.status(201).json({ success: true, data: review });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
});

// PUT /api/reviews/:id - Admin only
router.put('/:id', protect, upload.single('avatar'), async (req, res) => {
  try {
    const review = await Review.findById(req.params.id);
    if (!review) return res.status(404).json({ success: false, message: 'Review not found' });
    
    const updateData = { ...req.body };
    
    if (req.file) {
      if (review.avatarPublicId) {
        await cloudinary.uploader.destroy(review.avatarPublicId);
      }
      updateData.avatar = req.file.path;
      updateData.avatarPublicId = req.file.filename;
    }

    const updated = await Review.findByIdAndUpdate(req.params.id, updateData, { new: true, runValidators: true });
    res.json({ success: true, data: updated });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
});

// DELETE /api/reviews/:id - Admin only
router.delete('/:id', protect, async (req, res) => {
  try {
    const review = await Review.findById(req.params.id);
    if (!review) return res.status(404).json({ success: false, message: 'Review not found' });
    
    if (review.avatarPublicId) {
      await cloudinary.uploader.destroy(review.avatarPublicId);
    }
    
    await review.deleteOne();
    res.json({ success: true, message: 'Review deleted' });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// POST /api/reviews/google-sync - Admin only
router.post('/google-sync', protect, async (req, res) => {
  try {
    const { placeId } = req.body;
    const apiKey = process.env.GOOGLE_PLACES_API_KEY;

    if (!apiKey) {
      return res.status(400).json({ success: false, message: 'Google Places API Key is not configured' });
    }

    // Call Google Places API (New)
    const googleRes = await fetch(`https://places.googleapis.com/v1/places/${placeId}?fields=reviews&key=${apiKey}`);
    const data = await googleRes.json();

    if (!data.reviews || data.reviews.length === 0) {
      return res.status(404).json({ success: false, message: 'No reviews found for this place' });
    }

    let importedCount = 0;
    for (const gReview of data.reviews) {
      // Check if review already exists (simple check by text and author)
      const exists = await Review.findOne({ 
        author: gReview.authorAttribution.displayName,
        text: gReview.text.text 
      });

      if (!exists) {
        await Review.create({
          author: gReview.authorAttribution.displayName,
          company: 'Google Customer',
          role: 'Verified Reviewer',
          text: gReview.text.text,
          rating: gReview.rating,
          avatar: gReview.authorAttribution.photoUri,
          source: 'Google',
          isVisible: true,
          isApproved: false
        });
        importedCount++;
      }
    }

    res.json({ success: true, message: `Successfully synced ${importedCount} new reviews from Google.` });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

module.exports = router;
