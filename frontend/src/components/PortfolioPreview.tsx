"use client"
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { FiArrowUpRight } from 'react-icons/fi'

const projects = [
  {
    id: 'p1',
    title: 'Fintech Dashboard',
    category: 'Full Stack Development',
    img: '/images/portfolio-1.svg',
    color: '#0ea5e9'
  },
  {
    id: 'p2',
    title: 'Health Vitality',
    category: 'Mobile Application',
    img: '/images/portfolio-2.svg',
    color: '#3B82F6'
  },
  {
    id: 'p3',
    title: 'E-commerce API',
    category: 'Backend Infrastructure',
    img: '/images/portfolio-3.svg',
    color: '#8B5CF6'
  }
]

export default function PortfolioPreview() {
  return (
    <section id="portfolio-preview" className="py-24 bg-[#f1f5f9] relative overflow-hidden">
      {/* Background Subtle Tech Elements */}


      <div className="container mx-auto px-6 relative z-10">

        {/* Simple Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-xl">
            <span className="inline-flex items-center px-4 py-1.5 rounded-md border border-sky-500/30 text-sky-600 text-[10px] font-bold tracking-[0.2em] uppercase mb-4 bg-sky-50/50">
              Selected Works
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-[#071E3D] uppercase tracking-tight">
              Engineering <br />
              Excellence
            </h2>
          </div>
          <p className="text-slate-500 max-w-sm text-base leading-relaxed">
            A look into the complex systems and intuitive experiences we've engineered for our global clients.
          </p>
        </div>

        {/* Minimalist Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {projects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group"
            >
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-slate-50 border border-slate-200 transition-all duration-500 group-hover:border-slate-400">
                {/* Badge at Top Left */}
                <div className="absolute top-4 left-4 z-20">
                  <span className="inline-block px-3 py-1.5 bg-[#071E3D] text-white text-[10px] font-bold uppercase tracking-widest rounded-md">
                    {project.category}
                  </span>
                </div>

                {/* Image Placeholder Area */}
                <div className="w-full h-full relative p-12 flex items-center justify-center bg-slate-50">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="0.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-32 h-32 text-slate-200 transition-transform duration-700 group-hover:scale-110 group-hover:text-sky-100"
                  >
                    <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
                    <circle cx="9" cy="9" r="2" />
                    <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
                  </svg>

                  {/* Title Area - Flat */}
                  <div className="absolute inset-x-0 bottom-0 p-6 bg-white border-t border-slate-100">
                    <h3 className="text-xl font-black text-[#071E3D] uppercase tracking-tight transition-colors group-hover:text-black">
                      {project.title}
                    </h3>
                    <div className="flex items-center gap-2 mt-1 text-[10px] font-bold text-slate-400 group-hover:text-slate-600 transition-colors uppercase tracking-[0.2em]">
                      Explore Case Study <FiArrowUpRight size={14} />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Action Link */}
        <div className="mt-20 text-center">
          <Link
            href="/portfolio"
            className="group inline-flex items-center gap-4 text-[#071E3D] hover:text-sky-600 transition-colors"
          >
            <span className="text-sm font-bold uppercase tracking-[0.2em]">View All Projects</span>
            <div className="w-8 h-px bg-[#071E3D]/20 group-hover:w-12 group-hover:bg-sky-600 transition-all duration-500"></div>
          </Link>
        </div>
      </div>
    </section>
  )
}
