"use client"
import { motion } from 'framer-motion'
import AnimatedLottie from './AnimatedLottie'
import Link from 'next/link'

/**
 * CompanyHighlights Component
 * Clean, premium design with Lottie animation and company overview.
 * Features:
 * - SEO-friendly semantic HTML structure
 * - Minimal, elegant layout with subtle accents
 * - Lottie animation on the left, company info on the right
 */
export default function CompanyHighlights() {

    return (
        <section className="py-20 md:py-28 bg-[#f1f5f9] relative overflow-hidden" id="highlights">

            {/* Giant Watermark SVG Icons - Behind content */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
                {/* Soft blur accents */}
                <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-sky-100/40 blur-[100px]" />
                <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-slate-200/30 blur-[80px]" />

                {/* Giant watermark icons */}
                <img src="/watermark-icons/lightbulb.svg" alt="" className="absolute bottom-[5%] right-[3%] w-[200px] h-[200px] md:w-[300px] md:h-[300px] opacity-[0.12] grayscale" style={{ transform: 'rotate(-8deg)' }} />
            </div>

            <div className="container px-6 mx-auto relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

                    {/* Left: Lottie Animation */}
                    <motion.div
                        className="lg:w-5/12"
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                    >
                        <div className="relative w-full max-w-[440px] mx-auto">
                            <AnimatedLottie
                                animationPath="/team1.json"
                                className="w-full h-auto"
                            />
                        </div>
                    </motion.div>

                    {/* Right: Content */}
                    <motion.div
                        className="lg:w-7/12"
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                    >

                        {/* Heading */}
                        <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-[var(--btn)] leading-[1.15] mb-6">
                            Leading Software Development{' '}
                            <span className="text-sky-500">Partner in Sri Lanka</span>
                        </h2>

                        {/* Description */}
                        <p className="text-base md:text-lg text-slate-500 leading-relaxed max-w-xl mb-10">
                            XenonEdge is a top software development company in Sri Lanka. We build high-quality web applications and custom digital solutions that help businesses grow. Our team uses the latest technology to ensure your projects are fast, secure, and built for success.
                        </p>


                        {/* CTA Link */}
                        <Link
                            href="/about"
                            className="group inline-flex items-center gap-4 text-[#071E3D] hover:text-sky-600 transition-colors"
                        >
                            <span className="text-sm font-bold uppercase tracking-[0.2em]">Read More</span>
                            <div className="w-8 h-px bg-[#071E3D]/20 group-hover:w-12 group-hover:bg-sky-600 transition-all duration-500"></div>
                        </Link>
                    </motion.div>

                </div>
            </div>
        </section>
    )
}
