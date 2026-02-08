"use client"
import { useRef, useEffect, useState } from 'react'
import Image from 'next/image'
import {
  motion,
  useAnimationFrame,
  useMotionValue,
} from 'framer-motion'

const projects = [
  {
    id: 'p1',
    title: 'Fintech Dashboard',
    category: 'Fintech',
    img: '/images/portfolio-1.svg',
    color: '#3B82F6' // Blue
  },
  {
    id: 'p2',
    title: 'Health Vitality',
    category: 'Healthcare',
    img: '/images/portfolio-2.svg',
    color: '#10B981' // Green
  },
  {
    id: 'p3',
    title: 'E-commerce API',
    category: 'Retail',
    img: '/images/portfolio-3.svg',
    color: '#F59E0B' // Amber
  },
  {
    id: 'p4',
    title: 'Crypto Exchange',
    category: 'Blockchain',
    img: '/images/portfolio-1.svg',
    color: '#8B5CF6' // Purple
  },
  {
    id: 'p5',
    title: 'Smart Home Hub',
    category: 'IoT',
    img: '/images/portfolio-2.svg',
    color: '#EC4899' // Pink
  }
]

// Duplicate projects multiple times to create seamless loop
// 5 projects * 4 = 20 items. Should be enough for large screens.
const repeatedProjects = [...projects, ...projects, ...projects, ...projects]

export default function PortfolioPreview() {
  return (
    <section id="portfolio-preview" className="relative py-24 overflow-hidden bg-[#050A14] text-white">
      {/* Background Gradients */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-blue-600/10 blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-purple-600/10 blur-[120px]" />
      </div>

      <div className="container relative z-10 mb-12 flex flex-col items-center text-center">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-blue-400 font-semibold tracking-wider text-sm uppercase mb-2"
        >
          Our Works
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-white/60"
        >
          Selected Works
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-4 text-slate-400 max-w-xl text-lg"
        >
          Explore our latest projects showcasing innovation, precision, and modern design.
        </motion.p>
      </div>

      {/* Slider Container */}
      <div className="w-full relative">
        <div className="absolute left-0 top-0 bottom-0 w-8 md:w-32 z-20 bg-gradient-to-r from-[#050A14] to-transparent pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-8 md:w-32 z-20 bg-gradient-to-l from-[#050A14] to-transparent pointer-events-none" />

        <InfiniteSlider />
      </div>
    </section>
  )
}

function InfiniteSlider() {
  const baseVelocity = -0.6 // Speed of auto-scroll
  const x = useMotionValue(0)

  // Use refs for animation loop access to avoid state closure issues and re-renders
  const isHovered = useRef(false)
  const isDragging = useRef(false)

  const containerRef = useRef<HTMLDivElement>(null)

  // Create a ref for the inner content to measure width
  const contentRef = useRef<HTMLDivElement>(null)

  // Calculate width dynamically
  const [contentWidth, setContentWidth] = useState(0)

  useEffect(() => {
    if (contentRef.current) {
      // Logic: wrapping point is half the scrollWidth (since we duplicated enough)
      setContentWidth(contentRef.current.scrollWidth / 2)
    }
  }, [])

  useAnimationFrame((t, delta) => {
    if (!contentWidth) return

    // CRITICAL FIX: If dragging, rely completely on Framer Motion's drag handler.
    // Do NOT try to set x manually, or it will fight the user's input.
    if (isDragging.current) return

    let moveBy = baseVelocity * (delta / 16)

    // Stop auto-movement on hover
    if (isHovered.current) {
      moveBy = 0
    }

    // Apply movement
    let newX = x.get() + moveBy

    // Wrapping logic - use while loop to handle large jumps/drags
    if (contentWidth > 0) {
      while (newX <= -contentWidth) {
        newX += contentWidth
      }
      while (newX > 0) {
        newX -= contentWidth
      }
    }

    x.set(newX)
  })

  return (
    <div
      className="overflow-hidden cursor-grab active:cursor-grabbing w-full flex py-8"
      onMouseEnter={() => isHovered.current = true}
      onMouseLeave={() => isHovered.current = false}
      ref={containerRef}
    >
      <motion.div
        ref={contentRef}
        className="flex gap-8 px-8 w-max"
        style={{ x }}
        drag="x"
        dragConstraints={{ left: -10000, right: 10000 }} // Infinite drag range
        onDragStart={() => isDragging.current = true}
        onDragEnd={() => isDragging.current = false}
        dragElastic={0.05}
        dragMomentum={false}
      >
        {repeatedProjects.map((project, index) => (
          <PortfolioCard key={`${project.id}-${index}`} project={project} />
        ))}
      </motion.div>
    </div>
  )
}

function PortfolioCard({ project }: { project: typeof projects[0] }) {
  return (
    <div className="relative group w-[300px] md:w-[450px] flex-shrink-0 select-none">
      {/* Frame / Browser Window Style */}
      <div className="bg-[#0f1623] border-2 border-white/5 rounded-xl overflow-hidden shadow-2xl transition-all duration-300 group-hover:border-sky-400 group-hover:-translate-y-2">

        {/* Browser Header */}
        <div className="h-8 bg-[#1a202c]/50 border-b border-white/5 flex items-center px-4 gap-2 backdrop-blur-md">
          <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
          <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
          <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
          <div className="ml-auto w-24 h-1.5 rounded-full bg-white/10" />
        </div>

        {/* Image Container */}
        <div className="relative h-[220px] md:h-[300px] w-full overflow-hidden bg-slate-800">
          <div className="absolute inset-0 bg-gradient-to-t from-[#0f1623] via-transparent to-transparent z-10 opacity-60" />

          <Image
            src={project.img}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            draggable={false}
          />

          {/* Overlay Content */}
          <div className="absolute bottom-0 left-0 w-full p-6 z-20 transform translate-y-2 transition-transform duration-300 group-hover:translate-y-0">
            <span
              className="inline-block px-3 py-1 rounded-full text-xs font-medium mb-3 backdrop-blur-xl border border-white/10"
              style={{ backgroundColor: `${project.color}20`, color: project.color, borderColor: `${project.color}40` }}
            >
              {project.category}
            </span>
            <h3 className="text-2xl font-bold text-white mb-1">{project.title}</h3>
            <div className="h-0 group-hover:h-auto overflow-hidden transition-all duration-300">
              <p className="text-slate-400 text-sm mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-75">
                View Project Details
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
