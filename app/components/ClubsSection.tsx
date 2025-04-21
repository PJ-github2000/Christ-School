'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'

const clubs = [
  {
    title: 'WOODLE FUNCLUB',
    description: 'The Club aims at teaching learners the basic concepts of programming. The lessons are guided by short videos, in each of which a programming concept is presented and illustrated in the context of examples.',
    image: '/faculty/download (4).jpeg',
    icon: '💻',
    stats: '50+ Members',
    color: 'from-blue-100 to-blue-50'
  },
  {
    title: 'SPORTS CLUB',
    description: 'CTK Sports Club provides a diverse range of learning opportunities, from committed amateurs and students to professional pianists through inspiration and instruction.',
    image: '/games/games1.jpeg',
    icon: '🏃',
    stats: '100+ Athletes',
    color: 'from-blue-100 to-blue-50'
  },
  {
    title: 'INTERPRETATIVE DANCE',
    description: 'Interpretative dance at Christ the King School aims to show human emotions, conditions, situations or fantasies by translating them into movement and dramatic expression.',
    image: '/danceActivities/download (1).jpeg',
    icon: '💃',
    stats: '30+ Dancers',
    color: 'from-blue-100 to-blue-50'
  },
  {
    title: 'TALKING/MOCK CLUB',
    description: 'Teaching kids model arts through an extracurricular group like nationwide is a fantastic idea. Students will be able to study public speaking, debate, facts, and self-defense skills.',
    image: '/danceActivities/download (2).jpeg',
    icon: '🎭',
    stats: '40+ Members',
    color: 'from-blue-100 to-blue-50'
  }
]

const ClubsSection = () => {
  const [activeClub, setActiveClub] = useState<number | null>(null)

  return (
    <section className="relative min-h-screen py-16 overflow-hidden">
      {/* Animated Background */}
      {/* <div className="absolute inset-0">
        <div className="absolute z-10 inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.2),rgba(255,255,255,0.9))]" />
        <div className="absolute inset-0">
          {[...Array(50)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute bg-blue-00/50 rounded-full"
              style={{
                width: Math.random() * 3 + 1 + 'px',
                height: Math.random() * 3 + 1 + 'px',
                left: Math.random() * 100 + '%',
                top: Math.random() * 100 + '%',
              }}
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.3, 0.8, 0.3],
              }}
              transition={{
                duration: Math.random() * 3 + 2,
                repeat: Infinity,
                ease: [0.4, 0, 0.6, 1],
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>
      </div> */}

      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
            className="inline-block"
          >
            {/* <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-800 text-lg font-medium px-6 py-2 rounded-full border border-blue-200">
              Join Our Community
            </span> */}
          </motion.div>
            <h2 className="text-5xl md:text-7xl font-bold mb-4 text-[#1572b4]">
            Explore Our Clubs
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative">
          {clubs.map((club, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1], delay: index * 0.1 }}
              onHoverStart={() => setActiveClub(index)}
              onHoverEnd={() => setActiveClub(null)}
              className="group relative"
            >
              <motion.div
                className={`relative h-[400px] rounded-2xl overflow-hidden bg-white shadow-xl ${
                  activeClub === index ? 'z-20' : 'z-10'
                }`}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                layoutId={`club-container-${index}`}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${club.color} mix-blend-multiply opacity-50 transition-opacity duration-500`} />
                <Image
                  src={club.image}
                  alt={club.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                
                {/* Content Overlay */}
                <div className="absolute inset-0 flex flex-col justify-end p-8">
                  <motion.div
                    initial={false}
                    animate={{ y: activeClub === index ? 0 : 60 }}
                    transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                    className="relative z-10"
                  >
                    <div className="flex items-center space-x-4 mb-4">
                      <motion.span
                        className="text-4xl"
                        animate={{ scale: activeClub === index ? 1.2 : 1 }}
                        transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                      >
                        {club.icon}
                      </motion.span>
                      <span className="bg-white/80 backdrop-blur-md px-4 py-1 rounded-full text-blue-900 text-sm transition-opacity duration-500">
                        {club.stats}
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold text-[#1572b4] mb-2 transition-colors duration-500">
                      {club.title}
                    </h3>
                    <p className="text-gray-200 text-sm leading-relaxed mb-4 opacity-0 group-hover:opacity-100 transition-all duration-500">
                      {club.description}
                    </p>
                    <motion.button
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                      className="inline-flex items-center text-sm font-medium"
                    >
                      Join Club
                      <motion.span
                        animate={{ x: [0, 5, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity, ease: [0.4, 0, 0.2, 1] }}
                        className="ml-2"
                      >
                        →
                      </motion.span>
                    </motion.button>
                  </motion.div>
                </div>

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent transition-opacity duration-500" />
              </motion.div>

              {/* Decorative Elements */}
              <motion.div
                className="absolute -inset-0.5 bg-gradient-to-r from-blue-200/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl -z-10"
                animate={{
                  scale: activeClub === index ? [1, 1.02, 1] : 1,
                }}
                transition={{ duration: 2, repeat: Infinity, ease: [0.4, 0, 0.2, 1] }}
              />
            </motion.div>
          ))}
        </div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
          className="text-center mt-20"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
            className="inline-flex items-center px-8 py-4 bg-white/80 backdrop-blur-md text-blue-900 font-medium rounded-full group relative overflow-hidden border border-blue-200"
          >
            <span className="relative z-10">Discover More Clubs</span>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-blue-500/50 to-blue-700/50"
              initial={{ x: '100%' }}
              whileHover={{ x: 0 }}
              transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
            />
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

export default ClubsSection 