"use client"
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
// import { Quote } from 'lucide-react' // Quote might not be exported in this version
import Image from 'next/image'

const testimonials = [
  {
    id: 1,
    company: "Sirakukal Amaiyam",
    role: "Founder, President",
    author: "Sujeevan Tharmaratnam",
    text: "Colloborating with detech transformed our Volunteer Amayam. Their AI expertise streamlined processes, improved efficiency, and saved valuable time. Professional, innovative, and always meeting our needs.",
    image: "/api/placeholder/100/100"
  },
  {
    id: 2,
    company: "Sparrow Nest Photography",
    role: "Founder",
    author: "Amaran Sarujan",
    text: "We collaborated with detech to create a Portfolio Website, and the results were exceptional. The scalable, user-friendly site perfectly met our needs. Their support and professionalism were unmatched throughout.",
    image: "/api/placeholder/100/100"
  },
  {
    id: 3,
    company: "Acme Corp",
    role: "CTO",
    author: "Sarah Jenkins",
    text: "XenonEdge didn't just build our platform; they reimagined our entire digital infrastructure. The scalability they delivered is unmatched.",
    image: "/api/placeholder/100/100"
  },
  {
    id: 4,
    company: "HealthCo",
    role: "Product Lead",
    author: "Dr. Alan Grant",
    text: "Reliable engineering meeting healthcare compliance standards. Their attention to security details gave us complete peace of mind.",
    image: "/api/placeholder/100/100"
  },
  {
    id: 5,
    company: "TechFlow",
    role: "Director of Engineering",
    author: "Michael Chen",
    text: "The team at XenonEdge completely upgraded our workflow automation. The ROI was visible within weeks of deployment.",
    image: "/api/placeholder/100/100"
  },
  {
    id: 6,
    company: "BioSence",
    role: "Head of Research",
    author: "Dr. Emily Chen",
    text: "Working with XenonEdge was a game-changer for our data analysis platform. Their ability to handle complex datasets is vital.",
    image: "/api/placeholder/100/100"
  }
]

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [itemsPerPage, setItemsPerPage] = useState(1)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setItemsPerPage(3)
      } else if (window.innerWidth >= 768) {
        setItemsPerPage(2)
      } else {
        setItemsPerPage(1)
      }
    }
    handleResize() // Initial check
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const totalPages = Math.ceil(testimonials.length / itemsPerPage)

  const handleDotClick = (index: number) => {
    setCurrentIndex(index)
  }

  const handleDragEnd = (event: any, info: any) => {
    const swipeThreshold = 50
    if (info.offset.x < -swipeThreshold) {
      // Swiped Left - Go Next
      if (currentIndex < totalPages - 1) {
        setCurrentIndex(currentIndex + 1)
      }
    } else if (info.offset.x > swipeThreshold) {
      // Swiped Right - Go Prev
      if (currentIndex > 0) {
        setCurrentIndex(currentIndex - 1)
      }
    }
  }

  return (
    <section className="py-20 bg-[#f1f5f9]">
      <div className="container mx-auto px-6">

        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-flex items-center px-4 py-1.5 rounded-md border border-sky-500/30 text-sky-600 text-[10px] font-bold tracking-[0.2em] uppercase mb-4 bg-sky-50/50">
            Testimonials
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            What our clients say
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Trusted by innovative companies to build their digital future.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative overflow-hidden mb-12 cursor-grab active:cursor-grabbing">

          <div className="overflow-hidden">
            <motion.div
              className="flex"
              animate={{ x: `-${currentIndex * 100}%` }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.2}
              onDragEnd={handleDragEnd}
            >
              {Array.from({ length: totalPages }).map((_, pageIndex) => (
                <div key={pageIndex} className="min-w-full flex gap-6 px-1">
                  {/* Get items for this page */}
                  {testimonials.slice(pageIndex * itemsPerPage, (pageIndex + 1) * itemsPerPage).map((item) => (
                    <div
                      key={item.id}
                      className={`${itemsPerPage === 3 ? 'w-1/3' : itemsPerPage === 2 ? 'w-1/2' : 'w-full'}`}
                    >
                      <TestimonialCard item={item} />
                    </div>
                  ))}

                  {/* Fill empty slots if last page has fewer items */}
                  {pageIndex === totalPages - 1 && testimonials.length % itemsPerPage !== 0 && (
                    Array.from({ length: itemsPerPage - (testimonials.length % itemsPerPage) }).map((_, i) => (
                      <div key={`empty-${i}`} className={`${itemsPerPage === 3 ? 'w-1/3' : itemsPerPage === 2 ? 'w-1/2' : 'w-full'} opacity-0 invisible`}>
                        <TestimonialCard item={testimonials[0]} />
                      </div>
                    ))
                  )}
                </div>
              ))}
            </motion.div>
          </div>

        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center items-center gap-3">
          {Array.from({ length: totalPages }).map((_, idx) => (
            <button
              key={idx}
              onClick={() => handleDotClick(idx)}
              className={`h-3 rounded-full transition-all duration-300 ${idx === currentIndex
                ? 'w-8 bg-slate-800'
                : 'w-3 bg-slate-200 hover:bg-slate-300'
                }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  )
}

function TestimonialCard({ item }: { item: typeof testimonials[0] }) {
  return (
    <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200 h-full relative flex flex-col justify-between transition-all duration-300">

      {/* Header: Author & Stars */}
      <div className="flex justify-between items-start mb-6">

        {/* Author Info */}
        <div className="flex items-center gap-3">
          <div className="relative shrink-0 w-12 h-12 rounded-full overflow-hidden bg-white ring-2 ring-white shadow-sm flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-7 h-7 text-slate-400"
            >
              <path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z" clipRule="evenodd" />
            </svg>
          </div>
          <div>
            <div className="font-bold text-slate-900 text-sm">{item.author}</div>
            <div className="text-xs text-slate-500 font-medium">
              {item.company}
            </div>
          </div>
        </div>

        {/* Stars */}
        <div className="flex gap-0.5">
          {[...Array(5)].map((_, i) => (
            <span key={i} className="text-amber-400 text-sm">★</span>
          ))}
        </div>
      </div>

      {/* Testimonial Text */}
      <blockquote className="text-slate-700 font-medium text-base leading-loose mb-8 flex-grow">
        "{item.text}"
      </blockquote>

      {/* Footer: Quote Icon Watermark */}
      <div className="absolute bottom-6 right-6">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="text-blue-950 w-12 h-12"
        >
          <path d="M9.983 3v7.391c0 5.704-3.731 9.57-8.983 10.609l-.995-2.151c2.432-.917 3.995-3.638 3.995-5.849h-4v-10h9.983zm14.017 0v7.391c0 5.704-3.748 9.571-9 10.609l-.996-2.151c2.433-.917 3.996-3.638 3.996-5.849h-3.983v-10h9.983z" />
        </svg>
      </div>

    </div>
  )
}
