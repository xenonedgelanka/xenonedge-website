'use client'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import { Home, ArrowLeft } from 'lucide-react'

export default function NotFound() {
  const router = useRouter()

  return (
    <div className="min-h-screen bg-[#020617] flex items-center justify-center px-6 relative overflow-hidden">
      {/* Background glowing orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-sky-500/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px]" />

      <div className="max-w-xl w-full text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Animated 404 */}
          <motion.h1 
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
            className="text-[120px] md:text-[180px] font-black leading-none select-none tracking-tighter"
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-600 drop-shadow-[0_0_40px_rgba(56,189,248,0.2)]">
              404
            </span>
          </motion.h1>
          
          <div className="relative -mt-4 md:-mt-8 space-y-6 backdrop-blur-sm bg-white/[0.02] border border-white/5 p-8 md:p-12 rounded-3xl shadow-2xl">
            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
              Lost in the Digital Void
            </h2>
            <p className="text-slate-400 text-lg leading-relaxed max-w-md mx-auto">
              We've searched the entire matrix, but the page you are looking for has vanished into thin air.
            </p>
            
            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Link 
                href="/"
                className="group relative inline-flex items-center justify-center gap-3 px-8 py-3.5 bg-gradient-to-r from-sky-500 to-blue-600 text-white font-semibold rounded-xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(56,189,248,0.3)]"
              >
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
                <Home size={18} className="relative z-10" />
                <span className="relative z-10">Back to Home</span>
              </Link>
              
              <button 
                onClick={() => router.back()}
                className="group inline-flex items-center justify-center gap-3 px-8 py-3.5 bg-white/5 hover:bg-white/10 text-white font-semibold rounded-xl border border-white/10 transition-all duration-300 hover:scale-105"
              >
                <ArrowLeft size={18} className="text-slate-400 group-hover:text-white transition-colors" />
                <span>Go Back</span>
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
