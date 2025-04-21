'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'

const facilities = [
  {
    title: 'Safety First',
    description: 'Because the emergency procedures are well recognized and abide by school safety and health protocols.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
    stats: '100%',
    color: 'from-blue-100 to-blue-50'
  },
  {
    title: 'Certified Teachers',
    description: 'Our educators are highly qualified professionals who use skills and abilities to educate and devlop.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
      </svg>
    ),
    stats: '50+',
    color: 'from-blue-100 to-blue-50'
  },
  {
    title: 'Creative Lessons',
    description: 'All of the lessons are engaged in our creative way of learning to generate new information. ',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
      </svg>
    ),
    stats: '200+',
    color: 'from-blue-100 to-blue-50'
  },
  {
    title: 'Sports Facilities',
    description: 'The goal of the physical education and sports program is to provide space for practice and develop.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
      </svg>
    ),
    stats: '15+',
    color: 'from-blue-100 to-blue-50'
  }
]

const facilities2 = [
  {
    title: 'Infrastructure',
    description: 'CTKIS is being developed into an educational masterpiece. The classrooms are well-ventilated and spacious.',
    image: '/infrastructure/download (8).jpeg',
    color: 'from-blue-100 to-blue-50'
  },
  {
    title: 'Smart Classroom',
    description: 'Moving with the evolving world around us, we are committed to leveraging technology. Our smart classrooms are equipped with digital tools and resources to enhance teaching and prepare our students for the future.',
    image: '/school/download (7).jpeg',
    color: 'from-blue-100 to-blue-50'
  },
  {
    title: 'Science Laboratory',
    description: 'At CTKIS, we provide a science laboratory to support comprehensive and practical learning experiences.',
    image: '/infrastructure/download.jpeg',
    color: 'from-blue-100 to-blue-50'
  },
  {
    title: 'Computer Lab',
    description: 'CTKIS lab is accessible to students and staff, offering the latest software and hardware to facilitate a wide range of educational and creative activities.',
    image: '/faculty/download (5).jpeg',
    color: 'from-blue-100 to-blue-50'
  }
]

const FacilitiesSection = () => {
  const [hoveredFacility, setHoveredFacility] = useState<number | null>(null)
  const [selectedFacility, setSelectedFacility] = useState<number | null>(null)

  return (
    <section className="relative min-h-screen py-16  overflow-hidden">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0">
          <div className="absolute w-full h-full">
            {[...Array(30)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute bg-[#1572b4] to-transparent"
                style={{
                  width: Math.random() * 100 + 50 + 'px',
                  height: '1px',
                  left: Math.random() * 100 + '%',
                  top: Math.random() * 100 + '%',
                  transform: `rotate(${Math.random() * 360}deg)`,
                }}
                animate={{
                  opacity: [0.1, 0.5, 0.1],
                  scale: [1, 1.5, 1],
                }}
                transition={{
                  duration: Math.random() * 5 + 3,
                  repeat: Infinity,
                  ease: [0.4, 0, 0.6, 1],
                  delay: Math.random() * 2,
                }}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
          className="text-center mb-24"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
            className="inline-block mb-4"
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1572b4] to-[#134d79] text-lg font-medium">
              World-Class Facilities
            </span>
          </motion.div>
          <h2 className="text-5xl md:text-7xl font-bold mb-6 text-[#1572b4]">
            What We Offer
          </h2>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
          {facilities.map((facility, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1], delay: index * 0.1 }}
              onHoverStart={() => setHoveredFacility(index)}
              onHoverEnd={() => setHoveredFacility(null)}
              className="group relative"
            >
              <motion.div
                className={`relative p-8 rounded-2xl bg-white shadow-xl border border-[#4aabe6] overflow-hidden ${
                  hoveredFacility === index ? 'z-20' : 'z-10'
                }`}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${facility.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 rounded-xl bg-blue-50 flex items-center justify-center text-[#1572b4] group-hover:text-[#2390d4] transition-colors duration-500">
                      {facility.icon}
                    </div>
                    <span className="text-2xl font-bold text-[#1572b4] transition-colors duration-500">
                      {facility.stats}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-[#125c92] mb-3 transition-colors duration-500">{facility.title}</h3>
                  <p className="text-gray-800 text-sm leading-relaxed transition-opacity duration-500">
                    {facility.description}
                  </p>
                </div>

                {/* Hover Effect */}
                <motion.div
                  className="absolute -inset-0.5 bg-gradient-to-r from-blue-200/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl -z-10"
                  animate={{
                    scale: hoveredFacility === index ? [1, 1.02, 1] : 1,
                  }}
                  transition={{ duration: 2, repeat: Infinity, ease: [0.4, 0, 0.2, 1] }}
                />
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Facilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {facilities2.map((facility, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1], delay: index * 0.1 }}
              onClick={() => setSelectedFacility(selectedFacility === index ? null : index)}
              className="group cursor-pointer"
            >
              <motion.div
                className="relative h-[300px] rounded-2xl overflow-hidden bg-white shadow-xl"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                layoutId={`facility-container-${index}`}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${facility.color} mix-blend-multiply opacity-50 transition-opacity duration-500`} />
                <Image
                  src={facility.image}
                  alt={facility.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent transition-opacity duration-500" />
                
                <div className="absolute inset-5 p-8 flex flex-col justify-end">
                  <motion.div
                    initial={false}
                    animate={{ y: selectedFacility === index ? 0 : 40 }}
                    transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                  >
                    <h3 className="text-2xl font-bold text-[#1572b4] mb-2 transition-colors duration-500">
                      {facility.title}
                    </h3>
                    <p className="text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-all duration-500">
                      {facility.description}
                    </p>
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FacilitiesSection 