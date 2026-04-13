"use client"

import Link from 'next/link'
import { motion } from 'framer-motion'
import { FiTarget, FiEye, FiHeart, FiUsers, FiCode, FiAward, FiGlobe, FiTrendingUp } from 'react-icons/fi'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5 } })
}

const stats = [
  { label: 'Happy Clients', value: '50+', icon: FiUsers },
  { label: 'Projects Delivered', value: '120+', icon: FiCode },
  { label: 'Years of Experience', value: '3+', icon: FiAward },
  { label: 'Countries Served', value: '5+', icon: FiGlobe },
]

const values = [
  { icon: FiCode, title: 'Quality-First Engineering', description: 'We write clean, maintainable, and well-tested code. Every line matters.' },
  { icon: FiHeart, title: 'Customer-Centric Partnership', description: 'Your success is our success. We listen, adapt, and deliver beyond expectations.' },
  { icon: FiTrendingUp, title: 'Continuous Innovation', description: 'We stay ahead of the curve, embracing new technologies and methodologies.' },
  { icon: FiGlobe, title: 'Global Mindset', description: 'From Sri Lanka to the world — we build solutions that transcend borders.' },
]

const timeline = [
  { year: '2022', title: 'The Beginning', description: 'XenonEdge was founded with a vision to deliver world-class software solutions from Sri Lanka.' },
  { year: '2023', title: 'Growing Strong', description: 'Expanded our team and delivered 50+ projects across web, mobile, and AI domains.' },
  { year: '2024', title: 'Global Reach', description: 'Started serving international clients and launched our AI integration services.' },
  { year: '2025', title: 'Innovation Hub', description: 'Became a trusted partner for startups and enterprises, pushing boundaries with cutting-edge tech.' },
]

export default function AboutContent() {
  return (
    <>
      {/* Stats Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:24px_24px] opacity-40 pointer-events-none"></div>
        <div className="container relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="text-center group"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-sky-50 text-sky-600 mb-5 border border-sky-100 shadow-sm group-hover:bg-sky-600 group-hover:text-white transition-all duration-500">
                  <stat.icon size={28} />
                </div>
                <div className="text-4xl md:text-5xl font-black text-[#071E3D] mb-2">{stat.value}</div>
                <div className="text-sm font-bold text-slate-400 uppercase tracking-widest">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-slate-50">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-[2rem] p-10 md:p-12 shadow-lg shadow-sky-900/5 border border-slate-100 relative overflow-hidden group hover:shadow-2xl transition-shadow duration-500"
            >
              <div className="absolute top-0 right-0 w-40 h-40 bg-sky-400/10 blur-[60px] rounded-full pointer-events-none group-hover:bg-sky-400/20 transition-colors"></div>
              <div className="w-16 h-16 rounded-2xl bg-sky-50 flex items-center justify-center text-sky-600 mb-8 border border-sky-100 shadow-sm">
                <FiTarget size={28} />
              </div>
              <h2 className="text-3xl font-black text-[#071E3D] mb-4">Our Mission</h2>
              <p className="text-lg text-slate-500 leading-relaxed">
                To empower organizations with cutting-edge software solutions that accelerate growth, 
                streamline operations, and create exceptional user experiences. We believe technology 
                should be an enabler, not a barrier.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="bg-white rounded-[2rem] p-10 md:p-12 shadow-lg shadow-indigo-900/5 border border-slate-100 relative overflow-hidden group hover:shadow-2xl transition-shadow duration-500"
            >
              <div className="absolute top-0 right-0 w-40 h-40 bg-indigo-400/10 blur-[60px] rounded-full pointer-events-none group-hover:bg-indigo-400/20 transition-colors"></div>
              <div className="w-16 h-16 rounded-2xl bg-indigo-50 flex items-center justify-center text-indigo-600 mb-8 border border-indigo-100 shadow-sm">
                <FiEye size={28} />
              </div>
              <h2 className="text-3xl font-black text-[#071E3D] mb-4">Our Vision</h2>
              <p className="text-lg text-slate-500 leading-relaxed">
                To be a globally trusted partner for building resilient, innovative, and scalable 
                digital products. We envision a future where businesses of all sizes can harness 
                the power of technology to transform industries.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-white">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-sky-100 text-sky-600 font-bold uppercase tracking-widest text-sm mb-6">
              What Drives Us
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-[#071E3D] tracking-tight">Our Core Values</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, i) => (
              <motion.div
                key={value.title}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="flex gap-6 p-8 rounded-[2rem] bg-slate-50 border border-slate-100 group hover:bg-white hover:shadow-xl hover:shadow-sky-900/5 hover:border-sky-100 transition-all duration-500"
              >
                <div className="w-14 h-14 rounded-2xl bg-sky-50 flex items-center justify-center text-sky-600 shrink-0 border border-sky-100 shadow-sm group-hover:bg-sky-600 group-hover:text-white transition-all duration-500">
                  <value.icon size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-black text-[#071E3D] mb-2">{value.title}</h3>
                  <p className="text-slate-500 leading-relaxed">{value.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Journey Timeline */}
      <section className="py-24 bg-gradient-to-br from-[#071E3D] to-[#0a2444] text-white overflow-hidden relative">
        <div className="absolute inset-0 bg-[radial-gradient(rgba(14,165,233,0.08)_1px,transparent_1px)] [background-size:32px_32px] pointer-events-none"></div>
        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-sky-500/20 text-sky-400 font-bold uppercase tracking-widest text-sm mb-6 border border-sky-500/30">
              Our Story
            </span>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight">The Journey So Far</h2>
          </motion.div>

          <div className="relative">
            {/* Center Line */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-white/10 -translate-x-1/2"></div>

            <div className="space-y-12 md:space-y-0">
              {timeline.map((item, i) => (
                <motion.div
                  key={item.year}
                  custom={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeUp}
                  className={`md:flex items-center gap-12 mb-16 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                >
                  <div className={`md:w-1/2 ${i % 2 === 0 ? 'md:text-right md:pr-16' : 'md:text-left md:pl-16'}`}>
                    <div className="bg-white/5 backdrop-blur-sm rounded-[2rem] p-8 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-500">
                      <span className="text-sky-400 text-5xl font-black block mb-3">{item.year}</span>
                      <h3 className="text-2xl font-black mb-3">{item.title}</h3>
                      <p className="text-slate-300 leading-relaxed">{item.description}</p>
                    </div>
                  </div>

                  {/* Center Dot */}
                  <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-5 h-5 rounded-full bg-sky-500 border-4 border-[#071E3D] shadow-lg shadow-sky-500/30"></div>

                  <div className="md:w-1/2"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-slate-50">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-[2.5rem] p-12 md:p-16 shadow-2xl shadow-sky-900/5 border border-slate-100 text-center relative overflow-hidden"
          >
            <div className="absolute top-0 left-1/2 w-[600px] h-[300px] bg-sky-300/10 blur-[100px] rounded-full pointer-events-none -translate-x-1/2 -translate-y-1/2"></div>
            <div className="relative z-10">
              <h2 className="text-3xl md:text-5xl font-black text-[#071E3D] tracking-tight mb-6">
                Ready to Build Something Amazing?
              </h2>
              <p className="text-lg text-slate-500 max-w-2xl mx-auto mb-10 leading-relaxed">
                Let&apos;s collaborate to turn your vision into a powerful digital reality. 
                Our team is ready to engineer your next breakthrough.
              </p>
              <Link 
                href="/contact" 
                className="btn-premium-dark group"
              >
                Start Your Project
                <svg className="w-5 h-5 arrow-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                </svg>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
