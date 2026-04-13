"use client"
import { motion, useScroll, useSpring } from 'framer-motion'
import { useRef } from 'react'

interface ProcessStep {
  step: string;
  title: string;
  desc: string;
}

interface ProcessTimelineProps {
  steps: ProcessStep[];
  numberBgColor?: string; // Optional: if we want to honor the page's original number color
}

export default function ProcessTimeline({ steps, numberBgColor = "bg-[#0B1E36]" }: ProcessTimelineProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 80%", "end 20%"]
  })

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  return (
    <div className="relative max-w-4xl mx-auto pl-4 md:pl-0" ref={containerRef}>
      {/* Vertical Track Line */}
      <div className="absolute left-[23px] top-6 bottom-6 w-[2px] bg-slate-200 hidden md:block">
        <motion.div
          style={{ scaleY, originY: 0 }}
          className="absolute top-0 left-0 w-full h-full bg-sky-500 shadow-[0_0_10px_rgba(14,165,233,0.3)]"
        />
      </div>

      <div className="space-y-0 relative">
        {steps.map((p, i) => (
          <div key={i} className="flex gap-8 md:gap-14 relative group">
            {/* Number Container */}
            <div className="flex flex-col items-center relative z-10 pt-1">
              <div className="relative">
                {/* Primary Number Box - Ice Blue bg with Dark Navy Border (Border stays dark on hover) */}
                <div 
                  className="w-12 h-12 shrink-0 rounded-lg bg-sky-50 border-2 border-[#0B1E36] text-[#0B1E36] font-black text-lg flex items-center justify-center transition-all duration-300 group-hover:bg-sky-500 group-hover:text-white shadow-sm"
                >
                  <span className="relative z-10">{p.step}</span>
                </div>
              </div>
            </div>

            {/* Content */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="pb-16"
            >
              <h3 className="text-2xl font-bold text-[#0B1E36] mb-3">
                {p.title}
              </h3>
              <p className="text-slate-600 leading-relaxed text-lg max-w-2xl">
                {p.desc}
              </p>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  )
}
