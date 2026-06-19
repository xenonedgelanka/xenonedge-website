"use client"

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiArrowUpRight } from 'react-icons/fi'
import Loader from './Loader'
import ProjectDetailsModal from './ProjectDetailsModal'

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api'

interface Project {
  _id: string
  title: string
  category: string
  image: string
  description: string
  technologies: string[]
  liveUrl: string
  githubUrl?: string
}

export default function PortfolioGrid() {
  const [projects, setProjects] = useState<Project[]>([])
  const [loading, setLoading] = useState(true)
  const [activeCategory, setActiveCategory] = useState("All")
  const [categories, setCategories] = useState(["All", "Web Design", "Mobile App", "Graphic Design"])
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

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
                onClick={() => {
                  setSelectedProject(project)
                  setIsModalOpen(true)
                }}
                className="group cursor-pointer flex flex-col h-full bg-white rounded-xl border border-slate-200 transition-all duration-500 hover:shadow-lg hover:-translate-y-1 overflow-hidden"
              >
                {/* Image Container */}
                <div className="relative aspect-video w-full overflow-hidden bg-slate-50 border-b border-slate-100">
                  {/* Category Badge */}
                  <div className="absolute top-3 left-3 z-20">
                    <span className="inline-block px-2.5 py-1 bg-[#071E3D] text-white text-[8px] font-bold uppercase tracking-widest rounded-sm shadow-sm">
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
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.5" strokeLinecap="round" strokeLinejoin="round" className="w-12 h-12 text-slate-200">
                        <rect width="18" height="18" x="3" y="3" rx="0" ry="0" />
                        <circle cx="9" cy="9" r="2" />
                        <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
                      </svg>
                    </div>
                  )}
                </div>

                {/* Bottom Info flows naturally under the image */}
                <div className="flex flex-col flex-grow p-4">
                  <h3 className="text-sm font-black text-[#071E3D] uppercase tracking-tight transition-colors group-hover:text-sky-600 mb-2 line-clamp-2 leading-snug">
                    {project.title}
                  </h3>
                  {project.description && (
                    <p className="text-slate-500 text-[11px] line-clamp-2 mb-3 leading-relaxed">
                      {project.description}
                    </p>
                  )}

                  {project.technologies && project.technologies.length > 0 && (
                    <div className="flex flex-wrap gap-1 mb-3 mt-auto">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <span key={tech} className="text-[8px] font-bold px-1.5 py-0.5 rounded bg-slate-50 text-slate-600 border border-slate-200/50 uppercase tracking-wider">
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="text-[8px] font-bold px-1.5 py-0.5 rounded bg-slate-50 text-slate-400">
                          +{project.technologies.length - 3}
                        </span>
                      )}
                    </div>
                  )}

                  <div className="flex items-center gap-1.5 mt-auto text-[9px] font-bold text-sky-600 uppercase tracking-widest group-hover:text-sky-700 transition-colors">
                    Explore Details <FiArrowUpRight size={12} />
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      )}

      {/* Project Details Modal */}
      <ProjectDetailsModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  )
}
