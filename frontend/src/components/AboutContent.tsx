"use client"

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { FiTarget, FiEye, FiHeart, FiUsers, FiCode, FiAward, FiGlobe, FiTrendingUp } from 'react-icons/fi'
import ServiceCTA from './ServiceCTA'

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5 } })
}

const defaultStats = [
  { label: 'Happy Clients', key: 'statClients', icon: FiUsers, defaultValue: '25+' },
  { label: 'Projects Delivered', key: 'statProjects', icon: FiCode, defaultValue: '40+' },
  { label: 'Years of Experience', key: 'statExperience', icon: FiAward, defaultValue: '1.5+' },
  { label: 'Countries Served', key: 'statCountries', icon: FiGlobe, defaultValue: '4+' },
]

const values = [
  { icon: FiCode, title: 'Quality-First Engineering', description: 'We write clean, maintainable, and well-tested code. Every line matters.' },
  { icon: FiHeart, title: 'Customer-Centric Partnership', description: 'Your success is our success. We listen, adapt, and deliver beyond expectations.' },
  { icon: FiTrendingUp, title: 'Continuous Innovation', description: 'We stay ahead of the curve, embracing new technologies and methodologies.' },
  { icon: FiGlobe, title: 'Global Mindset', description: 'From Sri Lanka to the world — we build solutions that transcend borders.' },
]

const timeline = [
  { year: '2025 Jan', title: 'The Genesis', description: 'XenonEdge was established with a singular mission: to redefine software engineering standards in Sri Lanka and beyond.' },
  { year: '2025 Jun', title: 'Scaling Operations', description: 'Expanded our core team and moved into our first official innovation hub, accelerating our delivery capabilities.' },
  { year: '2025 Dec', title: 'Global Footprint', description: 'Successfully partnered with our first international clients, beginning our journey as a global technology service provider.' },
  { year: '2026 Mar', title: 'Continuous Evolution', description: 'Diversified into AI and high-scale cloud architectures, staying at the absolute forefront of digital innovation.' },
]

export default function AboutContent() {
  const [siteSettings, setSiteSettings] = useState<any>(null)

  useEffect(() => {
    fetch(`${API_URL}/settings`)
      .then(r => r.json())
      .then(data => {
        if (data.success) setSiteSettings(data.data)
      })
      .catch(err => console.error(err))
  }, [])

  return (
    <>
      {/* Stats Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:24px_24px] opacity-40 pointer-events-none"></div>
        <div className="container relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {defaultStats.map((stat, i) => (
              <motion.div
                key={stat.label}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="text-center group"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-lg bg-white text-[#0B1E36] mb-5 border-2 border-[#0B1E36] shadow-sm group-hover:bg-[#0B1E36] group-hover:text-white transition-all duration-500">
                  <stat.icon size={28} />
                </div>
                <div className="text-4xl md:text-5xl font-black text-[#0B1E36] mb-2">
                  {siteSettings ? siteSettings[stat.key] : stat.defaultValue}
                </div>
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
              className="bg-white rounded-md p-10 md:p-12 border-2 border-[#0B1E36] relative overflow-hidden group transition-all duration-500"
            >
              <div className="absolute top-0 right-0 w-40 h-40 bg-sky-400/10 blur-[60px] rounded-full pointer-events-none group-hover:bg-sky-400/20 transition-colors"></div>
              <div className="w-16 h-16 rounded-lg bg-white flex items-center justify-center text-[#0B1E36] mb-8 border-2 border-[#0B1E36] shadow-sm">
                <FiTarget size={28} />
              </div>
              <h2 className="text-3xl font-black text-[#0B1E36] mb-4">Our Mission</h2>
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
              className="bg-white rounded-md p-10 md:p-12 border-2 border-[#0B1E36] relative overflow-hidden group transition-all duration-500"
            >
              <div className="absolute top-0 right-0 w-40 h-40 bg-indigo-400/10 blur-[60px] rounded-full pointer-events-none group-hover:bg-indigo-400/20 transition-colors"></div>
              <div className="w-16 h-16 rounded-lg bg-white flex items-center justify-center text-[#0B1E36] mb-8 border-2 border-[#0B1E36] shadow-sm">
                <FiEye size={28} />
              </div>
              <h2 className="text-3xl font-black text-[#0B1E36] mb-4">Our Vision</h2>
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
            <span className="inline-block px-4 py-1.5 rounded-md bg-sky-500/10 border border-sky-500/30 text-sky-400 font-bold uppercase tracking-[0.3em] text-[10px] mb-6">
              What Drives Us
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-[#0B1E36] tracking-tight">Our Core Values</h2>
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
                className="flex gap-6 p-8 rounded-md bg-white border-2 border-[#0B1E36] group hover:bg-slate-50 transition-all duration-500"
              >
                <div className="w-14 h-14 rounded-lg bg-white flex items-center justify-center text-[#0B1E36] shrink-0 border-2 border-[#0B1E36] shadow-sm group-hover:bg-[#0B1E36] group-hover:text-white transition-all duration-500">
                  <value.icon size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-black text-[#0B1E36] mb-2">{value.title}</h3>
                  <p className="text-slate-500 leading-relaxed">{value.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Journey Timeline */}
      <section className="py-24 bg-[#0B1E36] text-white overflow-hidden relative section-dark">
        {/* Background Watermark */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[20vw] font-black text-white/[0.02] select-none pointer-events-none tracking-tighter uppercase whitespace-nowrap">
          XenonEdge
        </div>
        <div className="absolute inset-0 bg-[radial-gradient(rgba(14,165,233,0.08)_1px,transparent_1px)] [background-size:32px_32px] pointer-events-none"></div>
        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-1.5 rounded-md bg-sky-500/10 border border-sky-500/30 text-sky-400 font-bold uppercase tracking-[0.3em] text-[10px] mb-6">
              Our Story
            </span>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight">The Journey So Far</h2>
          </motion.div>

          <div className="max-w-4xl mx-auto space-y-24">
            {timeline.map((item, i) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.1 }}
                className="grid grid-cols-1 md:grid-cols-[180px_1fr] gap-6 md:gap-16 group"
              >
                <div className="relative">
                   {/* Sequence Number */}
                   <div className="text-white/5 text-8xl font-black absolute -top-8 -left-4 select-none transition-colors group-hover:text-sky-500/10">
                     {String(i + 1).padStart(2, '0')}
                   </div>
                   <div className="relative z-10 text-sky-400 font-black text-2xl tracking-tighter pt-4">
                     {item.year}
                   </div>
                </div>
                <div className="border-l border-white/10 pl-8 md:pl-16 relative py-4">
                  {/* Indicator Dot */}
                  <div className="absolute top-8 -left-[5px] w-2 h-2 rounded-full bg-slate-600 transition-all duration-500 group-hover:bg-sky-500"></div>
                  
                  <h3 className="text-2xl md:text-3xl font-black mb-4 tracking-tight text-white group-hover:text-sky-400 transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-slate-400 text-lg leading-relaxed max-w-2xl font-medium">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <ServiceCTA 
        title="Ready to Build Something Amazing?"
        subtitle="Let's collaborate to turn your vision into a powerful digital reality. Our team is ready to engineer your next breakthrough."
        primaryBtnText="Start Your Project"
        primaryBtnHref="/contact"
        secondaryBtnText="Explore Our Services"
        secondaryBtnHref="/services"
      />
    </>
  )
}
