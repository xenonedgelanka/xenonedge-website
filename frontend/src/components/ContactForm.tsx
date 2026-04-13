"use client"

import { motion } from 'framer-motion'
import { FiMail, FiPhone, FiMapPin, FiArrowRight } from 'react-icons/fi'

export default function ContactForm() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-8 items-start relative z-10 w-full max-w-[1200px] mx-auto">
      {/* Contact Info (Left Column) */}
      <motion.div 
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="lg:col-span-2 flex flex-col justify-center h-full space-y-10 lg:pr-10"
      >
        <div>
          <h2 className="text-3xl md:text-4xl font-black text-[#071E3D] tracking-tight mb-4">
            We'd love to hear from you
          </h2>
          <p className="text-lg text-slate-500 leading-relaxed">
            Whether you have a specific project in mind or just want to explore how we can help your business grow, our team is ready to talk.
          </p>
        </div>

        <div className="space-y-8">
          {/* Item 1 */}
          <div className="flex items-start gap-5">
            <div className="w-14 h-14 bg-sky-50 rounded-2xl flex items-center justify-center shrink-0 border border-sky-100/50 shadow-sm text-sky-600">
              <FiMail size={24} />
            </div>
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wider text-slate-400 mb-1">Email Us</h3>
              <a href="mailto:hello@xenonedge.com" className="text-lg font-bold text-[#071E3D] hover:text-sky-600 transition-colors">
                hello@xenonedge.com
              </a>
              <p className="text-sm text-slate-500 mt-1">We aim to reply within 24 hours.</p>
            </div>
          </div>

          {/* Item 2 */}
          <div className="flex items-start gap-5">
            <div className="w-14 h-14 bg-indigo-50 rounded-2xl flex items-center justify-center shrink-0 border border-indigo-100/50 shadow-sm text-indigo-600">
              <FiPhone size={24} />
            </div>
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wider text-slate-400 mb-1">Call Us</h3>
              <a href="tel:+94762291826" className="text-lg font-bold text-[#071E3D] hover:text-indigo-600 transition-colors">
                +94 76 229 1826
              </a>
              <p className="text-sm text-slate-500 mt-1">Mon-Fri from 9am to 6pm (IST).</p>
            </div>
          </div>

          {/* Item 3 */}
          <div className="flex items-start gap-5">
            <div className="w-14 h-14 bg-rose-50 rounded-2xl flex items-center justify-center shrink-0 border border-rose-100/50 shadow-sm text-rose-600">
              <FiMapPin size={24} />
            </div>
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wider text-slate-400 mb-1">Visit Us</h3>
              <p className="text-lg font-bold text-[#071E3D]">
                Sri Lanka
              </p>
              <p className="text-sm text-slate-500 mt-1">Based in Colombo, serving clients globally.</p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Form Area (Right Column) */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="lg:col-span-3 bg-white rounded-[2.5rem] p-8 md:p-12 shadow-2xl shadow-[#071E3D]/5 border border-slate-100 relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 w-64 h-64 bg-sky-400/5 blur-[80px] rounded-full pointer-events-none -translate-y-1/2 translate-x-1/2"></div>
        
        <h3 className="text-2xl font-black text-[#071E3D] mb-8 relative z-10">
          Send us a message
        </h3>

        <form className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-6" onSubmit={(e) => e.preventDefault()}>
          <div className="md:col-span-2">
            <label className="block text-sm font-bold tracking-wide text-slate-700 mb-2 ml-1">Full Name</label>
            <input 
              name="name" 
              type="text" 
              placeholder="e.g. John Doe" 
              className="w-full rounded-2xl p-4 bg-slate-50 border border-slate-200 focus:bg-white focus:border-sky-500 focus:ring-4 focus:ring-sky-500/10 transition-all outline-none text-[#071E3D] font-medium" 
            />
          </div>

          <div>
            <label className="block text-sm font-bold tracking-wide text-slate-700 mb-2 ml-1">Email Address</label>
            <input 
              name="email" 
              type="email" 
              placeholder="john@company.com" 
              className="w-full rounded-2xl p-4 bg-slate-50 border border-slate-200 focus:bg-white focus:border-sky-500 focus:ring-4 focus:ring-sky-500/10 transition-all outline-none text-[#071E3D] font-medium" 
            />
          </div>

          <div>
            <label className="block text-sm font-bold tracking-wide text-slate-700 mb-2 ml-1">Phone Number (Optional)</label>
            <input 
              name="phone" 
              type="tel" 
              placeholder="+1 (555) 000-0000" 
              className="w-full rounded-2xl p-4 bg-slate-50 border border-slate-200 focus:bg-white focus:border-sky-500 focus:ring-4 focus:ring-sky-500/10 transition-all outline-none text-[#071E3D] font-medium" 
            />
          </div>

          <div className="md:col-span-2">
            <label className="block text-sm font-bold tracking-wide text-slate-700 mb-2 ml-1">Topic / Subject</label>
            <select className="w-full rounded-2xl p-4 bg-slate-50 border border-slate-200 focus:bg-white focus:border-sky-500 focus:ring-4 focus:ring-sky-500/10 transition-all outline-none text-[#071E3D] font-medium appearance-none">
              <option value="">Select an inquiry type</option>
              <option value="web">Web Development</option>
              <option value="mobile">Mobile Application</option>
              <option value="ai">AI Integration</option>
              <option value="design">UI/UX Design</option>
              <option value="other">Other Inquiry</option>
            </select>
          </div>

          <div className="md:col-span-2">
            <label className="block text-sm font-bold tracking-wide text-slate-700 mb-2 ml-1">Your Message</label>
            <textarea 
              name="message" 
              rows={5} 
              placeholder="Tell us about your project requirements or how we can help..." 
              className="w-full rounded-2xl p-4 bg-slate-50 border border-slate-200 focus:bg-white focus:border-sky-500 focus:ring-4 focus:ring-sky-500/10 transition-all outline-none text-[#071E3D] font-medium resize-none" 
            />
          </div>

          <div className="md:col-span-2 pt-2">
            <button 
              type="submit" 
              className="btn-premium-dark w-full md:w-auto group"
            >
              Send Message
              <FiArrowRight size={20} className="arrow-icon" />
            </button>
            <p className="text-xs text-slate-400 mt-4 text-center md:text-left font-medium">
              By submitting this form, you agree to our privacy policy and terms of service.
            </p>
          </div>
        </form>
      </motion.div>
    </div>
  )
}
