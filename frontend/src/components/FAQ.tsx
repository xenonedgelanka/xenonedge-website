"use client"
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiChevronDown, FiPlus, FiArrowUpRight } from 'react-icons/fi'
import Link from 'next/link'

const faqs = [
    {
        question: "What do you need to start making me a website?",
        answer: (
            <>
                <p className="mb-4">To get started, we need a few basic details from you:</p>
                <ul className="list-disc pl-5 space-y-2">
                    <li>Your business or brand name</li>
                    <li>The purpose of the website (business, portfolio, e-commerce, blog, etc.)</li>
                    <li>Any design preferences (colors, style, reference websites)</li>
                    <li>Content such as text, images, or logos (if available)</li>
                    <li>Required features (contact forms, payment gateway, booking system, etc.)</li>
                </ul>
                <p className="mt-4">Once we have this information, we can plan, design, and develop a website that meets your goals.</p>
            </>
        )
    },
    {
        question: "How long does it take to build a new website?",
        answer: "The timeline depends on the complexity and scope of the project. A simple landing page might take 1-2 weeks, while a complex e-commerce or custom software solution can take 4-8 weeks. We provide a detailed project timeline after our initial consultation."
    },
    {
        question: "Do you provide domain and hosting services?",
        answer: "Yes, we offer complete end-to-end solutions, including domain registration, secure hosting setup, and SSL certification. We also provide ongoing maintenance to ensure your site stays fast and secure."
    },
    {
        question: "Can I update the website content myself later?",
        answer: "Absolutely! We build most of our websites using intuitive Content Management Systems (CMS) like WordPress or custom-built dashboards. We provide a training session to show you how to easily update text, images, and other content."
    }
]

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(0)

    return (
        <section className="py-24 bg-[#f1f5f9] relative overflow-hidden" id="faq">
            {/* Premium Technical Background */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                {/* Subtle Dot Grid */}

                {/* Giant "?" Watermarks - Pinned to top to prevent movement on expansion */}
                <svg
                    className="absolute -top-10 -left-10 w-[400px] h-[500px] md:w-[550px] md:h-[650px] opacity-[0.06]"
                    style={{ transform: 'rotate(-12deg)' }}
                    viewBox="0 0 200 250"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                >
                    <text
                        x="50%"
                        y="50%"
                        dominantBaseline="central"
                        textAnchor="middle"
                        fontSize="280"
                        fontWeight="900"
                        fontFamily="Arial, Helvetica, sans-serif"
                        fill="#0ea5e9"
                    >
                        ?
                    </text>
                </svg>

                <svg
                    className="absolute top-[320px] -right-8 w-[300px] h-[380px] md:w-[420px] md:h-[500px] opacity-[0.05]"
                    style={{ transform: 'rotate(15deg)' }}
                    viewBox="0 0 200 250"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                >
                    <text
                        x="50%"
                        y="50%"
                        dominantBaseline="central"
                        textAnchor="middle"
                        fontSize="280"
                        fontWeight="900"
                        fontFamily="Arial, Helvetica, sans-serif"
                        fill="#071E3D"
                    >
                        ?
                    </text>
                </svg>

                {/* Vertical Depth Gradient */}

            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col lg:flex-row gap-16 items-start">

                    {/* Left Column: Heading and CTA */}
                    <div className="lg:w-5/12 lg:h-fit">
                        <div className="inline-flex items-center px-4 py-1.5 rounded-md border border-sky-500/30 text-sky-600 text-[10px] font-bold uppercase tracking-[0.2em] mb-6 bg-sky-50/50">
                            Frequently Asked Questions
                        </div>

                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#071E3D] leading-tight mb-6 uppercase tracking-tight">
                            Got Questions? <br />
                            We've Got Answers
                        </h2>

                        <p className="text-base text-slate-500 mb-8 leading-relaxed max-w-md">
                            Explore our common queries to understand how we can help your business grow through superior technology and design.
                        </p>

                        <div>
                            <Link
                                href="/contact"
                                className="inline-flex items-center gap-3 px-8 py-3 bg-[#071E3D] text-white rounded-lg font-bold text-sm transition-all hover:bg-sky-600 group"
                            >
                                <span>Get in Touch</span>
                                <FiArrowUpRight className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                            </Link>
                        </div>
                    </div>

                    {/* Right Column: Accordion */}
                    <div className="lg:w-7/12 w-full space-y-3">
                        {faqs.map((faq, index) => {
                            const isOpen = openIndex === index
                            return (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className={`rounded-xl border transition-all duration-300 overflow-hidden ${isOpen ? 'border-[#071E3D] bg-slate-50 shadow-sm' : 'border-slate-200 bg-white hover:border-slate-300'
                                        }`}
                                >
                                    <button
                                        onClick={() => setOpenIndex(isOpen ? null : index)}
                                        className="w-full flex items-center justify-between p-5 text-left transition-colors duration-300"
                                    >
                                        <span className={`text-base md:text-lg font-bold transition-colors duration-300 ${isOpen ? 'text-[#071E3D]' : 'text-[#071E3D]'
                                            }`}>
                                            {faq.question}
                                        </span>
                                        <div className={`w-6 h-6 rounded-md flex items-center justify-center transition-all duration-300 flex-shrink-0 ${isOpen ? 'bg-[#071E3D] text-white rotate-180' : 'bg-slate-100 text-slate-400'
                                            }`}>
                                            <FiChevronDown size={14} />
                                        </div>
                                    </button>

                                    <AnimatePresence>
                                        {isOpen && (
                                            <motion.div
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: 'auto', opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                transition={{ duration: 0.3, ease: 'easeInOut' }}
                                            >
                                                <div className="px-5 pb-6 pt-0 text-slate-600 text-sm md:text-base leading-relaxed border-t border-slate-100">
                                                    <div className="pt-4">
                                                        {typeof faq.answer === 'string' ? <p>{faq.answer}</p> : faq.answer}
                                                    </div>
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </motion.div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </section>
    )
}
