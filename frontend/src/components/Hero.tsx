"use client"

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import AnimatedSection from './AnimatedSection'
import AnimatedLottie from './AnimatedLottie'

const phrases = [
  { text: "Web Designs", color: "text-sky-400" },
  { text: "Mobile Apps", color: "text-indigo-400" },
  { text: "AI Solutions", color: "text-purple-400" },
  { text: "UI/UX Designs", color: "text-rose-400" },
  { text: "E-commerce sites", color: "text-amber-400" },
]

export default function Hero() {
  const [index, setIndex] = useState(0)
  const [displayText, setDisplayText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)
  const [speed, setSpeed] = useState(100)

  useEffect(() => {
    const handleTyping = () => {
      const currentFullText = phrases[index].text

      if (!isDeleting) {
        setDisplayText(currentFullText.substring(0, displayText.length + 1))
        setSpeed(100) // Typing speed

        if (displayText === currentFullText) {
          setIsDeleting(true)
          setSpeed(2000) // Pause at full text
        }
      } else {
        setDisplayText(currentFullText.substring(0, displayText.length - 1))
        setSpeed(50) // Deleting speed

        if (displayText === "") {
          setIsDeleting(false)
          setIndex((prev) => (prev + 1) % phrases.length)
          setSpeed(500) // Pause before next phrase
        }
      }
    }

    const timer = setTimeout(handleTyping, speed)
    return () => clearTimeout(timer)
  }, [displayText, isDeleting, index, speed])

  return (
    <section className="hero-dark relative overflow-hidden">
      {/* Dot Pattern Overlay */}
      <div className="absolute inset-0 z-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:32px_32px] pointer-events-none"></div>

      <div className="container hero-inner grid grid-cols-1 md:grid-cols-2 items-center gap-12 pt-28 pb-16 md:pt-36 md:pb-24">
        <div className="relative z-10">
          <AnimatedSection>
            <h1 className="text-4xl md:text-6xl font-extrabold leading-[1.15] tracking-tight min-h-[160px] md:min-h-[220px]">
              Build Better<br />
              Experiences with<br />
              <span className={`inline-block ${phrases[index].color} transition-colors duration-500 min-w-[200px]`}>
                {displayText}
                <motion.span
                  animate={{ opacity: [1, 0, 1] }}
                  transition={{ repeat: Infinity, duration: 1 }}
                  className="inline-block ml-2 w-1.5 h-[0.75em] bg-current align-middle rounded-full"
                />
              </span>
            </h1>

            <p className="mt-4 text-lg md:text-xl text-gray-400 max-w-xl leading-relaxed">
              Simplify your business workflows with our smart solutions.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="group relative inline-flex items-center text-sky-400 font-bold text-lg transition-all duration-300 hover:text-sky-300"
              >
                <span className="relative">
                  Let's Talk!
                  <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-gradient-to-r from-sky-400 to-indigo-400 transition-all duration-500 group-hover:w-full"></span>
                </span>
                <svg
                  className="ml-2 w-6 h-6 transition-all duration-300 group-hover:translate-x-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                </svg>
              </Link>
            </div>
          </AnimatedSection>
        </div>

        <AnimatedSection delay={0.15}>
          <div className="mx-auto w-full hero-illustration relative flex items-center justify-center">
            <div className="relative z-10 flex items-center justify-center w-full md:-translate-y-6 scale-105 md:scale-110 transition-all duration-500">
              <div className="w-full max-w-[400px] md:max-w-[460px] aspect-square">
                <AnimatedLottie className="transition-transform duration-500 hover:scale-105 cursor-pointer" />
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>

      <div className="relative z-10 pointer-events-none">
        <img src="/images/wave-bottom.svg" alt="" className="w-full block" />
      </div>
    </section>
  )
}

