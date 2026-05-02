"use client"
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, Calendar } from 'lucide-react'
import { useState, useEffect } from 'react'

import Loader from './Loader'

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api'

interface BlogPost {
  _id: string
  title: string
  excerpt: string
  createdAt: string
  category: string
  image: string
  slug: string
}

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString('en-US', { month: 'short', day: '2-digit', year: 'numeric' })
}

export default function BlogPreview() {
  const [posts, setPosts] = useState<BlogPost[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch(`${API_URL}/blog?limit=3&status=published`)
      .then(r => r.json())
      .then(data => {
        if (data.data && data.data.length > 0) setPosts(data.data)
      })
      .catch(() => {})
      .finally(() => setLoading(false))
  }, [])

  return (
    <section className="py-20 bg-[#f1f5f9]">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-xl">
            <span className="inline-flex items-center px-4 py-1.5 rounded-md bg-sky-500/10 border border-sky-500/30 text-sky-600 font-bold uppercase tracking-[0.3em] text-[10px] mb-4">
              Latest Articles
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-[#071E3D] uppercase tracking-tight">
              Insights & <br />Updates
            </h2>
          </div>
          <p className="text-slate-500 max-w-sm text-base leading-relaxed">
            Discover the latest trends, tips, and insights engineered by our technical experts.
          </p>
        </div>

        {loading ? (
          <Loader />
        ) : posts.length === 0 ? (
          <div className="text-center py-12 bg-white/50 rounded-xl border-2 border-dashed border-slate-200">
            <p className="text-slate-500 italic">Fresh insights coming soon...</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, index) => (
              <motion.article
                key={post._id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.5 }}
                className="group bg-white rounded-xl overflow-hidden border-2 border-slate-200 flex flex-col"
              >
                {/* Image */}
                <Link href={`/blog/${post._id}`} className="relative overflow-hidden aspect-[16/10] block">
                  {post.image ? (
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full bg-slate-50 flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.5" strokeLinecap="round" strokeLinejoin="round" className="w-24 h-24 text-slate-200">
                        <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
                        <circle cx="9" cy="9" r="2" />
                        <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
                      </svg>
                    </div>
                  )}

                  <div className="absolute top-4 left-4">
                    <span className="inline-block px-3 py-1.5 text-[10px] font-bold uppercase tracking-widest text-white bg-[#071E3D] rounded-md shadow-lg">
                      {post.category}
                    </span>
                  </div>
                </Link>

                <div className="p-8 flex flex-col flex-grow">
                  <div className="flex items-center gap-2 text-[10px] font-bold text-slate-400 mb-4 uppercase tracking-widest">
                    <Calendar size={12} className="text-sky-500" />
                    <time dateTime={post.createdAt}>{formatDate(post.createdAt)}</time>
                  </div>

                  <h3 className="text-xl font-black text-[#071E3D] mb-4 uppercase tracking-tight leading-none group-hover:text-sky-600 transition-colors line-clamp-2">
                    <Link href={`/blog/${post._id}`}>{post.title}</Link>
                  </h3>

                  <p className="text-slate-500 text-sm leading-relaxed mb-8 flex-grow line-clamp-3">
                    {post.excerpt}
                  </p>

                  <Link
                    href={`/blog/${post._id}`}
                    className="inline-flex items-center gap-2 text-[10px] font-bold text-[#071E3D] uppercase tracking-[0.2em] group/link"
                  >
                    Read Insight
                    <ArrowRight size={14} className="text-sky-500 transition-transform group-hover/link:translate-x-2" />
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>
        )}

        <div className="mt-20 text-center">
          <Link href="/blog" className="group inline-flex items-center gap-4 text-[#071E3D] hover:text-sky-600 transition-colors">
            <span className="text-sm font-bold uppercase tracking-[0.2em]">Explore All Insights</span>
            <div className="w-8 h-px bg-[#071E3D]/20 group-hover:w-12 group-hover:bg-sky-600 transition-all duration-500"></div>
          </Link>
        </div>
      </div>
    </section>
  )
}
