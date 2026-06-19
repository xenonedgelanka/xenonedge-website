"use client"
import Link from 'next/link'
import { motion } from 'framer-motion'
import { FiArrowUpRight } from 'react-icons/fi'
import { useState, useEffect } from 'react'
import ProjectDetailsModal from './ProjectDetailsModal'

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api'

interface Project {
  _id: string
  title: string
  category: string
  image: string
  description: string
  featured: boolean
  technologies?: string[]
  liveUrl?: string
  githubUrl?: string
}

const FALLBACK = [
  { _id: 'p1', title: 'Fintech Dashboard', category: 'Full Stack Development', image: '', description: '', featured: true },
  { _id: 'p2', title: 'Health Vitality', category: 'Mobile Application', image: '', description: '', featured: true },
  { _id: 'p3', title: 'E-commerce Platform', category: 'Web Design', image: '', description: '', featured: true },
]

export default function PortfolioPreview() {
  const [projects, setProjects] = useState<Project[]>(FALLBACK)
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  useEffect(() => {
    fetch(`${API_URL}/portfolio?featured=true`)
      .then(r => r.json())
      .then(data => {
        if (data.data && data.data.length > 0) {
          setProjects(data.data.slice(0, 3))
        }
      })
      .catch(() => {})
  }, [])

  return (
    <section id="portfolio-preview" className="py-24 bg-[#f1f5f9] relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-xl">
            <span className="inline-flex items-center px-4 py-1.5 rounded-md border border-sky-500/30 text-sky-600 text-[10px] font-bold tracking-[0.3em] uppercase mb-4 bg-sky-50/50">
              Selected Works
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-[#071E3D] uppercase tracking-tight">
              Engineering <br />Excellence
            </h2>
          </div>
          <p className="text-slate-500 max-w-sm text-base leading-relaxed">
            A look into the complex systems and intuitive experiences we've engineered for our global clients.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {projects.map((project, idx) => (
            <motion.div
              key={project._id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              onClick={() => {
                setSelectedProject(project)
                setIsModalOpen(true)
              }}
              className="group cursor-pointer flex flex-col h-full bg-white rounded-2xl border border-slate-200 transition-all duration-500 hover:shadow-xl hover:-translate-y-1 overflow-hidden"
            >
              {/* Image Container */}
              <div className="relative aspect-video w-full overflow-hidden bg-slate-50 border-b border-slate-100">
                <div className="absolute top-4 left-4 z-20">
                  <span className="inline-block px-3 py-1.5 bg-[#071E3D] text-white text-[10px] font-bold uppercase tracking-widest rounded-md shadow-sm">
                    {project.category}
                  </span>
                </div>

                {/* Image or placeholder */}
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                ) : (
                  <div className="w-full h-full relative p-12 flex items-center justify-center bg-slate-50">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.5" strokeLinecap="round" strokeLinejoin="round"
                      className="w-24 h-24 text-slate-200 transition-transform duration-700 group-hover:scale-110 group-hover:text-sky-100">
                      <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
                      <circle cx="9" cy="9" r="2" />
                      <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
                    </svg>
                  </div>
                )}
              </div>

              {/* Bottom Info Info flows naturally under the image */}
              <div className="flex flex-col flex-grow p-6">
                <h3 className="text-xl font-black text-[#071E3D] uppercase tracking-tight transition-colors group-hover:text-sky-600 mb-2 leading-snug">
                  {project.title}
                </h3>
                {project.description && (
                  <p className="text-slate-500 text-xs line-clamp-2 mb-4 leading-relaxed">
                    {project.description}
                  </p>
                )}
                
                {project.technologies && project.technologies.length > 0 && (
                  <div className="flex flex-wrap gap-1.5 mb-4 mt-auto">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span key={tech} className="text-[9px] font-bold px-2 py-0.5 rounded bg-slate-50 text-slate-600 border border-slate-200/50 uppercase tracking-wider">
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="text-[9px] font-bold px-2 py-0.5 rounded bg-slate-50 text-slate-400">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>
                )}

                <div className="flex items-center gap-2 mt-auto text-[10px] font-bold text-sky-600 group-hover:text-sky-700 transition-colors uppercase tracking-[0.2em]">
                  Explore Case Study <FiArrowUpRight size={14} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-20 text-center">
          <Link href="/portfolio" className="group inline-flex items-center gap-4 text-[#071E3D] hover:text-sky-600 transition-colors">
            <span className="text-sm font-bold uppercase tracking-[0.2em]">View All Projects</span>
            <div className="w-8 h-px bg-[#071E3D]/20 group-hover:w-12 group-hover:bg-sky-600 transition-all duration-500" />
          </Link>
        </div>
      </div>

      {/* Project Details Modal */}
      <ProjectDetailsModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </section>
  )
}
