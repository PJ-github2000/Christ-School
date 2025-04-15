'use client'
import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'

const slides = [
  {
    image: '/infrastructure/download.jpeg',
    title: 'Education Needs Complete Solution',
    subtitle: 'Committed to educating and nurturing all students so they may grow towards responsible global citizenship.',
    buttonText: 'Contact Us',
    buttonLink: '/contact'
  },
  {
    image: '/school/download (7).jpeg',
    title: 'Nurturing Future Leaders',
    subtitle: 'Providing quality education with modern facilities and experienced faculty.',
    buttonText: 'Learn More',
    buttonLink: '/about'
  },
  {
    image: '/school/download (6).jpeg',
    title: 'Excellence in Education',
    subtitle: 'Building character, creativity, and academic excellence.',
    buttonText: 'Join Us',
    buttonLink: '/admission'
  }
]

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000) // Change slide every 5 seconds

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="w-full">
      {/* Hero Slider */}
      <div className="relative h-[calc(100vh-150px)] overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-1/3 h-full opacity-20 bg-gradient-to-b from-[#154265] to-transparent transform rotate-45" />
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 opacity-10 bg-gradient-to-t from-[#2390d4] to-transparent" />
        <div className="absolute top-20 left-20 w-32 h-32 opacity-10 rounded-full bg-[#154265] blur-3xl" />
        <div className="absolute bottom-20 right-20 w-40 h-40 opacity-10 rounded-full bg-[#2390d4] blur-3xl" />
        
        {/* Dot Pattern Overlay */}
        <div className="absolute inset-0 opacity-5" 
             style={{
               backgroundImage: 'radial-gradient(circle, #154265 1px, transparent 1px)',
               backgroundSize: '30px 30px'
             }} />

        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
              currentSlide === index ? 'opacity-100' : 'opacity-0'
            }`}
          >
            {/* Background Image with Overlay */}
            <div className="relative w-full h-full">
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                className="object-cover"
                priority={index === 0}
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />
              
              {/* Content */}
              <div className="relative h-full flex flex-col justify-center items-center text-center text-white px-4">
                {/* Decorative Line */}
                {/* <div className="w-20 h-1 bg-[#2390d4] mb-8"></div> */}
                
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 max-w-4xl">
                  {slide.title}
                </h1>
                <p className="text-lg md:text-xl mb-8 max-w-2xl">
                  {slide.subtitle}
                </p>
                <Link
                  href={slide.buttonLink}
                  className="group relative overflow-hidden bg-[#154265] hover:bg-[#134d79] text-white px-8 py-3 rounded-full transition-all duration-300"
                >
                  <span className="relative z-10">{slide.buttonText}</span>
                  <div className="absolute inset-0 w-full h-full bg-[#2390d4] transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                </Link>
              </div>
            </div>
          </div>
        ))}

        {/* Slide Navigation Dots */}
        <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                currentSlide === index 
                  ? 'bg-white scale-125' 
                  : 'bg-white/50 hover:bg-white/75'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Mission, Vision, Values Section */}
      <div className="relative py-16 px-4 overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute top-0 right-0 w-72 h-72 bg-[#154265] opacity-5 rounded-full transform translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#2390d4] opacity-5 rounded-full transform -translate-x-1/2 translate-y-1/2" />
        
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Mission */}
          <div className="text-center p-6 bg-[#e3effb] shadow-[#c0e0f7] border-2 border-[#2390d4] rounded-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            <div className="w-16 h-16 mx-auto mb-4 text-[#154265] bg-[#e3effb] rounded-full flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-[#154265] mb-4">OUR MISSION</h2>
            <p className="text-gray-600">
              The mission of the Catholic Church is to deliver quality education that nurtures intellectual growth, 
              character development, and spiritual formation in our students.
            </p>
          </div>

          {/* Vision */}
          <div className="text-center p-6 bg-[#e3effb] shadow-[#c0e0f7] border-2 border-[#2390d4] rounded-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            <div className="w-16 h-16 mx-auto mb-4 text-[#154265] bg-[#e3effb] rounded-full flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-[#154265] mb-4">OUR VISION</h2>
            <p className="text-gray-600">
              The Catholic Church seeks to consistently produce all-round students who are academically excellent, 
              morally upright, and socially responsible.
            </p>
          </div>

          {/* Values */}
          <div className="text-center p-6 bg-[#e3effb] shadow-[#c0e0f7] border-2 border-[#2390d4] rounded-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            <div className="w-16 h-16 mx-auto mb-4 text-[#154265] bg-[#e3effb] rounded-full flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-[#154265] mb-4">VALUES</h2>
            <p className="text-gray-600">
              Knowledge, Service, Love - We believe in fostering academic excellence while instilling strong moral values 
              and a commitment to serving others.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroSection 