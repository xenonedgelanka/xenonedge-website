"use client"
import { motion } from 'framer-motion'
import Image from 'next/image'

const items = [
  {
    title: 'Web Development',
    icon: '/service-icons/web-development-svgrepo-com.svg'
  },
  {
    title: 'Mobile App Development',
    icon: '/service-icons/mobile-app-developing-svgrepo-com.svg'
  },
  {
    title: 'Custom Software',
    icon: '/service-icons/software-svgrepo-com.svg'
  },
  {
    title: 'Ecommerce Solutions',
    icon: '/service-icons/ecommerce-website-commerce-and-shopping-2-svgrepo-com.svg'
  },
  {
    title: 'AI Integrations',
    icon: '/service-icons/ai-svgrepo-com.svg'
  },
  {
    title: 'UI/UX Design',
    icon: '/service-icons/design-svgrepo-com.svg'
  },
  {
    title: 'SEO Services',
    icon: '/service-icons/seo-3-svgrepo-com.svg'
  },
  {
    title: 'Digital Marketing',
    icon: '/service-icons/marketing-advertising-svgrepo-com.svg'
  }
]

export default function Services() {
  return (
    <section className="pt-8 md:pt-12 pb-16 md:pb-20 bg-[#f9fafb] relative overflow-hidden" id="services">
      {/* Premium Background Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Technical Dot Grid Style */}
        <div className="absolute inset-0 bg-[radial-gradient(#cbd5e1_1.5px,transparent_1.5px)] [background-size:32px_32px] opacity-40" />



        {/* Soft Mesh Gradients for Depth - Sophisticated Neutrals */}
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-blue-50/40 rounded-full blur-[120px] -translate-y-1/2" />
        <div className="absolute bottom-0 right-1/4 w-[700px] h-[700px] bg-slate-100/50 rounded-full blur-[120px] translate-y-1/2" />

        {/* Soft Gradient Mask */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-transparent to-white/80" />
      </div>

      <div className="container px-6 mx-auto relative z-10">
        <div className="mb-12 text-center mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center px-4 py-1.5 rounded-md border border-sky-500/30 text-sky-600 text-[10px] font-bold tracking-[0.2em] uppercase mb-4 bg-sky-50/50"
          >
            Our Services
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-slate-500 max-w-none mx-auto whitespace-nowrap"
          >
            We deliver state-of-the-art software solutions that empower businesses to scale and dominate the digital landscape.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {items.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.6 }}
              className="group relative p-6 rounded-xl bg-white border border-slate-200 transition-all duration-300 hover:border-sky-500 flex flex-col items-center text-center h-full min-h-[220px] shadow-sm"
            >
              <div className="relative z-10 flex flex-col items-center justify-center h-full w-full">
                {/* Icon Wrapper - Minimal without background */}
                <div className="relative mb-4">
                  <div className="w-16 h-16 flex items-center justify-center transition-all duration-300">
                    <div className="relative w-10 h-10 transition-transform duration-300 group-hover:scale-110">
                      <Image
                        src={service.icon}
                        alt={service.title}
                        fill
                        className="object-contain"
                        style={{
                          filter: 'invert(48%) sepia(87%) saturate(2258%) hue-rotate(174deg) brightness(101%) contrast(93%)'
                        }}
                      />
                    </div>
                  </div>
                </div>

                <h3 className="text-lg font-bold text-[#071E3D] group-hover:text-sky-500 transition-colors duration-300 px-2">
                  {service.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
