require('dotenv').config();
const mongoose = require('mongoose');
const cloudinary = require('cloudinary').v2;
const BlogPost = require('../models/BlogPost');

// Configure Cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const IMAGE_PATHS = {
  erp: "C:\\Users\\DELL\\.gemini\\antigravity-ide\\brain\\8a901fa9-1ae6-405a-bfb3-0b10b7a3a45b\\cloud_erp_dashboard_1781796226093.png",
  mobile: "C:\\Users\\DELL\\.gemini\\antigravity-ide\\brain\\8a901fa9-1ae6-405a-bfb3-0b10b7a3a45b\\mobile_development_ui_1781796244313.png",
  crm: "C:\\Users\\DELL\\.gemini\\antigravity-ide\\brain\\8a901fa9-1ae6-405a-bfb3-0b10b7a3a45b\\custom_crm_network_1781796261994.png"
};

const BLOGS_TO_SEED = [
  {
    title: 'Modernizing Sri Lankan Businesses: The Shift to Cloud ERP Systems',
    slug: 'modernizing-sri-lankan-businesses-the-shift-to-cloud-erp-systems',
    excerpt: 'Explore how modern cloud-based ERP solutions are driving digital transformation, improving operational efficiency, and empowering local enterprises.',
    category: 'Enterprise Solutions',
    author: 'XenonEdge Team',
    status: 'published',
    featured: true,
    tags: ['Cloud ERP', 'Digital Transformation', 'Sri Lanka Business'],
    imageKey: 'erp',
    content: `
      <p>In Sri Lanka's rapidly evolving economic landscape, traditional business models are facing unprecedented pressures. Companies are discovering that standard desktop software and manual spreadsheets are no longer sufficient to scale. The solution? Migrating to cloud-based Enterprise Resource Planning (ERP) systems.</p>
      
      <h3>1. Unified Operations in Real-Time</h3>
      <p>A Cloud ERP integrates all departments—finance, human resources, inventory, sales, and logistics—into a single database. For local Sri Lankan businesses, this means decisions can be made based on real-time data rather than waiting for weekly reports. Whether tracking stock in Colombo or sales in Jaffna, the data is instantly accessible.</p>
      
      <h3>2. Drastic Cost Optimization</h3>
      <p>On-premise servers require significant initial investments, regular hardware upgrades, and full-time IT administration teams. Cloud ERPs eliminate these capital expenses, running on secure, managed cloud infrastructure with scalable subscription models. Businesses only pay for what they use, lowering overhead substantially.</p>
      
      <h3>3. Mobile Accessibility and Hybrid Work</h3>
      <p>With cloud infrastructure, employees can manage operations securely from anywhere. Sales representatives can generate invoices on the go, managers can approve purchase orders from their mobile devices, and operations can continue uninterrupted.</p>
    `
  },
  {
    title: 'Building Scalable Mobile Applications: React Native vs Flutter',
    slug: 'building-scalable-mobile-applications-react-native-vs-flutter',
    excerpt: 'A detailed comparison of React Native and Flutter for custom mobile development to help you choose the best framework for your next tech product.',
    category: 'Mobile Development',
    author: 'XenonEdge Team',
    status: 'published',
    featured: true,
    tags: ['Mobile Apps', 'React Native', 'Flutter'],
    imageKey: 'mobile',
    content: `
      <p>The demand for high-quality mobile applications is at an all-time high. For startups and enterprises looking to build cross-platform apps, the choice between React Native and Flutter remains a critical decision. Both frameworks offer powerful capabilities, but align with different engineering needs.</p>
      
      <h3>1. Development Efficiency & Code Reusability</h3>
      <p>Both React Native and Flutter allow developers to write a single codebase that runs on both iOS and Android. This dramatically cuts development time and cost in half. React Native relies on JavaScript and React, making it a natural choice for web developers. Flutter uses Dart and its own custom graphics engine, compiling directly to native code.</p>
      
      <h3>2. UI Customization and Performance</h3>
      <p>Flutter is renowned for building highly custom, pixel-perfect user interfaces with smooth animations. Because it renders its own widgets, the app looks identical across all platforms and OS versions. React Native, on the other hand, maps JavaScript components to native platform UI widgets, delivering a highly familiar native platform feel.</p>
      
      <h3>3. Ecosystem and Community Support</h3>
      <p>React Native has a massive community and a vast ecosystem of third-party libraries since it is backed by Meta and built on JavaScript. Flutter, backed by Google, has caught up rapidly, offering comprehensive built-in tools and documentation that make it highly reliable for enterprise-grade projects.</p>
    `
  },
  {
    title: 'The Power of Custom CRM: Transforming Customer Relationships through Bespoke Software',
    slug: 'the-power-of-custom-crm-transforming-customer-relationships-through-bespoke-software',
    excerpt: 'Discover why off-the-shelf CRM software might be holding your business back and how a custom-engineered CRM drives growth and client retention.',
    category: 'Custom Software',
    author: 'XenonEdge Team',
    status: 'published',
    featured: true,
    tags: ['Custom CRM', 'Bespoke Software', 'Business Growth'],
    imageKey: 'crm',
    content: `
      <p>Customer Relationship Management (CRM) is the heart of modern sales and support. While off-the-shelf CRM products like Salesforce or HubSpot are popular, they often come with expensive license fees and rigid templates that force businesses to adapt their workflows to the software. Custom CRM systems solve this by wrapping around your unique business processes.</p>
      
      <h3>1. Perfect Alignment with Business Workflows</h3>
      <p>No two companies manage customer relationships the exact same way. A custom CRM is designed around your specific sales funnel, customer support queues, and automated follow-ups. You only build the features you need, keeping the user interface clean, simple, and easy for your team to adopt.</p>
      
      <h3>2. Zero License Fees & Lifetime Value</h3>
      <p>Commercial CRMs charge monthly per-user subscription fees. As your sales and support teams grow, these costs scale exponentially. With a custom CRM built by a tech partner like XenonEdge, you own the code and intellectual property outright, meaning no seat-based monthly fees.</p>
      
      <h3>3. Seamless Third-Party Integrations</h3>
      <p>A custom CRM can be built to integrate directly with your existing inventory management, invoicing platforms, legacy databases, and communication channels (like SMS, WhatsApp, and email APIs) without requiring complex workarounds.</p>
    `
  }
];

