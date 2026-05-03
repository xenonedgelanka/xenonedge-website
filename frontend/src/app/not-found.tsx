'use client'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { Home, ArrowLeft } from 'lucide-react'

export default function NotFound() {
  const router = useRouter()

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-6">
      <div className="max-w-md w-full text-center">
        {/* Error Code */}
        <h1 className="text-8xl font-bold text-gray-200 mb-4 select-none">
          404
        </h1>
        
        {/* Message */}
        <div className="space-y-4 mb-8">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-800">
            Page Not Found
          </h2>
          <p className="text-gray-500 text-base">
            The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
          </p>
        </div>
        
        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link 
            href="/"
            className="inline-flex items-center justify-center gap-2 px-6 py-2.5 bg-sky-600 hover:bg-sky-700 text-white font-medium rounded-md transition-colors"
          >
            <Home size={18} />
            Back Home
          </Link>
          
          <button 
            onClick={() => router.back()}
            className="inline-flex items-center justify-center gap-2 px-6 py-2.5 bg-white hover:bg-gray-100 text-gray-700 font-medium rounded-md border border-gray-300 transition-colors"
          >
            <ArrowLeft size={18} />
            Go Back
          </button>
        </div>
      </div>
    </div>
  )
}
