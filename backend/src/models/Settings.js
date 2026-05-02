const mongoose = require('mongoose');

const settingsSchema = new mongoose.Schema({
  // Company Info
  companyName: { type: String, default: 'XenonEdge Lanka' },
  tagline: { type: String, default: 'Building the Digital Future' },
  description: { type: String, default: '' },

  // Contact Info
  email: { type: String, default: '' },
  phone: { type: String, default: '' },
  address: { type: String, default: '' },

  // Social Links
  facebook: { type: String, default: '' },
  twitter: { type: String, default: '' },
  instagram: { type: String, default: '' },
  linkedin: { type: String, default: '' },
  github: { type: String, default: '' },
  youtube: { type: String, default: '' },

  // SEO Defaults
  seoTitle: { type: String, default: '' },
  seoDescription: { type: String, default: '' },
  seoKeywords: { type: String, default: '' },

  // Hero Section
  heroTitle: { type: String, default: '' },
  heroSubtitle: { type: String, default: '' },
  heroCTA: { type: String, default: 'Get Started' },

  // About Section
  aboutTitle: { type: String, default: '' },
  aboutDescription: { type: String, default: '' },

  // About Section Stats
  statClients: { type: String, default: '25+' },
  statProjects: { type: String, default: '40+' },
  statExperience: { type: String, default: '1.5+' },
  statCountries: { type: String, default: '4+' },

  // Footer
  footerText: { type: String, default: '' },
  copyrightText: { type: String, default: '' },
}, { timestamps: true });

module.exports = mongoose.model('Settings', settingsSchema);
