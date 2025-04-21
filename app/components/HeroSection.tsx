'use client'
import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'

const slides = [
  {
    image: '/infrastructure/download.jpeg',
    title: 'Transform your Future',
    subtitle: 'Through Education',
    description: 'Join our innovative learning programs designed to empower your educational journey. Start your path to success today!',
    stats: [
      { number: '50+', label: 'Expert Teachers' },
      { number: '1000+', label: 'Students' },
      { number: '95%', label: 'Success Rate' }
    ]
  },
  {
    image: '/school/download (7).jpeg',
    title: 'Learn & Grow',
    subtitle: 'With Excellence',
    description: 'Access world-class education with our modern facilities and experienced faculty. Your success story begins here!',
    stats: [
      { number: '30+', label: 'Programs' },
      { number: '15+', label: 'Years' },
      { number: '100%', label: 'Support' }
    ]
  },
  {
    image: '/school/download (6).jpeg',
    title: 'Discover Your Potential',
    subtitle: 'Start Today',
    description: 'Experience personalized learning that adapts to your needs. Let\'s unlock your full potential together!',
    stats: [
      { number: '24/7', label: 'Support' },
      { number: '200+', label: 'Courses' },
      { number: '98%', label: 'Satisfaction' }
    ]
  }
]

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="relative w-full bg-[#f1f8fe] overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob" />
          <div className="absolute top-1/3 right-2/3 w-64 h-64 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-60 animate-blob animation-delay-2000" />
          <div className="absolute bottom-3/4 right-2/5 w-64 h-64 bg-indigo-200 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-blob animation-delay-4000" />
        </div>
      </div>

      <div className="relative container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Content Section */}
          <motion.div 
            className="lg:col-span-5 space-y-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-block"
            >
              <span className="px-4 py-2 bg-[#e3effb] text-[#1572b4] rounded-full text-sm font-medium">
                Welcome to Excellence
              </span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="space-y-6"
            >
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900">
                {slides[currentSlide].title} {" "}
                <span className=" text-[#1572b4] mt-2">
                  {slides[currentSlide].subtitle}
                </span>
              </h1>
              <p className="text-lg text-gray-600 max-w-xl">
                {slides[currentSlide].description}
              </p>

              {/* Stats Grid */}
              <div className="grid grid-cols-3 gap-4 py-6">
                {slides[currentSlide].stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 + index * 0.1 }}
                    className="text-center"
                  >
                    <div className="text-2xl font-bold text-[#1572b4]">{stat.number}</div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </motion.div>
                ))}
              </div>

              <div className="flex gap-4">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    href="/get-started"
                    className="inline-flex items-center px-6 py-3 bg-[#1572b4] text-white rounded-full font-medium hover:bg-[#125c92] transition-colors"
                  >
                    Get Started
                    <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    href="/learn-more"
                    className="inline-flex items-center px-6 py-3 border-2 border-[#2390d4] text-[#2390d4] rounded-full font-medium hover:bg-[#e3effb] transition-colors"
                  >
                    Learn More
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>

          {/* Image Section */}
          <motion.div 
            className="lg:col-span-7 relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative h-[600px]">
              {/* Main Image Card */}
              <motion.div
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[80%] h-[400px]"
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl">
                  <Image
                    src={slides[currentSlide].image}
                    alt={slides[currentSlide].title}
                    fill
                    className="object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                </div>

                {/* Floating Cards */}
                <motion.div
                  className="absolute -left-20 top-20 bg-white p-4 rounded-xl shadow-lg"
                  animate={{
                    y: [0, -15, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1
                  }}
                >
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-[#e3effb] rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-[#1572b4]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <div className="font-medium text-[#1572b4] font-semibold">Success Rate</div>
                      <div className="text-sm text-gray-500">95% Guaranteed</div>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  className="absolute -right-10 bottom-20 bg-white p-4 rounded-xl shadow-lg"
                  animate={{
                    y: [0, -20, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.5
                  }}
                >
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                      </svg>
                    </div>
                    <div>
                      <div className="font-medium text-green-600 font-semibold">Join Now</div>
                      <div className="text-sm text-gray-500">Limited Seats</div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>

              {/* Navigation Dots */}
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                      currentSlide === index 
                        ? 'bg-[#1572b4] scale-125' 
                        : 'bg-gray-300 hover:bg-[#4aabe6]'
                    }`}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default HeroSection 