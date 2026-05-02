import Link from 'next/link'
import { FiHome, FiArrowLeft } from 'react-icons/fi'

/**
 * Custom 404 Not Found Page
 */
export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#0B1E36] flex items-center justify-center px-6">
      <div className="max-w-md w-full text-center">
        {/* Error Code */}
        <h1 className="text-[120px] md:text-[160px] font-black text-sky-500/10 leading-none select-none">
          404
        </h1>
        
        {/* Message */}
        <div className="relative -mt-10 md:-mt-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Page Not Found
          </h2>
          <p className="text-slate-400 text-lg mb-10 leading-relaxed">
            The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
          </p>
          
          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-sky-600 hover:bg-sky-500 text-white font-bold rounded-md transition-all duration-300"
            >
              <FiHome size={18} />
              Back Home
            </Link>
            <button 
              onClick={() => typeof window !== 'undefined' && window.history.back()}
              className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-white/5 hover:bg-white/10 text-white font-bold rounded-md border border-white/10 transition-all duration-300"
            >
              <FiArrowLeft size={18} />
              Go Back
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
