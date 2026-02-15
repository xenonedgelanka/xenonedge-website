"use client"
import { motion, useScroll, useSpring } from 'framer-motion'
import { useRef } from 'react'
import { FiSearch, FiEdit3, FiCode, FiCheckCircle, FiTrendingUp } from 'react-icons/fi'
import GeometricConstellation from './GeometricConstellation'

const steps = [
  {
    name: 'Discover',
    desc: 'Understand goals, users, and constraints.',
    icon: FiSearch,
    color: 'sky'
  },
  {
    name: 'Design',
    desc: 'Product and UX design that drives adoption.',
    icon: FiEdit3,
    color: 'blue'
  },
  {
    name: 'Develop',
    desc: 'Engineering with quality, tests, and observability.',
    icon: FiCode,
    color: 'indigo'
  },
  {
    name: 'Testing',
    desc: 'Comprehensive QA to ensure reliability and performance.',
    icon: FiCheckCircle,
    color: 'violet'
  },
  {
    name: 'Deliver & Scale',
    desc: 'Deploy, monitor, and grow with confidence.',
    icon: FiTrendingUp,
    color: 'purple'
  }
]

export default function Process() {
  const containerRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  })

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  return (
    <section className="relative py-24 md:py-32 bg-[#f1f5f9] overflow-hidden" id="process" ref={containerRef}>
      {/* Geometric Constellation Background */}
      <GeometricConstellation />

      <div className="container px-6 mx-auto relative z-10">
        {/* Header */}
        <div className="max-w-2xl mx-auto text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center px-4 py-1.5 rounded-md border border-sky-500/30 text-sky-600 text-[10px] font-bold tracking-[0.2em] uppercase mb-8 -mt-12 bg-sky-50/50"
          >
            Our Process
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4"
          >
            A pragmatic, iterative approach
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-slate-600"
          >
            Building software that scales with confidence
          </motion.p>
        </div>

        <div className="relative max-w-6xl mx-auto">
          {/* Connecting Line - Desktop only */}
          <div className="hidden lg:block absolute top-16 left-0 w-full h-[2px] bg-slate-300 z-0">
            <motion.div
              style={{ scaleX, originX: 0 }}
              className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-yellow-400 via-amber-400 to-yellow-500 shadow-[0_0_10px_rgba(251,191,36,0.5)]"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-6 relative z-10">
            {steps.map((step, index) => {
              const Icon = step.icon
              return (
                <motion.div
                  key={step.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6, ease: "easeOut" }}
                  className="group"
                >
                  <div className="flex flex-col items-center text-center">
                    {/* Icon Container */}
                    <div className="relative mb-6">
                      <Icon className="w-10 h-10 text-slate-400 transition-colors duration-300 group-hover:text-sky-500" strokeWidth={1.5} />
                    </div>

                    {/* Text Content */}
                    <div className="space-y-2">
                      <h3 className="text-lg font-semibold text-slate-900">
                        {step.name}
                      </h3>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
