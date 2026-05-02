import Link from 'next/link'
import { FiFileText, FiArrowLeft } from 'react-icons/fi'

export const metadata = {
  title: 'Terms of Service | XenonEdge',
  description: 'The terms and conditions for using XenonEdge services and website.'
}

export default function TermsPage() {
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
            <div className="w-16 h-16 rounded-2xl bg-sky-500/10 flex items-center justify-center text-sky-400 mb-6 border border-sky-500/20">
              <FiFileText size={32} />
            </div>
            <h1 className="text-4xl md:text-6xl font-black tracking-tight mb-4 uppercase">
              Terms of <span className="text-sky-500">Service</span>
            </h1>
            <p className="text-lg text-slate-300">Effective Date: May 2026</p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20">
        <div className="container">
          <div className="max-w-3xl mx-auto prose prose-slate lg:prose-lg">
            <p className="text-xl text-slate-600 leading-relaxed mb-12">
              By accessing our website and using our services, you agree to comply with and be bound by the following terms and conditions.
            </p>

            <h2 className="text-2xl font-black text-[#0B1E36] uppercase tracking-tight mt-12 mb-6">1. Acceptance of Terms</h2>
            <p className="text-slate-500 mb-8">
              XenonEdge ("we," "us," or "our") provides services to you subject to these Terms of Service. By using our website or engaging in our services, you accept these terms in full. If you disagree with any part of these terms, you must not use our website or services.
            </p>

            <h2 className="text-2xl font-black text-[#0B1E36] uppercase tracking-tight mt-12 mb-6">2. Use of Services</h2>
            <p className="text-slate-500 mb-4">
              You agree to use our services only for lawful purposes and in a way that does not infringe the rights of others or restrict their use and enjoyment of the service. Prohibited behavior includes:
            </p>
            <ul className="list-disc pl-6 text-slate-500 space-y-2 mb-8">
              <li>Harassing or causing distress to any person</li>
              <li>Transmitting obscene or offensive content</li>
              <li>Disrupting the normal flow of dialogue within our service</li>
              <li>Attempting to gain unauthorized access to our systems</li>
            </ul>

            <h2 className="text-2xl font-black text-[#0B1E36] uppercase tracking-tight mt-12 mb-6">3. Intellectual Property</h2>
            <p className="text-slate-500 mb-8">
              Unless otherwise stated, we or our licensors own the intellectual property rights for all material on XenonEdge. All intellectual property rights are reserved. You may access this from XenonEdge for your own personal use subjected to restrictions set in these terms.
            </p>

            <h2 className="text-2xl font-black text-[#0B1E36] uppercase tracking-tight mt-12 mb-6">4. Limitation of Liability</h2>
            <p className="text-slate-500 mb-8">
              In no event shall XenonEdge be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the services.
            </p>

            <h2 className="text-2xl font-black text-[#0B1E36] uppercase tracking-tight mt-12 mb-6">5. Changes to Terms</h2>
            <p className="text-slate-500 mb-8">
              We reserve the right to modify or replace these Terms at any time. It is your responsibility to check this page periodically for changes. Your continued use of the website following the posting of any changes to the Terms of Service constitutes acceptance of those changes.
            </p>

            <h2 className="text-2xl font-black text-[#0B1E36] uppercase tracking-tight mt-12 mb-6">6. Governing Law</h2>
            <p className="text-slate-500 mb-8">
              These terms shall be governed and construed in accordance with the laws of Sri Lanka, without regard to its conflict of law provisions.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
