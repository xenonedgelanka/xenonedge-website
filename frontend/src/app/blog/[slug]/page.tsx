import Image from 'next/image'
import Link from 'next/link'
import { FiArrowLeft } from 'react-icons/fi'

const blogs = [
  {
    slug: 'the-future-of-e-commerce-how-ai-is-transforming-the-shopping-experience',
    title: 'The Future of E-Commerce: How AI is Transforming the Shopping Experience',
    category: 'Artificial Intelligence',
    date: '11th Dec, 2025',
    image: 'https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?q=80&w=1200&auto=format&fit=crop',
  },
  {
    slug: 'how-to-start-a-saas-business',
    title: 'How to Start a SaaS Business',
    category: 'Business Strategy',
    date: '11th Dec, 2025',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop',
  },
  {
    slug: 'from-problem-to-solution-how-to-collaborate-effectively-with-a-tech-partner',
    title: 'From Problem to Solution: How to Collaborate Effectively with a Tech Partner',
    category: 'Business',
    date: '11th Dec, 2025',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1200&auto=format&fit=crop',
  },
  {
    slug: 'revolutionizing-e-commerce-the-role-of-ar-and-vr-in-transforming-online-shopping',
    title: 'Revolutionizing E-Commerce: The Role of AR and VR in Transforming Online Shopping',
    category: 'AR/VR Technology',
    date: '11th Dec, 2025',
    image: 'https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?q=80&w=1200&auto=format&fit=crop',
  }
]

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = blogs.find(b => b.slug === params.slug) || blogs[0]

  return (
    <>
      <section className="hero-dark pt-32 pb-20 bg-gradient-to-br from-[#071E3D] to-[#0a2444] text-white">
        <div className="container relative z-10">
          <Link href="/blog" className="inline-flex items-center gap-2 text-sky-400 hover:text-white mb-8 font-semibold transition-colors">
            <FiArrowLeft size={20} /> Back to Blogs
          </Link>

          <div className="max-w-4xl">
            <span className="inline-block px-4 py-1.5 rounded-md bg-sky-500/10 border border-sky-500/30 text-sky-400 font-bold uppercase tracking-[0.3em] text-[10px] mb-6">
              {post.category}
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-tight mb-6">
              {post.title}
            </h1>
            <div className="text-slate-300 font-medium tracking-wide">
              Published on {post.date}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container flex flex-col lg:flex-row gap-12 lg:gap-20">
          {/* Main Content Area */}
          <article className="lg:w-2/3">
            <div className="relative aspect-[16/9] w-full rounded-md overflow-hidden border-2 border-[#0B1E36] shadow-xl shadow-sky-900/5 mb-12">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover"
                priority
              />
            </div>

            <div className="prose prose-lg max-w-none text-slate-600 prose-headings:text-[#071E3D] prose-headings:font-black prose-a:text-sky-600 prose-li:marker:text-sky-500">
              <p className="lead text-xl md:text-2xl text-[#071E3D] font-medium leading-relaxed mb-8">
                In the past decade, e-commerce has evolved from a niche market to a global powerhouse, and artificial intelligence (AI) is driving much of this transformation. AI is not just a buzzword; it’s becoming the backbone of modern e-commerce.
              </p>

              <h2 className="text-3xl mt-12 mb-6">Personalization at Scale</h2>
              <p className="mb-4">One of the most significant impacts AI has had on e-commerce is the ability to personalize shopping experiences. Using AI algorithms, retailers can analyze customer behavior, preferences, and browsing patterns to offer tailor-made recommendations. Think of the &quot;Customers who bought this also bought&quot; feature — but on a much more advanced level.</p>
              <ul className="list-disc pl-6 mb-8 space-y-2">
                <li>Personalized product recommendations</li>
                <li>Dynamic pricing models based on demand and competition</li>
                <li>Customized marketing messages for different customer segments</li>
              </ul>

              <h2 className="text-3xl mt-12 mb-6">AI-Powered Chatbots: Your 24/7 Virtual Assistant</h2>
              <p className="mb-8">Chatbots powered by AI have become a crucial part of customer service in e-commerce. These intelligent assistants can handle a variety of tasks, from answering product-related questions to guiding customers through the checkout process.</p>

              <h2 className="text-3xl mt-12 mb-6">Inventory and Supply Chain Optimization</h2>
              <p className="mb-8">AI is also reshaping the back end of e-commerce, where it plays a pivotal role in inventory management and supply chain optimization. By analyzing data from sales trends and consumer behavior, AI can forecast demand, suggest restocking strategies, and even predict shipping times, leading to better inventory control.</p>

              <div className="mt-16 pt-8 border-t border-slate-200">
                <div className="flex gap-4 items-center">
                  <span className="font-bold text-[#071E3D]">Tags:</span>
                  <div className="flex gap-2">
                    <span className="px-3 py-1 bg-slate-100 rounded-lg text-slate-600 text-sm font-semibold hover:bg-sky-100 hover:text-sky-600 cursor-pointer transition-colors">#ECommerce</span>
                    <span className="px-3 py-1 bg-slate-100 rounded-lg text-slate-600 text-sm font-semibold hover:bg-sky-100 hover:text-sky-600 cursor-pointer transition-colors">#ArtificialIntelligence</span>
                  </div>
                </div>
              </div>
            </div>
          </article>

          {/* Sidebar Area */}
          <aside className="lg:w-1/3">
            <div className="sticky top-24">
              <h3 className="text-2xl font-black text-[#071E3D] mb-8 relative inline-block">
                Recent Posts
                <div className="absolute -bottom-2 left-0 w-1/2 h-1 bg-sky-500 rounded-full"></div>
              </h3>

              <div className="flex flex-col gap-6">
                {blogs.filter(b => b.slug !== post.slug).map(recent => (
                  <Link key={recent.slug} href={`/blog/${recent.slug}`} className="group flex gap-4 items-center p-3 rounded-md hover:bg-slate-50 border border-transparent hover:border-slate-100 transition-all">
                    <div className="relative w-24 h-24 rounded-md overflow-hidden shrink-0 shadow-sm">
                      <Image
                        src={recent.image}
                        alt={recent.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <div>
                      <span className="text-[10px] font-black text-sky-600 uppercase tracking-[0.15em] block mb-2">{recent.date}</span>
                      <h4 className="text-sm md:text-base font-bold text-[#071E3D] group-hover:text-sky-600 transition-colors line-clamp-2 leading-tight">
                        {recent.title}
                      </h4>
                    </div>
                  </Link>
                ))}
              </div>

              {/* Newsletter Widget - Common in premium blogs */}
              <div className="mt-12 bg-slate-50 rounded-md p-8 border-2 border-[#0B1E36] shadow-sm">
                <h4 className="text-xl font-black text-[#071E3D] mb-3">Newsletter</h4>
                <p className="text-sm text-slate-500 mb-6 font-medium">Get the latest insights and updates delivered straight to your inbox.</p>
                <div className="flex flex-col gap-3">
                  <input type="email" placeholder="Your email address" className="w-full px-4 py-3 rounded-md border border-slate-200 focus:outline-none focus:ring-2 focus:ring-sky-500 bg-white shadow-inner" />
                  <button className="w-full py-3 bg-[#071E3D] text-white rounded-md font-bold hover:bg-sky-600 transition-all shadow-md">Subscribe</button>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </>
  )
}

export function generateStaticParams() {
  return blogs.map((post) => ({
    slug: post.slug,
  }))
}
