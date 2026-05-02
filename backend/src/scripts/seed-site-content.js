require('dotenv').config();
const mongoose = require('mongoose');
const Review = require('../models/Review');
const Portfolio = require('../models/Portfolio');
const Blog = require('../models/BlogPost');

const FALLBACK_REVIEWS = [
  {
    company: "Sirakukal Amaiyam",
    role: "Founder, President",
    author: "Sujeevan Tharmaratnam",
    text: "Collaborating with XenonEdge transformed our Volunteer Amaiyam. Their AI expertise streamlined processes, improved efficiency, and saved valuable time. Professional, innovative, and always meeting our needs.",
    rating: 5,
    source: 'Direct'
  },
  {
    company: "Sparrow Nest Photography",
    role: "Founder",
    author: "Amaran Sarujan",
    text: "We collaborated with XenonEdge to create a Portfolio Website, and the results were exceptional. The scalable, user-friendly site perfectly met our needs. Their support and professionalism were unmatched throughout.",
    rating: 5,
    source: 'Direct'
  },
  {
    company: "Acme Corp",
    role: "CTO",
    author: "Sarah Jenkins",
    text: "XenonEdge didn't just build our platform; they reimagined our entire digital infrastructure. The scalability they delivered is unmatched.",
    rating: 5,
    source: 'Direct'
  },
  {
    company: "HealthCo",
    role: "Product Lead",
    author: "Dr. Alan Grant",
    text: "Reliable engineering meeting healthcare compliance standards. Their attention to security details gave us complete peace of mind.",
    rating: 5,
    source: 'Direct'
  },
  {
    company: "TechFlow",
    role: "Director of Engineering",
    author: "Michael Chen",
    text: "The team at XenonEdge completely upgraded our workflow automation. The ROI was visible within weeks of deployment.",
    rating: 5,
    source: 'Direct'
  },
  {
    company: "BioSence",
    role: "Head of Research",
    author: "Dr. Emily Chen",
    text: "Working with XenonEdge was a game-changer for our data analysis platform. Their ability to handle complex datasets is vital.",
    rating: 5,
    source: 'Direct'
  }
];

const FALLBACK_PROJECTS = [
  { title: 'Mr Concrete', category: 'Web Design', description: 'Premium concrete solutions website.', technologies: ['React', 'Tailwind'], liveUrl: '', featured: true },
  { title: 'NEXA ERP', category: 'Mobile App', description: 'Enterprise resource planning mobile solution.', technologies: ['React Native', 'Node.js'], liveUrl: '', featured: true },
  { title: 'ONM Media', category: 'Graphic Design', description: 'Digital media and branding showcase.', technologies: ['Figma', 'Photoshop'], liveUrl: '', featured: false },
  { title: 'Sun Travels & Holidays', category: 'Web Design', description: 'Travel agency booking platform.', technologies: ['Next.js', 'MongoDB'], liveUrl: '', featured: true },
  { title: 'Health Vitality App', category: 'Mobile App', description: 'Health and wellness tracking application.', technologies: ['Flutter', 'Firebase'], liveUrl: '', featured: false },
  { title: 'Global Technical Systems', category: 'Graphic Design', description: 'Technical branding and identity.', technologies: ['Illustrator'], liveUrl: '', featured: false },
  { title: 'Saho Platform', category: 'Web Design', description: 'Community driven social platform.', technologies: ['React', 'Express'], liveUrl: '', featured: true },
  { title: 'ATLAS Technologies', category: 'Graphic Design', description: 'Technology firm visual identity.', technologies: ['Figma'], liveUrl: '', featured: false },
  { title: 'Fintech Dashboard', category: 'Web Design', description: 'Modern financial analytics dashboard.', technologies: ['React', 'D3.js'], liveUrl: '', featured: true },
];

const FALLBACK_BLOGS = [
  {
    title: 'Scaling with Serverless',
    excerpt: 'Best practices for serverless architectures that scale effortlessly.',
    content: 'Serverless architecture is a way to build and run applications and services without having to manage infrastructure...',
    category: 'Architecture',
    author: 'XenonEdge Team',
    status: 'published',
    slug: 'scaling-with-serverless',
    tags: ['Serverless', 'AWS', 'Scale']
  },
  {
    title: 'Designing for Performance',
    excerpt: 'Frontend strategies to improve UX and speed.',
    content: 'Performance is a key feature of modern web applications. Users expect instant interactions and smooth animations...',
    category: 'Design',
    author: 'XenonEdge Team',
    status: 'published',
    slug: 'designing-for-performance',
    tags: ['Performance', 'UX', 'Frontend']
  },
  {
    title: 'The Future of AI Agents',
    excerpt: 'How autonomous agents are reshaping the software lifecycle.',
    content: 'AI agents are no longer science fiction. From autonomous coding assistants to complex decision-making systems...',
    category: 'AI',
    author: 'XenonEdge Team',
    status: 'published',
    slug: 'future-of-ai-agents',
    tags: ['AI', 'Future', 'Agents']
  }
];

async function seed() {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('Connected to MongoDB');

    // Seed Reviews
    const reviewCount = await Review.countDocuments();
    if (reviewCount === 0) {
      await Review.insertMany(FALLBACK_REVIEWS);
      console.log('✅ Seeded reviews');
    } else {
      console.log('ℹ️ Reviews already exist, skipping');
    }

    // Seed Portfolio
    const portfolioCount = await Portfolio.countDocuments();
    if (portfolioCount === 0) {
      await Portfolio.insertMany(FALLBACK_PROJECTS);
      console.log('✅ Seeded portfolio items');
    } else {
      console.log('ℹ️ Portfolio already exists, skipping');
    }

    // Seed Blogs
    const blogCount = await Blog.countDocuments();
    if (blogCount === 0) {
      await Blog.insertMany(FALLBACK_BLOGS);
      console.log('✅ Seeded blog posts');
    } else {
      console.log('ℹ️ Blogs already exist, skipping');
    }

    console.log('\n✨ Database seeding completed successfully!');
    process.exit(0);
  } catch (error) {
    console.error('❌ Seeding failed:', error);
    process.exit(1);
  }
}

seed();
