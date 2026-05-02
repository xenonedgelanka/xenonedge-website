import FAQ from '../../components/FAQ'
import Link from 'next/link'
import { FiArrowLeft } from 'react-icons/fi'

export const metadata = {
  title: 'FAQ | XenonEdge',
  description: 'Frequently asked questions about XenonEdge services, process, and technology.'
}

export default function FAQPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <section className="hero-dark py-16 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px] opacity-[0.03]"></div>
        <div className="container relative z-10">
          <Link href="/" className="inline-flex items-center gap-2 text-sky-400 font-bold text-sm mb-8 hover:text-sky-300 transition-colors">
            <FiArrowLeft /> Back to Home
          </Link>
          <div className="max-w-3xl">
            <div className="inline-block px-4 py-1.5 rounded-md bg-sky-500/10 border border-sky-500/30 text-sky-400 font-bold uppercase tracking-[0.3em] text-[10px] mb-6">
              Help Center
            </div>
            <h1 className="text-4xl md:text-6xl font-black tracking-tight mb-4 uppercase">
              Frequently Asked <span className="text-sky-500">Questions</span>
            </h1>
            <p className="text-lg text-slate-300 leading-relaxed max-w-2xl">
              Find quick answers to common questions about our development process, pricing, and how we work with our clients.
            </p>
          </div>
        </div>
      </section>

      <FAQ />

      {/* Still Have Questions? */}
      <section className="py-20 bg-white border-t border-slate-100">
        <div className="container text-center">
            <h2 className="text-3xl font-black text-[#0B1E36] mb-4 uppercase">Still Have Questions?</h2>
            <p className="text-slate-500 mb-8 max-w-xl mx-auto">
                If you couldn't find the answer you were looking for, feel free to reach out to our team. We're here to help!
            </p>
            <Link 
                href="/contact"
                className="inline-flex items-center justify-center px-10 py-4 bg-sky-600 hover:bg-sky-500 text-white font-bold rounded-md transition-all duration-300"
            >
                Contact Support
            </Link>
        </div>
      </section>
    </div>
  )
}
