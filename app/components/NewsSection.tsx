'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'

const news = [
  {
    title: 'School Wins National Science Competition',
    date: 'March 15, 2024',
    category: 'Academic Achievement',
    description: 'Our students showcased exceptional talent and innovation at the National Science Competition, bringing home the first prize for their groundbreaking project on renewable energy.',
    image: 'https://img.freepik.com/free-photo/students-knowing-right-answer_329181-14271.jpg?t=st=1745236892~exp=1745240492~hmac=d9e0d018233721a2ce7ce83c67d7593d81026fe1c181445417e3d6820f7d8002&w=1380',
    author: 'Academic Department',
    color: 'from-blue-100 to-blue-50'
  },
  {
    title: 'New Sports Complex Inauguration',
    date: 'March 10, 2024',
    category: 'Infrastructure',
    description: 'We are proud to announce the opening of our state-of-the-art sports complex, featuring modern facilities for multiple sports and recreational activities.',
    image: 'https://img.freepik.com/free-photo/full-shot-kids-holding-balls-gym_23-2149351798.jpg?t=st=1745236993~exp=1745240593~hmac=771282cdf30ffd22934dc94638ae96a961acad2b6d45a562de69d7d753b126ac&w=1380',
    author: 'Sports Department',
    color: 'from-blue-100 to-blue-50'
  },
  {
    title: 'Cultural Festival 2024',
    date: 'March 5, 2024',
    category: 'Events',
    description: 'The annual cultural festival brought together students from diverse backgrounds, celebrating our rich cultural heritage through performances, exhibitions, and workshops.',
    image: 'https://img.freepik.com/premium-photo/lord-ganesha-indian-ganesh-festival_75648-304.jpg?w=1380',
    author: 'Cultural Committee',
    color: 'from-blue-100 to-blue-50'
  }
]

const NewsSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section className="relative min-h-screen py-16 overflow-hidden">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 z--10">
        <div className="absolute inset-0 opacity-80">
          <div className="absolute w-full h-full">
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute bg-blue-800 rounded-full"
                style={{
                  width: Math.random() * 4 + 2 + 'px',
                  height: Math.random() * 4 + 2 + 'px',
                  left: Math.random() * 100 + '%',
                  top: Math.random() * 100 + '%',
                }}
                animate={{
                  y: [0, -30, 0],
                  opacity: [0.5, 1, 0.5],
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
        </div>
      </div>

      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
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
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-[#2390d4] to-[#125c92] text-lg font-medium">
              Stay Updated
            </span>
          </motion.div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-[#1572b4]">
            Latest News & Stories
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#89c7f0] to-[#2390d4] mx-auto rounded-full" />
        </motion.div>

        <div className="relative">
          <div className="grid grid-cols-1 gap-16">
            {news.map((item, index) => (
              <motion.article
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1], delay: index * 0.2 }}
                onHoverStart={() => setHoveredIndex(index)}
                onHoverEnd={() => setHoveredIndex(null)}
                className="relative group"
              >
                <div className="flex flex-col md:flex-row items-center gap-8">
                  {/* Image Container */}
                  <motion.div 
                    className="relative w-full md:w-2/3 h-[400px] rounded-3xl overflow-hidden bg-white shadow-xl"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                  >
                    <div className={`absolute inset-0 bg-gradient-to-r ${item.color} mix-blend-multiply opacity-50 transition-opacity duration-500`} />
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    {/* Floating Elements */}
                    <AnimatePresence>
                      {hoveredIndex === index && (
                        <>
                          <motion.div
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0 }}
                            transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                            className="absolute top-4 left-4 bg-white/80 backdrop-blur-md rounded-full px-4 py-2 text-blue-900 text-sm"
                          >
                            {item.category}
                          </motion.div>
                          <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 20 }}
                            transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                            className="absolute bottom-4 left-4 right-4 bg-white/80 backdrop-blur-md rounded-xl p-4"
                          >
                            <div className="flex items-center justify-between text-blue-900">
                              <span>{item.author}</span>
                              <span>{item.date}</span>
                            </div>
                          </motion.div>
                        </>
                      )}
                    </AnimatePresence>
                  </motion.div>

                  {/* Content Container */}
                  <div className="w-full md:w-1/3 relative">
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1], delay: 0.2 }}
                      className="relative z-10"
                    >
                      <h3 className="text-3xl font-bold mb-4 text-[#1572b4] group-hover:text-transparent group-hover:bg-clip-text transition-all duration-500">
                        {item.title}
                      </h3>
                      <p className="text-blue-800 leading-relaxed mb-6 transition-opacity duration-500">
                        {item.description}
                      </p>
                      <motion.button
                        whileHover={{ x: 10 }}
                        transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                        className="inline-flex items-center text-blue-600"
                      >
                        <span className="mr-2">Read More</span>
                        <motion.span
                          animate={{ x: [0, 5, 0] }}
                          transition={{ duration: 1.5, repeat: Infinity, ease: [0.4, 0, 0.2, 1] }}
                        >
                          →
                        </motion.span>
                      </motion.button>
                    </motion.div>
                  </div>
                </div>

                {/* Decorative Line */}
                {index !== news.length - 1 && (
                  <div className="absolute -bottom-8 left-0 right-0">
                    <div className="h-px bg-gradient-to-r from-transparent via-blue-300 to-transparent transition-opacity duration-500" />
                  </div>
                )}
              </motion.article>
            ))}
          </div>
        </div>

        {/* Newsletter Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
          className="text-center mt-24"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-800 text-white font-medium rounded-full group relative overflow-hidden"
          >
            <span className="relative z-10">View All Stories</span>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-blue-800 to-blue-600"
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

export default NewsSection 