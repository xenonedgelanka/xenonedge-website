"use client"

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiArrowUpRight } from 'react-icons/fi'

const categories = ["All", "Web Design", "Mobile App", "Graphic Design"]

const portfolioProjects = [
  { id: 1, title: 'Mr Concrete', category: 'Web Design' },
  { id: 2, title: 'NEXA ERP', category: 'Mobile App' },
  { id: 3, title: 'ONM Media', category: 'Graphic Design' },
  { id: 4, title: 'Sun Travels & Holidays', category: 'Web Design' },
  { id: 5, title: 'Health Vitality App', category: 'Mobile App' },
  { id: 6, title: 'Global Technical Systems', category: 'Graphic Design' },
  { id: 7, title: 'Saho Platform', category: 'Web Design' },
  { id: 8, title: 'ATLAS Technologies', category: 'Graphic Design' },
  { id: 9, title: 'Fintech Dashboard', category: 'Web Design' },
]

export default function PortfolioGrid() {
  const [activeCategory, setActiveCategory] = useState("All")

  const filteredProjects = activeCategory === "All" 
    ? portfolioProjects 
    : portfolioProjects.filter(p => p.category === activeCategory)

  return (
    <div className="w-full">
      {/* Category Filter */}
      <div className="flex flex-wrap items-center justify-center gap-2 md:gap-4 mb-12">
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
      <motion.div 
        layout
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        <AnimatePresence>
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[4/5] rounded-md overflow-hidden bg-white border border-slate-100 transition-all duration-500 hover:border-slate-300">
                {/* Badge at Top Right */}
                <div className="absolute top-4 right-4 z-20">
                  <span className="inline-block px-2 py-1 bg-[#071E3D] text-white text-[8px] font-bold uppercase tracking-widest rounded-sm">
                    {project.category}
                  </span>
                </div>

                {/* Content Graphic Placeholder */}
                <div className="w-full h-full relative p-8 flex items-center justify-center bg-slate-50">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="0.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-16 h-16 text-slate-200"
                  >
                    <rect width="18" height="18" x="3" y="3" rx="0" ry="0" />
                    <circle cx="9" cy="9" r="2" />
                    <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
                  </svg>
                </div>

                {/* Static Bottom Info */}
                <div className="absolute inset-x-0 bottom-0 bg-white p-4 border-t border-slate-50">
                  <h3 className="text-sm font-bold text-[#071E3D] tracking-tight truncate">
                    {project.title}
                  </h3>
                  <div className="flex items-center gap-2 mt-1 text-[9px] font-bold text-sky-600 uppercase tracking-widest">
                    Explore <FiArrowUpRight size={10} />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  )
}
