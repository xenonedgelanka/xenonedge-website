"use client"
import { motion } from 'framer-motion'

export default function QuoteSection() {
    return (
        <section className="relative py-10 md:py-14 overflow-hidden bg-[#f1f5f9]">

            {/* Subtle decorative accents */}
            <div
                className="absolute inset-0 pointer-events-none"
                aria-hidden="true"
            >
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-sky-500/[0.06] blur-[120px]" />
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-300/40 to-transparent" />
                <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-300/40 to-transparent" />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    className="text-center max-w-4xl mx-auto"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                >

                    {/* Decorative accent line */}
                    <motion.div
                        className="w-12 h-[2px] bg-sky-500 mx-auto mb-10"
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                    />

                    {/* Large decorative open-quote */}
                    <motion.span
                        className="block text-sky-500/15 text-[7rem] md:text-[9rem] leading-none font-serif select-none pointer-events-none -mb-16 md:-mb-20"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        aria-hidden="true"
                    >
                        &ldquo;
                    </motion.span>

                    {/* Main quote text */}
                    <h2 className="text-2xl sm:text-3xl md:text-[2.75rem] md:leading-[1.25] font-semibold tracking-tight text-[var(--btn)]">
                        Business growth comes from strong ideas
                        <br className="hidden md:block" />
                        {' '}and teamwork.{' '}
                        <span className="text-sky-400">
                            Together, we deliver outcomes.
                        </span>
                    </h2>

                    {/* Subtle attribution line */}
                    <motion.p
                        className="mt-8 text-sm tracking-[0.2em] uppercase text-slate-400 font-medium"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                    >
                        — XenonEdge
                    </motion.p>

                    {/* Bottom accent line */}
                    <motion.div
                        className="w-12 h-[2px] bg-sky-500 mx-auto mt-10"
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: 0.6 }}
                    />

                </motion.div>
            </div>
        </section>
    )
}
