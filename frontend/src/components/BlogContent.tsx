import Link from 'next/link'
import Image from 'next/image'
import { FiArrowRight } from 'react-icons/fi'

interface Blog {
  _id: string
  title: string
  category: string
  createdAt: string
  image: string
  slug: string
  excerpt: string
}

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString('en-US', { 
    day: 'numeric', 
    month: 'short', 
    year: 'numeric' 
  });
}

export default function BlogContent({ blogs }: { blogs: Blog[] }) {
  return (
    <>
      {/* Sleek Minimal Header */}
      <section className="pt-32 pb-16 bg-white border-b border-slate-100">
        <div className="container px-6 mx-auto">
          <div className="max-w-3xl">
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-sky-600 mb-3 block">
              Insights & Technology
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 uppercase">
              The Hub
            </h1>
            <p className="mt-4 text-base md:text-lg text-slate-500 max-w-xl leading-relaxed">
              Perspectives on software engineering, cloud architecture, and digital strategy from our team.
            </p>
          </div>
        </div>
      </section>

      {/* Modern Editorial Grid */}
      <section className="py-20 bg-white">
        <div className="container px-6 mx-auto">
          {blogs.length === 0 ? (
            <div className="text-center py-20 bg-slate-50 rounded-2xl border border-slate-100">
              <p className="text-slate-400 font-medium italic">No articles published yet. Check back soon!</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-16">
              {blogs.map((blog) => (
                <article 
                  key={blog._id}
                  className="group flex flex-col h-full"
                >
                  {/* Image Container with Elegant Hover Zoom */}
                  <Link href={`/blog/${blog._id}`} className="block relative aspect-[16/10] overflow-hidden rounded-xl bg-slate-100 mb-6 shadow-sm">
                    {blog.image ? (
                      <Image 
                        src={blog.image} 
                        alt={blog.title} 
                        fill 
                        className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-slate-300">
                        <FiArrowRight size={36} />
                      </div>
                    )}
                  </Link>
                  
                  {/* Category & Date Metadata Line */}
                  <div className="flex items-center gap-3 text-[11px] font-bold uppercase tracking-widest text-slate-400 mb-3">
                    <span className="text-sky-600">{blog.category}</span>
                    <span className="w-1 h-1 bg-slate-300 rounded-full"></span>
                    <span>{formatDate(blog.createdAt)}</span>
                  </div>

                  {/* Title & Excerpt */}
                  <div className="flex-1">
                    <Link href={`/blog/${blog._id}`} className="block mb-3">
                      <h2 className="text-xl font-bold text-slate-900 leading-snug tracking-tight group-hover:text-sky-600 transition-colors uppercase">
                        {blog.title}
                      </h2>
                    </Link>
                    <p className="text-slate-500 text-sm leading-relaxed mb-6 line-clamp-2">
                      {blog.excerpt}
                    </p>
                  </div>
                  
                  {/* Read Article CTA Link */}
                  <div className="pt-4 border-t border-slate-100">
                    <Link href={`/blog/${blog._id}`} className="inline-flex items-center gap-2 text-sky-600 font-bold uppercase tracking-widest text-[10px] hover:text-slate-900 transition-colors group/link">
                      Read Article <FiArrowRight size={14} className="group-hover/link:translate-x-1.5 transition-transform duration-300" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  )
}
