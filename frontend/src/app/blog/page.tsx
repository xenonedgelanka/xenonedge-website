import Link from 'next/link'
import Image from 'next/image'
import { FiArrowRight } from 'react-icons/fi'

export const metadata = {
  title: 'XenonEdge | Our Blogs',
  description: 'Articles, insights, and latest news from XenonEdge.'
}

const blogs = [
  {
    slug: 'the-future-of-e-commerce-how-ai-is-transforming-the-shopping-experience',
    title: 'The Future of E-Commerce: How AI is Transforming the Shopping Experience',
    category: 'Artificial Intelligence',
    date: '11th Dec, 2025',
    image: 'https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?q=80&w=800&auto=format&fit=crop',
  },
  {
    slug: 'how-to-start-a-saas-business',
    title: 'How to Start a SaaS Business',
    category: 'Business Strategy',
    date: '11th Dec, 2025',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop',
  },
  {
    slug: 'from-problem-to-solution-how-to-collaborate-effectively-with-a-tech-partner',
    title: 'From Problem to Solution: How to Collaborate Effectively with a Tech Partner',
    category: 'Business',
    date: '11th Dec, 2025',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop',
  },
  {
    slug: 'revolutionizing-e-commerce-the-role-of-ar-and-vr-in-transforming-online-shopping',
    title: 'Revolutionizing E-Commerce: The Role of AR and VR in Transforming Online Shopping',
    category: 'AR/VR Technology',
    date: '11th Dec, 2025',
    image: 'https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?q=80&w=800&auto=format&fit=crop',
  }
]

export default function BlogPage() {
  return (
    <>
      <section className="hero-dark pt-32 pb-20 bg-gradient-to-br from-[#071E3D] to-[#0a2444] text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-sky-500/10 blur-[100px] rounded-full"></div>
        <div className="container relative z-10 flex flex-col items-center">
          <span className="inline-block px-4 py-1.5 rounded-md bg-sky-500/10 border border-sky-500/30 text-sky-400 font-bold uppercase tracking-[0.3em] text-[10px] mb-6">
            Insights
          </span>
          <h1 className="text-4xl md:text-6xl font-black tracking-tight text-center">Our Blogs</h1>
          <p className="mt-6 text-xl text-slate-300 max-w-2xl text-center leading-relaxed">
            Empowering businesses with cutting-edge digital solutions and professional tech consulting.
          </p>
        </div>
      </section>

      <section className="py-24 bg-slate-50">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {blogs.map((blog) => (
              <article key={blog.slug} className="group bg-white rounded-md overflow-hidden shadow-sm hover:shadow-2xl hover:shadow-sky-900/5 transition-all duration-500 border-2 border-[#0B1E36] flex flex-col h-full hover:-translate-y-1">
                <Link href={`/blog/${blog.slug}`} className="block relative aspect-[4/3] overflow-hidden">
                  <Image 
                    src={blog.image} 
                    alt={blog.title} 
                    fill 
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-5 left-5 z-10">
                    <span className="px-4 py-2 bg-white/95 backdrop-blur-md text-sky-600 font-black text-[10px] uppercase tracking-widest rounded-md shadow-sm">
                      {blog.category}
                    </span>
                  </div>
                </Link>
                
                <div className="p-8 flex flex-col flex-1">
                  <span className="text-sm font-bold text-slate-400 mb-4 tracking-wider block">{blog.date}</span>
                  <Link href={`/blog/${blog.slug}`} className="block group-hover:text-sky-600 transition-colors">
                    <h2 className="text-2xl font-black text-[#071E3D] leading-snug line-clamp-3 mb-6">
                      {blog.title}
                    </h2>
                  </Link>
                  
                  <div className="mt-auto pt-6 border-t border-slate-100">
                    <Link href={`/blog/${blog.slug}`} className="inline-flex items-center gap-2 text-sky-600 font-black uppercase tracking-widest text-xs hover:text-[#071E3D] transition-colors">
                      Read More <FiArrowRight size={18} className="group-hover:translate-x-2 transition-transform duration-300" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
