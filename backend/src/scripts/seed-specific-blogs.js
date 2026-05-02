require('dotenv').config();
const mongoose = require('mongoose');
const Blog = require('../models/BlogPost');

const TARGET_BLOGS = [
  {
    title: 'The Future of E-Commerce: How AI is Transforming the Shopping Experience',
    excerpt: 'Explore how artificial intelligence is revolutionizing the retail landscape, from personalized recommendations to autonomous logistics.',
    content: 'Full article content for AI in E-commerce...',
    category: 'Artificial Intelligence',
    author: 'XenonEdge Team',
    status: 'published',
    slug: 'the-future-of-e-commerce-how-ai-is-transforming-the-shopping-experience',
    image: 'https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?q=80&w=800&auto=format&fit=crop',
    tags: ['AI', 'Ecommerce', 'Future']
  },
  {
    title: 'How to Start a SaaS Business',
    excerpt: 'A comprehensive guide on building, launching, and scaling a successful Software as a Service company in the modern market.',
    content: 'Full article content for starting a SaaS...',
    category: 'Business Strategy',
    author: 'XenonEdge Team',
    status: 'published',
    slug: 'how-to-start-a-saas-business',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop',
    tags: ['SaaS', 'Business', 'Startup']
  },
  {
    title: 'From Problem to Solution: How to Collaborate Effectively with a Tech Partner',
    excerpt: 'Mastering the art of technical partnership to transform business challenges into high-performance digital solutions.',
    content: 'Full article content for tech partnership...',
    category: 'Business',
    author: 'XenonEdge Team',
    status: 'published',
    slug: 'from-problem-to-solution-how-to-collaborate-effectively-with-a-tech-partner',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop',
    tags: ['Collaboration', 'Strategy', 'Partnership']
  },
  {
    title: 'Revolutionizing E-Commerce: The Role of AR and VR in Transforming Online Shopping',
    excerpt: 'Discover how immersive technologies like Augmented and Virtual Reality are creating the next generation of shopping experiences.',
    content: 'Full article content for AR/VR in E-commerce...',
    category: 'AR/VR Technology',
    author: 'XenonEdge Team',
    status: 'published',
    slug: 'revolutionizing-e-commerce-the-role-of-ar-and-vr-in-transforming-online-shopping',
    image: 'https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?q=80&w=800&auto=format&fit=crop',
    tags: ['AR', 'VR', 'Ecommerce']
  }
];

async function seed() {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('Connected to MongoDB');

    // Remove existing blogs to avoid duplicates/confusion if preferred, 
    // but here we just add these if they don't exist by slug.
    for (const blog of TARGET_BLOGS) {
      const exists = await Blog.findOne({ slug: blog.slug });
      if (!exists) {
        await Blog.create(blog);
        console.log(`✅ Seeded: ${blog.title}`);
      } else {
        console.log(`ℹ️ Already exists: ${blog.title}`);
      }
    }

    console.log('\n✨ Custom blog seeding completed!');
    process.exit(0);
  } catch (error) {
    console.error('❌ Seeding failed:', error);
    process.exit(1);
  }
}

seed();
