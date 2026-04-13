"use client"
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

interface ServiceCTAProps {
  title: string;
  subtitle: string;
  primaryBtnText: string;
  primaryBtnHref: string;
  secondaryBtnText: string;
  secondaryBtnHref: string;
}

export default function ServiceCTA({
  title,
  subtitle,
  primaryBtnText,
  primaryBtnHref,
  secondaryBtnText,
  secondaryBtnHref
}: ServiceCTAProps) {
  return (
    <section className="py-12 px-4 sm:px-6 relative overflow-hidden bg-white">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative mx-auto max-w-6xl overflow-hidden rounded-3xl bg-[#071E3D] p-10 md:p-16 shadow-2xl"
      >
        {/* Subtle Technical Pattern */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:32px_32px]"></div>
        </div>

        <div className="relative z-10 flex flex-col items-center text-center">
          <div className="max-w-3xl">
            <h2 className="text-3xl md:text-5xl font-black text-white leading-tight mb-6 uppercase tracking-tight">
              {title.split(' ').slice(0, -1).join(' ')} <span className="text-sky-400">{title.split(' ').slice(-1)}</span>
            </h2>
            <p className="text-base text-slate-300 leading-relaxed font-medium max-w-xl mx-auto mb-10">
              {subtitle}
            </p>
          </div>

          <div className="flex flex-wrap gap-5 justify-center mt-2">
            <Link href={primaryBtnHref} className="btn-premium-primary">
              {primaryBtnText} <ArrowRight className="w-4 h-4 arrow-icon" />
            </Link>
            <Link href={secondaryBtnHref} className="btn-premium-outline">
              {secondaryBtnText}
            </Link>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
