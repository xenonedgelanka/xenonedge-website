"use client"
import { motion } from 'framer-motion'
import AnimatedLottie from './AnimatedLottie'
import Link from 'next/link'

/**
 * CompanyHighlights Component
 * Redesigned to match the user-provided reference image.
 * Features:
 * - SEO-friendly semantic HTML structure
 * - Modern, simple design with a clean white background
 * - Lottie animation (team07.json) on the left
 * - Impactful statistics and descriptive company overview
 */
export default function CompanyHighlights() {
    return (
        <section className="py-24 md:py-32 bg-[#f1f5f9] relative overflow-hidden" id="highlights">
            {/* Premium Technical Background */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                {/* Subtle Dot Grid - Clean Visibility */}

                {/* Vertical Depth Gradient */}
            </div>

            {/* Watermark Background Icons - Colorful flat icons scattered all around */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">

                {/* 💻 Code Editor - Top Left */}
                <img
                    src="/watermark-icons/code.svg"
                    alt=""
                    className="absolute -top-2 left-[3%] w-[100px] h-[100px] md:w-[140px] md:h-[140px] opacity-[0.20]"
                    style={{ transform: 'rotate(-10deg)' }}
                />

                {/* 🏆 Trophy - Top Right */}
                <img
                    src="/watermark-icons/trophy.svg"
                    alt=""
                    className="absolute top-0 right-[4%] w-[95px] h-[95px] md:w-[130px] md:h-[130px] opacity-[0.20]"
                    style={{ transform: 'rotate(12deg)' }}
                />

                {/* 🛡️ Shield - Middle Left */}
                <img
                    src="/watermark-icons/shield.svg"
                    alt=""
                    className="absolute top-[40%] -left-2 w-[100px] h-[100px] md:w-[130px] md:h-[130px] opacity-[0.18]"
                    style={{ transform: 'rotate(8deg)' }}
                />

                {/* 🔍 Search - Middle Right */}
                <img
                    src="/watermark-icons/search.svg"
                    alt=""
                    className="absolute top-[38%] right-[2%] w-[95px] h-[95px] md:w-[125px] md:h-[125px] opacity-[0.18]"
                    style={{ transform: 'rotate(-12deg)' }}
                />

                {/* 📄 Document - Bottom Left */}
                <img
                    src="/watermark-icons/document.svg"
                    alt=""
                    className="absolute bottom-4 left-[5%] w-[95px] h-[95px] md:w-[130px] md:h-[130px] opacity-[0.22]"
                    style={{ transform: 'rotate(-14deg)' }}
                />

                {/* 💡 Lightbulb - Bottom Right */}
                <img
                    src="/watermark-icons/lightbulb.svg"
                    alt=""
                    className="absolute bottom-2 right-[5%] w-[100px] h-[100px] md:w-[135px] md:h-[135px] opacity-[0.20]"
                    style={{ transform: 'rotate(15deg)' }}
                />

            </div>

            {/* Subtle Bottom Accent - Neutral */}
            <div className="absolute bottom-0 left-1/4 w-[600px] h-[300px] bg-slate-100/30 rounded-full blur-[100px] translate-y-1/2 pointer-events-none" />

            <div className="container px-6 mx-auto relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">

                    {/* Left Column: Visual Content (SEO Tip: Use descriptive wrapping for visuals) */}
                    <motion.div
                        className="lg:w-1/2"
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <div className="relative w-full max-w-[500px] mx-auto group">
                            {/* Lottie Animation (team1.json) */}
                            <div className="relative z-10 transition-transform duration-500">
                                <AnimatedLottie
                                    animationPath="/team1.json"
                                    className="w-full h-auto drop-shadow-sm"
                                />
                            </div>

                            {/* Subtle background glow for depth */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-tr from-sky-50 to-transparent rounded-full blur-3xl -z-10 opacity-60" />
                        </div>
                    </motion.div>

                    {/* Right Column: Text Content */}
                    <motion.div
                        className="lg:w-1/2"
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >


                        {/* SEO-Optimized Heading */}
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#071427] mb-8 leading-[1.1]">
                            Leading Software Development <br />
                            <span className="text-sky-500 drop-shadow-sm">Partner in Sri Lanka</span>
                        </h2>

                        <p className="text-lg text-slate-600 leading-relaxed font-normal max-w-2xl text-justify">
                            XenonEdge is a top software development company in Sri Lanka. We build high-quality web applications and custom digital solutions that help businesses grow. Our team uses the latest technology to ensure your projects are fast, secure, and built for success. From initial design to global delivery, we are committed to providing the best results for your technical needs.
                        </p>

                        <div className="mt-10">
                            <Link
                                href="/about"
                                className="group inline-flex items-center text-sky-600 font-normal text-base transition-colors duration-300 hover:text-sky-800"
                            >
                                <span className="font-normal">Read More</span>
                                <svg
                                    className="ml-1.5 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 translate-y-[1px]"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={1.5}
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                                </svg>
                            </Link>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    )
}
