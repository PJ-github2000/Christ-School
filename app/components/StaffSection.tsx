'use client'
import React, { useState } from 'react'
import Image from 'next/image'

interface StaffMember {
  name: string
  position: string
  image: string
  expertise: string
  experience: string
}

interface StaffCategory {
  title: string
  description: string
  staff: StaffMember[]
}

const StaffSection = () => {
  const [activeCategory, setActiveCategory] = useState(0)

  const staffCategories: StaffCategory[] = [
    {
      title: 'Primary Teachers',
      description: 'Our experienced primary teachers are dedicated to laying a strong foundation for our young learners.',
      staff: [
        {
          name: 'Mrs. Sarah Johnson',
          position: 'Head of Primary',
          image: '/faculty/download (4).jpeg',
          expertise: 'Mathematics, Science',
          experience: '15+ years'
        },
        {
          name: 'Mr. David Wilson',
          position: 'Senior Teacher',
          image: '/faculty/download (5).jpeg',
          expertise: 'English, Social Studies',
          experience: '12+ years'
        },
        {
          name: 'Ms. Emily Brown',
          position: 'Primary Teacher',
          image: '/faculty/download (6).jpeg',
          expertise: 'Languages, Arts',
          experience: '8+ years'
        }
      ]
    },
    {
      title: 'Junior Teachers',
      description: 'Our junior teachers bring energy and innovation to the classroom, making learning engaging and fun.',
      staff: [
        {
          name: 'Mr. Michael Chen',
          position: 'Junior Coordinator',
          image: '/faculty/download (7).jpeg',
          expertise: 'Mathematics, Physics',
          experience: '10+ years'
        },
        {
          name: 'Mrs. Lisa Anderson',
          position: 'Junior Teacher',
          image: '/faculty/download (8).jpeg',
          expertise: 'English, History',
          experience: '7+ years'
        },
        {
          name: 'Mr. Robert Taylor',
          position: 'Junior Teacher',
          image: '/faculty/download (9).jpeg',
          expertise: 'Science, Geography',
          experience: '6+ years'
        }
      ]
    },
    {
      title: 'Non-Teaching Staff',
      description: 'Our dedicated non-teaching staff ensures the smooth operation of our school.',
      staff: [
        {
          name: 'Mr. James Wilson',
          position: 'Administrative Head',
          image: '/faculty/download (10).jpeg',
          expertise: 'School Administration',
          experience: '20+ years'
        },
        {
          name: 'Mrs. Maria Garcia',
          position: 'Librarian',
          image: '/faculty/download (11).jpeg',
          expertise: 'Library Management',
          experience: '15+ years'
        },
        {
          name: 'Mr. Thomas Lee',
          position: 'IT Coordinator',
          image: '/faculty/download (12).jpeg',
          expertise: 'Technology Support',
          experience: '8+ years'
        }
      ]
    }
  ]

  return (
    <div className="w-full min-h-screen py-16 px-4">
      {/* Hero Section */}
      <div className="relative h-[60vh] w-full mb-16 overflow-hidden rounded-2xl">
        <Image
          src="/faculty/download (5).jpeg"
          alt="Christ the King School"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-4">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 sm:mb-6 md:mb-8 max-w-4xl leading-tight">
            Meet Our Dedicated Team
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-white/90 max-w-2xl mb-6 sm:mb-8 md:mb-12 px-4">
            Passionate educators and staff members shaping the future
          </p>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 w-full sm:w-auto px-4">
            <button className="w-full sm:w-auto bg-white text-[#154265] px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105">
              View All Staff
            </button>
            <button className="w-full sm:w-auto border-2 border-white text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold hover:bg-white hover:text-[#154265] transition-all duration-300 transform hover:scale-105">
              Join Our Team
            </button>
          </div>
        </div>
      </div>

      {/* Category Tabs */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12 md:py-16">
        <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-8 sm:mb-12 md:mb-16">
          {staffCategories.map((category, index) => (
            <button
              key={index}
              onClick={() => setActiveCategory(index)}
              className={`px-4 sm:px-6 py-2 sm:py-3 rounded-full font-semibold text-sm sm:text-base transition-all duration-300 transform hover:scale-105 ${
                activeCategory === index
                  ? 'bg-[#154265] text-white'
                  : 'bg-white text-[#154265] hover:bg-gray-100'
              }`}
            >
              {category.title}
            </button>
          ))}
        </div>

        {/* Staff Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {staffCategories[activeCategory].staff.map((member, index) => (
            <div
              key={index}
              className="bg-white rounded-xl sm:rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="relative h-64 sm:h-72 md:h-80">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 text-white">
                  <h3 className="text-xl sm:text-2xl font-bold mb-1 sm:mb-2">{member.name}</h3>
                  <p className="text-base sm:text-lg mb-1 sm:mb-2">{member.position}</p>
                  <div className="flex items-center gap-2 text-xs sm:text-sm">
                    <span className="bg-white/20 px-2 sm:px-3 py-1 rounded-full">
                      {member.experience}
                    </span>
                  </div>
                </div>
              </div>
              <div className="p-4 sm:p-6">
                <div className="flex items-center gap-2 text-[#154265] mb-3 sm:mb-4">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="font-semibold text-sm sm:text-base">{member.expertise}</span>
                </div>
                <button className="w-full bg-[#154265] text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-colors duration-300 text-sm sm:text-base">
                  View Profile
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Join Our Team Section */}
        <div className="mt-12 sm:mt-16 md:mt-24 bg-gradient-to-r from-[#154265] to-[#2390d4] rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="p-6 sm:p-8 md:p-12 text-white">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">Join Our Team</h2>
              <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 leading-relaxed">
                We're always looking for passionate educators and staff members to join our team. If you're interested in being part of our journey, we'd love to hear from you.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="w-full sm:w-auto bg-white text-[#154265] px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105 text-sm sm:text-base">
                  Apply Now
                </button>
                <button className="w-full sm:w-auto border-2 border-white text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold hover:bg-white hover:text-[#154265] transition-all duration-300 transform hover:scale-105 text-sm sm:text-base">
                  Learn More
                </button>
              </div>
            </div>
            <div className="relative h-64 sm:h-80 md:h-96">
              <Image
                src="/faculty/download (4).jpeg"
                alt="Join Our Team"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#154265]/80 to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default StaffSection 