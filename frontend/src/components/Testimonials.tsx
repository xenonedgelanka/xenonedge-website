"use client"
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { FaGoogle } from 'react-icons/fa'

import Loader from './Loader'

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api'

interface Review {
  _id: string
  author: string
  company: string
  role: string
  text: string
  rating: number
  avatar: string
  source?: 'Direct' | 'Google'
}

export default function Testimonials() {
  const [reviews, setReviews] = useState<Review[]>([])
  const [currentIndex, setCurrentIndex] = useState(0)
  const [itemsPerPage, setItemsPerPage] = useState(1)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchReviews()
  }, [])

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) setItemsPerPage(3)
      else if (window.innerWidth >= 768) setItemsPerPage(2)
      else setItemsPerPage(1)
    }
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const fetchReviews = async () => {
    try {
      const res = await fetch(`${API_URL}/reviews`, { next: { revalidate: 60 } })
      if (res.ok) {
        const data = await res.json()
        if (data.data && data.data.length > 0) {
          setReviews(data.data)
        }
      }
    } catch {
      // fallback to static data
    } finally {
      setLoading(false)
    }
  }

  const totalPages = Math.ceil(reviews.length / itemsPerPage)

  const handleDotClick = (index: number) => setCurrentIndex(index)

  const handleDragEnd = (event: any, info: any) => {
    const swipeThreshold = 50
    if (info.offset.x < -swipeThreshold && currentIndex < totalPages - 1) {
      setCurrentIndex(currentIndex + 1)
    } else if (info.offset.x > swipeThreshold && currentIndex > 0) {
      setCurrentIndex(currentIndex - 1)
    }
  }

  if (loading) return <Loader />
  if (reviews.length === 0) return null

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
                  {reviews.slice(pageIndex * itemsPerPage, (pageIndex + 1) * itemsPerPage).map((item) => (
                    <div
                      key={item._id}
                      className={`${itemsPerPage === 3 ? 'w-1/3' : itemsPerPage === 2 ? 'w-1/2' : 'w-full'}`}
                    >
                      <TestimonialCard item={item} />
                    </div>
                  ))}
                  {pageIndex === totalPages - 1 && reviews.length % itemsPerPage !== 0 && (
                    Array.from({ length: itemsPerPage - (reviews.length % itemsPerPage) }).map((_, i) => (
                      <div key={`empty-${i}`} className={`${itemsPerPage === 3 ? 'w-1/3' : itemsPerPage === 2 ? 'w-1/2' : 'w-full'} opacity-0 invisible`}>
                        <TestimonialCard item={reviews[0]} />
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

function TestimonialCard({ item }: { item: Review }) {
  return (
    <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200 h-full relative flex flex-col justify-between transition-all duration-300">
      {/* Header: Author & Stars */}
      <div className="flex justify-between items-start mb-6">
        {/* Author Info */}
        <div className="flex items-center gap-3">
          <div className="relative shrink-0 w-12 h-12 rounded-full overflow-hidden bg-white ring-2 ring-white shadow-sm flex items-center justify-center">
            {item.avatar ? (
              <img src={item.avatar} alt={item.author} className="w-full h-full object-cover" />
            ) : (
              <div className="w-full h-full bg-gradient-to-br from-sky-400 to-blue-600 flex items-center justify-center text-white font-bold text-lg">
                {item.author.charAt(0)}
              </div>
            )}
            {item.source === 'Google' && (
              <div className="absolute -bottom-1 -right-1 bg-white rounded-full p-1 shadow-sm border border-slate-100 flex items-center justify-center">
                <FaGoogle className="text-[#4285F4] w-2.5 h-2.5" />
              </div>
            )}
          </div>
          <div>
            <div className="font-bold text-slate-900 text-sm">{item.author}</div>
            <div className="text-xs text-slate-500 font-medium">{item.role} · {item.company}</div>
          </div>
        </div>

        {/* Stars */}
        <div className="flex gap-0.5">
          {[...Array(5)].map((_, i) => (
            <span key={i} className={`text-sm ${i < (item.rating || 5) ? 'text-amber-400' : 'text-slate-300'}`}>★</span>
          ))}
        </div>
      </div>

      {/* Testimonial Text */}
      <blockquote className="text-slate-700 font-medium text-base leading-loose mb-8 flex-grow">
        "{item.text}"
      </blockquote>

      {/* Quote Watermark */}
      <div className="absolute bottom-6 right-6">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="text-blue-950/10 w-12 h-12">
          <path d="M9.983 3v7.391c0 5.704-3.731 9.57-8.983 10.609l-.995-2.151c2.432-.917 3.995-3.638 3.995-5.849h-4v-10h9.983zm14.017 0v7.391c0 5.704-3.748 9.571-9 10.609l-.996-2.151c2.433-.917 3.996-3.638 3.996-5.849h-3.983v-10h9.983z" />
        </svg>
      </div>
    </div>
  )
}
