"use client"
import Link from 'next/link'
import { motion } from 'framer-motion'
import { FiArrowUpRight } from 'react-icons/fi'

export default function CTA() {
  return (
    <section className="py-24 px-4 sm:px-6 relative overflow-hidden bg-[#f1f5f9]">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative mx-auto max-w-6xl overflow-hidden rounded-3xl bg-[#0a2e5c] p-8 md:p-16"
      >
        {/* Simple Technical Background */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:32px_32px]"></div>
        </div>

        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="max-w-2xl text-center md:text-left">
            <span className="inline-block px-3 py-1 mb-6 text-[10px] font-bold tracking-[0.2em] text-sky-400 uppercase border border-sky-400/30 rounded-md">
              Ready to Innovate?
            </span>

            <h2 className="text-3xl md:text-5xl font-black text-white leading-tight mb-6 uppercase tracking-tight">
              Let's Build Your <br />
              <span className="text-sky-500">Digital Future</span>
            </h2>

            <p className="text-base text-slate-300 leading-relaxed font-medium max-w-lg mx-auto md:mx-0">
              Shift your business into high gear with specialized software solutions tailored to your unique goals.
            </p>
          </div>

          <div className="flex-shrink-0">
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 px-8 py-3 bg-white text-[#071E3D] rounded-lg font-bold text-sm transition-all hover:bg-sky-600 hover:text-white group"
              >
                <span>Start the Project</span>
                <FiArrowUpRight className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
