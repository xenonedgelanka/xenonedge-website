"use client"
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowRight, Calendar } from 'lucide-react'
import { FiArrowUpRight } from 'react-icons/fi'

const posts = [
  {
    id: 'b1',
    title: 'Scaling with Serverless',
    excerpt: 'Best practices for serverless architectures that scale effortlessly.',
    date: 'Nov 01, 2025',
    category: 'Architecture',
    image: '/api/placeholder/800/450'
  },
  {
    id: 'b2',
    title: 'Designing for Performance',
    excerpt: 'Frontend strategies to improve UX and speed.',
    date: 'Aug 12, 2025',
    category: 'Design',
    image: '/api/placeholder/800/450'
  },
  {
    id: 'b3',
    title: 'The Future of AI Agents',
    excerpt: 'How autonomous agents are reshaping the software lifecycle.',
    date: 'Oct 24, 2025',
    category: 'AI',
    image: '/api/placeholder/800/450'
  }
]

export default function BlogPreview() {
  return (
    <section className="py-20 bg-[#f1f5f9]">
      <div className="container mx-auto px-6">

        {/* Clean Modern Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center px-4 py-1.5 rounded-md border border-sky-500/30 text-sky-600 text-[10px] font-bold tracking-[0.2em] uppercase mb-4 bg-sky-50/50">
            Latest Articles
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Insights & Updates
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Discover the latest trends, tips, and insights from our team.
          </p>
        </motion.div>

        {/* Modern Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.5 }}
              className="group bg-white rounded-2xl overflow-hidden border border-slate-200 hover:border-slate-400/50 transition-all duration-300 flex flex-col"
            >
              {/* Image Container with Overlay Effect */}
              <Link href={`/blog/${post.id}`} className="relative overflow-hidden aspect-[16/9]">
                <div className="w-full h-full bg-slate-100 flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-24 h-24 text-slate-300 transition-transform duration-500 group-hover:scale-110"
                  >
                    <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
                    <circle cx="9" cy="9" r="2" />
                    <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
                  </svg>
                </div>
                {/* Gradient Overlay on Hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-slate-900/0 to-slate-900/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Category Badge on Image */}
                <div className="absolute top-4 left-4">
                  <span className="inline-block px-3 py-1 text-xs font-bold uppercase tracking-wider text-white bg-slate-900 rounded-md">
                    {post.category}
                  </span>
                </div>
              </Link>

              {/* Card Content */}
              <div className="p-6 flex flex-col flex-grow">

                {/* Date */}
                <div className="flex items-center gap-2 text-sm text-slate-500 mb-4">
                  <Calendar size={16} />
                  <time dateTime={post.date}>{post.date}</time>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-slate-900 mb-3 leading-snug">
                  <Link href={`/blog/${post.id}`}>
                    {post.title}
                  </Link>
                </h3>

                {/* Excerpt */}
                <p className="text-slate-600 leading-relaxed mb-6 flex-grow line-clamp-3">
                  {post.excerpt}
                </p>

                {/* Read More Link */}
                <Link
                  href={`/blog/${post.id}`}
                  className="inline-flex items-center gap-2 text-xs text-slate-600 hover:text-black transition-colors group/link"
                >
                  Read More
                  <ArrowRight size={16} className="transition-transform group-hover/link:translate-x-1" />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>

        {/* View All Link */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center mt-12"
        >
          <Link
            href="/blog"
            className="inline-flex items-center gap-3 px-8 py-3 bg-[#071E3D] text-white rounded-lg font-bold text-sm transition-all hover:bg-sky-600 group"
          >
            <span>View All Articles</span>
            <FiArrowUpRight className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </motion.div>

      </div>
    </section>
  )
}
