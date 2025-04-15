'use client'
import React from 'react'
import Image from 'next/image'

const SchoolHistory = () => {
  const milestones = [
    {
      year: '1994',
      title: 'The Beginning',
      description: 'Christ the King E.M. High School was established in Christurajapuram, Vijayawada, following the Andhra Bishop\'s Conference decision to relocate the Christ the King Seminary to Nuzvid. The school opened its doors with 95 students from L.K.G to Std. 1.',
      image: '/school/download (6).jpeg'
    },
    {
      year: '1995',
      title: 'Official Recognition',
      description: 'The school received official recognition from the Government of Andhra Pradesh, marking a significant milestone in its journey towards providing quality education.',
      image: '/school/download (7).jpeg'
    },
    {
      year: '2000',
      title: 'Expansion and Growth',
      description: 'The school expanded its facilities and curriculum, introducing new programs and activities to enhance the overall development of students.',
      image: '/infrastructure/download.jpeg'
    },
    {
      year: '2010',
      title: 'Academic Excellence',
      description: 'The school achieved remarkable academic results, with students consistently performing well in board examinations and various competitions.',
      image: '/school/download (6).jpeg'
    },
    {
      year: '2019',
      title: 'Silver Jubilee Celebration',
      description: 'The school celebrated 25 years of excellence in education, faith, and service to the community, marking a quarter-century of nurturing young minds.',
      image: '/school/download (7).jpeg'
    }
  ]

  return (
    <div className="w-full py-8 sm:py-16 px-4 sm:px-6">
      {/* Hero Section */}
      <div className="relative h-[40vh] sm:h-[50vh] w-full mb-8 sm:mb-16 overflow-hidden rounded-2xl">
        <Image
          src="/school/download (7).jpeg"
          alt="School History"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-2 sm:mb-4 max-w-4xl">
            Our Journey
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl max-w-2xl">
            A Legacy of Excellence Since 1994
          </p>
        </div>
      </div>

      {/* Timeline Section */}
      <div className="max-w-6xl mx-auto">
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-[#2390d4] hidden md:block" />

          {/* Milestones */}
          {milestones.map((milestone, index) => (
            <div key={index} className="relative mb-8 sm:mb-16">
              {/* Year Badge */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-16 h-16 sm:w-24 sm:h-24 bg-[#154265] rounded-full flex items-center justify-center text-white font-bold text-base sm:text-xl z-10">
                {milestone.year}
              </div>

              {/* Content */}
              <div className={`mt-8 sm:mt-12 md:mt-0 ${index % 2 === 0 ? 'md:ml-8' : 'md:mr-8'}`}>
                <div className={`bg-[#e3effb] p-4 sm:p-8 rounded-2xl shadow-[#c0e0f7] border-2 border-[#2390d4] hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 ${
                  index % 2 === 0 ? 'md:ml-16' : 'md:mr-16'
                }`}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8 items-center">
                    <div className={`space-y-2 sm:space-y-4 ${index % 2 === 0 ? 'order-2' : 'order-1'}`}>
                      <h2 className="text-xl sm:text-2xl font-bold text-[#154265]">{milestone.title}</h2>
                      <p className="text-sm sm:text-base text-gray-600 leading-relaxed">{milestone.description}</p>
                    </div>
                    <div className={`relative h-48 sm:h-64 rounded-xl overflow-hidden ${index % 2 === 0 ? 'order-1' : 'order-2'}`}>
                      <Image
                        src={milestone.image}
                        alt={milestone.title}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Current Status Section */}
        <div className="mt-8 sm:mt-16 bg-[#e3effb] p-6 sm:p-12 rounded-2xl shadow-[#c0e0f7] border-2 border-[#2390d4]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-12 items-center">
            <div className="space-y-4 sm:space-y-6">
              <h2 className="text-2xl sm:text-3xl font-bold text-[#154265]">Today's Christ the King</h2>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                Today, Christ the King E.M. High School stands as a beacon of quality education, continuing its mission to provide holistic development to students. The school remains committed to its founding principles while embracing modern educational practices.
              </p>
              <div className="grid grid-cols-2 gap-2 sm:gap-4">
                <div className="bg-white p-2 sm:p-4 rounded-lg text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-[#154265]">25+</div>
                  <div className="text-xs sm:text-sm text-gray-600">Years of Excellence</div>
                </div>
                <div className="bg-white p-2 sm:p-4 rounded-lg text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-[#154265]">1000+</div>
                  <div className="text-xs sm:text-sm text-gray-600">Students</div>
                </div>
                <div className="bg-white p-2 sm:p-4 rounded-lg text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-[#154265]">50+</div>
                  <div className="text-xs sm:text-sm text-gray-600">Qualified Staff</div>
                </div>
                <div className="bg-white p-2 sm:p-4 rounded-lg text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-[#154265]">100%</div>
                  <div className="text-xs sm:text-sm text-gray-600">Pass Rate</div>
                </div>
              </div>
            </div>
            <div className="relative h-[300px] sm:h-[400px] rounded-xl overflow-hidden">
              <Image
                src="/school/download (6).jpeg"
                alt="Current School"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SchoolHistory 