async function seed() {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('Connected to MongoDB');

    // Remove all existing blogs as requested
    const deleteResult = await BlogPost.deleteMany({});
    console.log(`Deleted ${deleteResult.deletedCount} existing blog posts.`);

    for (const blog of BLOGS_TO_SEED) {
      const localPath = IMAGE_PATHS[blog.imageKey];
      console.log(`Uploading image for "${blog.title}"...`);
      
      // Upload image to Cloudinary
      const uploadResult = await cloudinary.uploader.upload(localPath, {
        folder: 'xenonedge_blogs',
        resource_type: 'image'
      });
      
      console.log(`Uploaded image successfully: ${uploadResult.secure_url}`);

      // Save blog to DB
      const newPost = new BlogPost({
        title: blog.title,
        slug: blog.slug,
        excerpt: blog.excerpt,
        content: blog.content,
        category: blog.category,
        author: blog.author,
        status: blog.status,
        featured: blog.featured,
        tags: blog.tags,
        image: uploadResult.secure_url,
        imagePublicId: uploadResult.public_id,
        readTime: 5
      });

      await newPost.save();
      console.log(`Successfully created and saved blog: "${blog.title}"`);
    }

    console.log('\n🎉 Finished seeding three new and best blogs successfully!');
    process.exit(0);
  } catch (error) {
    console.error('❌ Seeding failed:', error);
    process.exit(1);
  }
}

seed();
