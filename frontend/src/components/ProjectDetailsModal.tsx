"use client"
import { motion, AnimatePresence } from 'framer-motion'
import { FiX, FiArrowUpRight, FiGithub } from 'react-icons/fi'

interface Project {
  _id: string
  title: string
  category: string
  image: string
  description: string
  technologies?: string[]
  liveUrl?: string
  githubUrl?: string
}

interface ProjectDetailsModalProps {
  project: Project | null
  isOpen: boolean
  onClose: () => void
}

export default function ProjectDetailsModal({ project, isOpen, onClose }: ProjectDetailsModalProps) {
  if (!project) return null

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', duration: 0.5 }}
            className="relative w-full max-w-4xl bg-white rounded-3xl overflow-hidden shadow-2xl z-10 border border-slate-100 flex flex-col md:flex-row max-h-[90vh] md:max-h-[85vh]"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-30 p-2 bg-white/85 backdrop-blur-md rounded-full text-slate-600 hover:text-slate-900 hover:bg-white shadow-sm border border-slate-100 transition-all duration-200"
              aria-label="Close modal"
            >
              <FiX size={20} />
            </button>

            {/* Image (Left/Top side) */}
            <div className="w-full md:w-1/2 relative bg-slate-900/5 min-h-[300px] md:min-h-full overflow-hidden flex items-center justify-center p-6 md:p-8">
              {project.image ? (
                <>
                  {/* Blurred background image for ambient color fill */}
                  <img
                    src={project.image}
                    alt=""
                    className="absolute inset-0 w-full h-full object-cover blur-2xl opacity-20 scale-110 select-none pointer-events-none"
                  />
                  {/* Clean contained crisp image */}
                  <img
                    src={project.image}
                    alt={project.title}
                    className="relative z-10 max-w-full max-h-full object-contain drop-shadow-xl transition-transform duration-300 hover:scale-[1.02] select-none"
                  />
                </>
              ) : (
                <div className="absolute inset-0 p-12 flex items-center justify-center bg-slate-50">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.5" strokeLinecap="round" strokeLinejoin="round" className="w-24 h-24 text-slate-200">
                    <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
                    <circle cx="9" cy="9" r="2" />
                    <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
                  </svg>
                </div>
              )}
              {/* Category Badge overlay on image */}
              <div className="absolute top-4 left-4 z-20">
                <span className="inline-block px-3 py-1.5 bg-[#071E3D] text-white text-[10px] font-bold uppercase tracking-widest rounded-md shadow-sm">
                  {project.category}
                </span>
              </div>
            </div>

            {/* Content (Right/Bottom side) */}
            <div className="w-full md:w-1/2 p-6 sm:p-8 flex flex-col justify-between overflow-y-auto max-h-[50vh] md:max-h-full">
              <div>
                <div className="mb-4">
                  <span className="text-[10px] font-bold text-sky-600 uppercase tracking-[0.25em]">
                    Project Details
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-black text-[#071E3D] uppercase tracking-tight mt-1 leading-tight">
                    {project.title}
                  </h3>
                </div>

                <div className="h-px bg-slate-100 my-4" />

                <div className="space-y-4">
                  <div>
                    <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1.5">Overview</h4>
                    <p className="text-slate-600 text-sm leading-relaxed whitespace-pre-wrap">
                      {project.description || 'No description available for this project.'}
                    </p>
                  </div>

                  {project.technologies && project.technologies.length > 0 && (
                    <div>
                      <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Technologies Used</h4>
                      <div className="flex flex-wrap gap-1.5">
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="text-[10px] font-bold px-3 py-1.5 rounded-full bg-slate-50 text-slate-700 border border-slate-200/60"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-8 pt-4 border-t border-slate-100 flex flex-col sm:flex-row gap-3">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#071E3D] text-white hover:bg-sky-600 text-xs font-bold tracking-widest uppercase transition-all duration-300 shadow-md shadow-[#071E3D]/10 hover:shadow-lg hover:shadow-sky-500/10"
                  >
                    Live Project <FiArrowUpRight size={14} />
                  </a>
                )}
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 hover:text-slate-900 text-xs font-bold tracking-widest uppercase transition-all duration-300 border border-slate-200/40"
                  >
                    <FiGithub size={14} /> Repository
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}
