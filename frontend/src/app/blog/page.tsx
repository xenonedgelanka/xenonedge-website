"use client"
import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { FiArrowRight } from 'react-icons/fi'
import { motion } from 'framer-motion'

import Loader from '../../components/Loader'

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api'

interface Blog {
  _id: string
  title: string
  category: string
  createdAt: string
  image: string
  slug: string
}

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString('en-US', { 
    day: 'numeric', 
    month: 'short', 
    year: 'numeric' 
  }).replace(/(\d+)/, (match) => {
    const day = parseInt(match);
    const suffix = ['th', 'st', 'nd', 'rd'][(day % 10 > 3 || Math.floor(day % 100 / 10) === 1) ? 0 : day % 10];
    return match + suffix;
  });
}

export default function BlogPage() {
  const [blogs, setBlogs] = useState<Blog[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch(`${API_URL}/blog?status=published`)
      .then(r => r.json())
      .then(data => {
        if (data.data) setBlogs(data.data)
      })
      .catch(err => console.error(err))
      .finally(() => setLoading(false))
  }, [])

  return (
    <>
      <section className="hero-dark pt-24 pb-12 bg-[#071E3D] text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-sky-500/10 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/4"></div>
        <div className="container relative z-10 flex flex-col items-center">
          <span className="inline-block px-4 py-1.5 rounded-md bg-sky-500/10 border border-sky-500/30 text-sky-400 font-bold uppercase tracking-[0.3em] text-[10px] mb-6">
            Our Insights
          </span>
          <h1 className="text-5xl md:text-7xl font-black tracking-tight text-center uppercase">
            The Knowledge <br /> <span className="text-sky-500">Hub</span>
          </h1>
          <p className="mt-6 text-lg text-slate-400 max-w-2xl text-center leading-relaxed">
            Expert perspectives on technology, business strategy, and the future of digital innovation.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container">
          {loading ? (
            <Loader />
          ) :
 blogs.length === 0 ? (
            <div className="text-center py-20 bg-slate-50 rounded-3xl border-2 border-dashed border-slate-200">
              <p className="text-slate-500 font-medium italic">No articles published yet. Check back soon!</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {blogs.map((blog, idx) => (
                <motion.article 
                  key={blog._id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className="group bg-white rounded-2xl overflow-hidden border-2 border-slate-200 flex flex-col h-full"
                >
                  <Link href={`/blog/${blog._id}`} className="block relative aspect-[16/10] overflow-hidden">
                    {blog.image ? (
                      <Image 
                        src={blog.image} 
                        alt={blog.title} 
                        fill 
                        className="object-cover"
                      />
                    ) : (
                      <div className="w-full h-full bg-slate-100 flex items-center justify-center text-slate-300">
                        <FiArrowRight size={48} />
                      </div>
                    )}
                    <div className="absolute top-5 left-5 z-10">
                      <span className="px-4 py-2 bg-[#071E3D] text-white font-bold text-[10px] uppercase tracking-widest rounded-md shadow-lg">
                        {blog.category}
                      </span>
                    </div>
                  </Link>
                  
                  <div className="p-8 flex flex-col flex-1">
                    <span className="text-[10px] font-bold text-slate-400 mb-4 tracking-[0.2em] uppercase block">
                      {formatDate(blog.createdAt)}
                    </span>
                    <Link href={`/blog/${blog._id}`} className="block group-hover:text-sky-600 transition-colors mb-6">
                      <h2 className="text-xl font-black text-[#071E3D] leading-tight uppercase tracking-tight line-clamp-3">
                        {blog.title}
                      </h2>
                    </Link>
                    
                    <div className="mt-auto pt-6 border-t border-slate-100">
                      <Link href={`/blog/${blog._id}`} className="inline-flex items-center gap-2 text-sky-600 font-bold uppercase tracking-widest text-[10px] hover:text-[#071E3D] transition-colors group/link">
                        Read Insight <FiArrowRight size={16} className="group-hover/link:translate-x-2 transition-transform duration-300" />
                      </Link>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  )
}
