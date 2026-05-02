import Link from 'next/link'
import { FiShield, FiArrowLeft } from 'react-icons/fi'

export const metadata = {
  title: 'Privacy Policy | XenonEdge',
  description: 'Learn how XenonEdge collects, uses, and protects your personal information.'
}

export default function PrivacyPage() {
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
              <FiShield size={32} />
            </div>
            <h1 className="text-4xl md:text-6xl font-black tracking-tight mb-4 uppercase">
              Privacy <span className="text-sky-500">Policy</span>
            </h1>
            <p className="text-lg text-slate-300">Last Updated: May 2026</p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20">
        <div className="container">
          <div className="max-w-3xl mx-auto prose prose-slate lg:prose-lg">
            <p className="text-xl text-slate-600 leading-relaxed mb-12">
              At XenonEdge, we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your information when you visit our website or use our services.
            </p>

            <h2 className="text-2xl font-black text-[#0B1E36] uppercase tracking-tight mt-12 mb-6">1. Information We Collect</h2>
            <p className="text-slate-500 mb-4">
              We collect information that you provide directly to us, such as when you fill out a contact form, subscribe to our newsletter, or communicate with us about a project. This may include:
            </p>
            <ul className="list-disc pl-6 text-slate-500 space-y-2 mb-8">
              <li>Name and contact details (email, phone number)</li>
              <li>Professional information (company name, job title)</li>
              <li>Project requirements and messages</li>
            </ul>

            <h2 className="text-2xl font-black text-[#0B1E36] uppercase tracking-tight mt-12 mb-6">2. How We Use Your Information</h2>
            <p className="text-slate-500 mb-4">
              We use the collected information for various purposes, including:
            </p>
            <ul className="list-disc pl-6 text-slate-500 space-y-2 mb-8">
              <li>To provide and maintain our services</li>
              <li>To respond to your inquiries and support requests</li>
              <li>To send you project updates and technical communications</li>
              <li>To improve our website and user experience</li>
            </ul>

            <h2 className="text-2xl font-black text-[#0B1E36] uppercase tracking-tight mt-12 mb-6">3. Data Security</h2>
            <p className="text-slate-500 mb-8">
              We implement industry-standard security measures to protect your data. However, please be aware that no method of transmission over the internet or electronic storage is 100% secure. We strive to use commercially acceptable means to protect your personal information but cannot guarantee its absolute security.
            </p>

            <h2 className="text-2xl font-black text-[#0B1E36] uppercase tracking-tight mt-12 mb-6">4. Third-Party Services</h2>
            <p className="text-slate-500 mb-8">
              We may use third-party service providers to monitor and analyze the use of our service. These third parties have access to your personal information only to perform these tasks on our behalf and are obligated not to disclose or use it for any other purpose.
            </p>

            <h2 className="text-2xl font-black text-[#0B1E36] uppercase tracking-tight mt-12 mb-6">5. Contact Us</h2>
            <p className="text-slate-500 mb-8">
              If you have any questions about this Privacy Policy, please contact us at <a href="mailto:info@xenonedge.com" className="text-sky-600 font-bold">info@xenonedge.com</a>.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
