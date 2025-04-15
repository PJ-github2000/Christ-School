'use client'
import React from 'react'
import Image from 'next/image'

const clubs = [
  {
    title: 'WOODLE FUNCLUB',
    description: 'The Club aims at teaching learners the basic concepts of programming. The lessons are guided by short videos, in each of which a programming concept is presented and illustrated in the context of examples.',
    image: '/faculty/download (4).jpeg',
    icon: '💻'
  },
  {
    title: 'SPORTS CLUB',
    description: 'CTK Sports Club provides a diverse range of learning opportunities, from committed amateurs and students to professional pianists through inspiration and instruction.',
    image: '/games/games1.jpeg',
    icon: '🏃'
  },
  {
    title: 'INTERPRETATIVE DANCE',
    description: 'Interpretative dance at Christ the King School aims to show human emotions, conditions, situations or fantasies by translating them into movement and dramatic expression.',
    image: '/danceActivities/download (1).jpeg',
    icon: '💃'
  },
  {
    title: 'TALKING/MOCK CLUB',
    description: 'Teaching kids model arts through an extracurricular group like nationwide is a fantastic idea. Students will be able to study public speaking, debate, facts, and self-defense skills.',
    image: '/danceActivities/download (2).jpeg',
    icon: '🎭'
  }
]

const ClubsSection = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-[#f1f8fe] to-[#f8f9fa]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#154265]">OUR VARIOUS CLUBS</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We provide an amazing selection of clubs because our students are inquisitive and energetic, and we like stoking their passion. 
            Our Club aim to encourage your child's imagination, to teach them about cooperation and leadership while encouraging them to attempt new things.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {clubs.map((club, index) => (
            <div 
              key={index}
              className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="flex flex-col md:flex-row h-full">
                {/* Image Section */}
                <div className="md:w-2/5 relative h-48 md:h-auto">
                  <div className="absolute inset-0 bg-gradient-to-r from-[#154265]/40 to-[#2390d4]/60 z-10" />
                  <Image
                    src={club.image}
                    alt={club.title}
                    width={400}
                    height={300}
                    className="w-full h-full object-cover "
                  />
                  <span className="absolute top-4 left-4 text-4xl z-20">{club.icon}</span>
                </div>

                {/* Content Section */}
                <div className="md:w-3/5 p-6 flex flex-col justify-center">
                  <h3 className="text-xl font-bold text-[#154265] mb-3 group-hover:text-[#2390d4] transition-colors">
                    {club.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {club.description}
                  </p>
                  <button className="mt-4 text-[#2390d4] font-medium text-sm flex items-center group-hover:text-[#154265] transition-colors">
                    Learn More 
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ClubsSection 