"use client"
import Link from 'next/link'
import { motion } from 'framer-motion'

export default function CTA() {
  return (
    <section className="py-24 px-4 sm:px-6 relative overflow-hidden">

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative mx-auto max-w-6xl overflow-hidden rounded-3xl bg-slate-900 shadow-2xl"
      >
        {/* Animated Aurora Background */}
        <div className="absolute inset-0 w-full h-full overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-[#020617] z-0"></div>

          {/* Moving Blobs */}
          <motion.div
            animate={{
              x: [0, 100, 0],
              y: [0, -50, 0],
              scale: [1, 1.2, 1]
            }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            className="absolute -top-[20%] -left-[10%] w-[70%] h-[70%] rounded-full bg-blue-700/30 blur-[120px] mix-blend-screen"
          />
          <motion.div
            animate={{
              x: [0, -100, 0],
              y: [0, 50, 0],
              scale: [1, 1.3, 1]
            }}
            transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
            className="absolute top-[20%] right-[0%] w-[60%] h-[60%] rounded-full bg-purple-600/30 blur-[120px] mix-blend-screen"
          />
          <motion.div
            animate={{
              x: [0, 50, 0],
              y: [0, 50, 0],
              scale: [1, 1.1, 1]
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute bottom-[-20%] left-[20%] w-[60%] h-[60%] rounded-full bg-cyan-600/20 blur-[100px] mix-blend-screen"
          />

          {/* Noise Overlay for Texture (No Clean Look) */}
          <div className="absolute inset-0 opacity-[0.15] z-10"
            style={{ backgroundImage: 'url("https://grainy-gradients.vercel.app/noise.svg")' }}>
          </div>

          {/* Tech Pattern Overlay */}
          <div className="absolute inset-0 z-10 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px]"></div>
        </div>

        {/* Content Container */}
        <div className="relative z-20 flex flex-col md:flex-row items-center justify-between gap-12 px-8 py-20 md:px-16 md:py-24">

          <div className="max-w-2xl text-center md:text-left">
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-block px-3 py-1 mb-6 text-xs font-bold tracking-widest text-cyan-300 uppercase bg-cyan-900/30 rounded-md border border-cyan-800 backdrop-blur-sm"
            >
              Ready for Impact?
            </motion.span>

            <h2 className="text-4xl md:text-6xl font-black text-white leading-[1.1] mb-6 tracking-tight drop-shadow-lg">
              Build Something <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-cyan-200 to-purple-300">
                Truly Powerful
              </span>
            </h2>

            <p className="text-lg text-slate-300 leading-relaxed font-light max-w-lg mx-auto md:mx-0">
              Your vision deserves more than a standard solution. Let’s engineer a digital experience that defines your brand.
            </p>
          </div>

          <div className="flex-shrink-0 relative">
            <div className="absolute inset-0 bg-blue-500 blur-[60px] opacity-20 rounded-full"></div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link href="/contact" className="group relative inline-flex items-center gap-3 px-10 py-5 bg-white text-slate-950 font-bold text-lg rounded-xl overflow-hidden transition-all hover:bg-cyan-50 hover:text-cyan-900 shadow-2xl shadow-cyan-900/20">
                <span className="relative z-10">Start the Project</span>
                <motion.span
                  initial={{ x: 0 }}
                  whileHover={{ x: 5 }}
                  className="relative z-10"
                >
                  →
                </motion.span>
              </Link>
            </motion.div>
          </div>

        </div>

        {/* Decorative Bottom Bar */}


      </motion.div>
    </section>
  )
}
