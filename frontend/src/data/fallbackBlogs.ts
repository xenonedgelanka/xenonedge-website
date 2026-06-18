export interface BlogPost {
  _id: string
  title: string
  category: string
  createdAt: string
  image: string
  content: string
  excerpt: string
  author: string
  slug: string
  tags?: string[]
}

export const FALLBACK_BLOGS: BlogPost[] = [
  {
    _id: "modernizing-sri-lankan-businesses-the-shift-to-cloud-erp-systems",
    title: "Modernizing Sri Lankan Businesses: The Shift to Cloud ERP Systems",
    excerpt: "Explore how modern cloud-based ERP solutions are driving digital transformation, improving operational efficiency, and empowering local enterprises.",
    category: "Enterprise Solutions",
    author: "XenonEdge Team",
    createdAt: "2026-06-18T12:00:00.000Z",
    slug: "modernizing-sri-lankan-businesses-the-shift-to-cloud-erp-systems",
    image: "https://res.cloudinary.com/dnmf16bqn/image/upload/v1781796290/xenonedge_blogs/jfbwpqam4ufgs7jmsbhs.jpg",
    tags: ["Cloud ERP", "Digital Transformation", "Sri Lanka Business"],
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
    _id: "building-scalable-mobile-applications-react-native-vs-flutter",
    title: "Building Scalable Mobile Applications: React Native vs Flutter",
    excerpt: "A detailed comparison of React Native and Flutter for custom mobile development to help you choose the best framework for your next tech product.",
    category: "Mobile Development",
    author: "XenonEdge Team",
    createdAt: "2026-06-18T13:00:00.000Z",
    slug: "building-scalable-mobile-applications-react-native-vs-flutter",
    image: "https://res.cloudinary.com/dnmf16bqn/image/upload/v1781796291/xenonedge_blogs/fvxm96nwkksfonmibetr.jpg",
    tags: ["Mobile Apps", "React Native", "Flutter"],
    content: `
      <p>The demand for high-quality mobile applications is at an all-time high. For startups and enterprises looking to build cross-platform apps, the choice between React Native and Flutter remains a critical decision. Both frameworks offer powerful capabilities, but align with different engineering needs.</p>
      
      <h3>1. Development Efficiency & Code Reusability</h3>
      <p>Both React Native and Flutter allow developers to write a single codebase that runs on both iOS and Android. This dramatically cuts development time and cost in half. React Native relies on JavaScript and React, making it a natural choice for web developers. Flutter uses Dart and its own custom graphics engine, compiles directly to native code.</p>
      
      <h3>2. UI Customization and Performance</h3>
      <p>Flutter is renowned for building highly custom, pixel-perfect user interfaces with smooth animations. Because it renders its own widgets, the app looks identical across all platforms and OS versions. React Native, on the other hand, maps JavaScript components to native platform UI widgets, delivering a highly familiar native platform feel.</p>
      
      <h3>3. Ecosystem and Community Support</h3>
      <p>React Native has a massive community and a vast ecosystem of third-party libraries since it is backed by Meta and built on JavaScript. Flutter, backed by Google, has caught up rapidly, offering comprehensive built-in tools and documentation that make it highly reliable for enterprise-grade projects.</p>
    `
  },
  {
    _id: "the-power-of-custom-crm-transforming-customer-relationships-through-bespoke-software",
    title: "The Power of Custom CRM: Transforming Customer Relationships through Bespoke Software",
    excerpt: "Discover why off-the-shelf CRM software might be holding your business back and how a custom-engineered CRM drives growth and client retention.",
    category: "Custom Software",
    author: "XenonEdge Team",
    createdAt: "2026-06-18T14:00:00.000Z",
    slug: "the-power-of-custom-crm-transforming-customer-relationships-through-bespoke-software",
    image: "https://res.cloudinary.com/dnmf16bqn/image/upload/v1781796293/xenonedge_blogs/osdwtat9nvkarbwflzqa.jpg",
    tags: ["Custom CRM", "Bespoke Software", "Business Growth"],
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
]
