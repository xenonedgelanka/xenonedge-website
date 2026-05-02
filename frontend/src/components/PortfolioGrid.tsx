"use client"

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiArrowUpRight } from 'react-icons/fi'

import Loader from './Loader'

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api'

interface Project {
  _id: string
  title: string
  category: string
  image: string
  description: string
  technologies: string[]
  liveUrl: string
}

export default function PortfolioGrid() {
  const [projects, setProjects] = useState<Project[]>([])
  const [loading, setLoading] = useState(true)
  const [activeCategory, setActiveCategory] = useState("All")
  const [categories, setCategories] = useState(["All", "Web Design", "Mobile App", "Graphic Design"])

  useEffect(() => {
    fetch(`${API_URL}/portfolio`)
      .then(r => r.json())
      .then(data => {
        if (data.data && data.data.length > 0) {
          setProjects(data.data)
          const cats = ['All', ...Array.from(new Set<string>(data.data.map((p: Project) => p.category)))]
          setCategories(cats)
        }
      })
      .catch(() => {})
      .finally(() => setLoading(false))
  }, [])

  const filteredProjects = activeCategory === "All"
    ? projects
    : projects.filter(p => p.category === activeCategory)

  if (loading) return <Loader />;

  return (
    <div className="w-full">
      {/* Category Filter */}
      <div className="flex flex-wrap items-center justify-center gap-2 md:gap-4 mb-8">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-6 py-2 rounded-md text-xs font-bold tracking-widest uppercase transition-all duration-300 ${
              activeCategory === cat
                ? "bg-[#071E3D] text-white"
                : "bg-white text-slate-500 hover:bg-slate-50 hover:text-slate-900 border border-slate-200"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid */}
      {projects.length === 0 ? (
        <div className="text-center py-20 bg-slate-50 rounded-2xl border-2 border-dashed border-slate-200">
          <p className="text-slate-500 font-medium italic">No projects found. Check back later!</p>
        </div>
      ) : (
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                key={project._id}
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="group cursor-pointer"
              >
                <div className="relative aspect-[4/5] rounded-md overflow-hidden bg-white border border-slate-100 transition-all duration-500 hover:border-slate-300">
                  {/* Category Badge */}
                  <div className="absolute top-4 right-4 z-20">
                    <span className="inline-block px-2 py-1 bg-[#071E3D] text-white text-[8px] font-bold uppercase tracking-widest rounded-sm">
                      {project.category}
                    </span>
                  </div>

                  {/* Image or Placeholder */}
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  ) : (
                    <div className="w-full h-full relative p-8 flex items-center justify-center bg-slate-50">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.5" strokeLinecap="round" strokeLinejoin="round" className="w-16 h-16 text-slate-200">
                        <rect width="18" height="18" x="3" y="3" rx="0" ry="0" />
                        <circle cx="9" cy="9" r="2" />
                        <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
                      </svg>
                    </div>
                  )}

                  {/* Bottom Info */}
                  <div className="absolute inset-x-0 bottom-0 bg-white p-4 border-t border-slate-50">
                    <h3 className="text-sm font-bold text-[#071E3D] tracking-tight truncate">
                      {project.title}
                    </h3>
                    <div className="flex items-center gap-2 mt-1 text-[9px] font-bold text-sky-600 uppercase tracking-widest">
                      {project.liveUrl ? (
                        <a href={project.liveUrl} target="_blank" rel="noopener" className="flex items-center gap-1 hover:text-sky-800 transition-colors">
                          View Project <FiArrowUpRight size={10} />
                        </a>
                      ) : (
                        <span className="flex items-center gap-1">Explore <FiArrowUpRight size={10} /></span>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      )}
    </div>
  )
}
