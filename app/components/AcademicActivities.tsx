'use client'
import React from 'react'
import Image from 'next/image'

const AcademicActivities = () => {
  const features = [
    {
      title: 'Rigorous Curriculum',
      description: 'Our academic program is designed to meet and exceed the standards set by the National Council for Curriculum and Assessment (NaCCA). The curriculum, based on the NaCCA 2019 guidelines, ensures that our students receive a comprehensive education that balances theoretical knowledge with practical application.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      )
    },
    {
      title: 'Dedicated Faculty',
      description: 'Our team of highly qualified and experienced teachers is dedicated to nurturing each student\'s potential. Understanding the importance of thorough preparation for the BECE, our teachers offer additional extra classes, providing personalized attention and targeted instruction to reinforce learning.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    },
    {
      title: 'Examination Preparation',
      description: 'Recognizing the significance of the BECE in shaping our students\' academic futures, we implement a robust preparatory program that includes mock exams, revision sessions, and access to comprehensive resource materials.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    }
  ]

  const examPrepFeatures = [
    {
      title: 'Mock Exams',
      description: 'Regularly scheduled mock exams simulate the actual BECE environment, helping students become familiar with the exam format and time management.'
    },
    {
      title: 'Revision Sessions',
      description: 'Intensive revision sessions are conducted to review key concepts and address any gaps in knowledge.'
    },
    {
      title: 'Resource Materials',
      description: 'Students have access to a wealth of resource materials, including past exam papers, study guides, and interactive digital content.'
    }
  ]

  return (
    <div className="w-full min-h-screen py-16 px-4">
      {/* Hero Section */}
      <div className="relative h-[60vh] w-full mb-16 overflow-hidden rounded-2xl">
        <Image
          src="/games/games7.jpeg"
          alt="Christ the King School"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 max-w-4xl">
          Academic Excellence
          </h1>
          <p className="text-xl md:text-2xl max-w-2xl">
          Fostering academic excellence and holistic development
          </p>
        </div>
      </div>

      {/* Introduction Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#154265] mb-6">
            Academic Activities at Christ the King High School
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            At Christ the King High School, we are committed to fostering academic excellence and holistic development in our students. As a registered Examination Centre, our students are well-prepared to undertake the Basic Education Certificate Examination (BECE) with confidence and competence.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="text-[#154265] mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-[#154265] mb-4">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Exam Preparation Section */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="p-8 md:p-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-[#154265] mb-6">
                Examination Preparation
              </h2>
              <div className="space-y-6">
                {examPrepFeatures.map((feature, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="text-[#154265] mt-1">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-[#154265] mb-2">{feature.title}</h3>
                      <p className="text-gray-600">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative h-64 md:h-auto">
              <Image
                src="/school/download (7).jpeg"
                alt="Exam Preparation"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#154265]/80 to-transparent" />
            </div>
          </div>
        </div>

        {/* Success Stories Section */}
        <div className="bg-gradient-to-r from-[#154265] to-[#2390d4] rounded-2xl p-8 md:p-12 text-white">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold mb-6">Success Stories</h2>
              <p className="text-lg mb-6">
                The success of our academic program is reflected in the outstanding results our students achieve in the BECE. Year after year, our graduates excel, gaining admission to some of the most prestigious senior high schools in the country.
              </p>
              <button className="bg-white text-[#154265] px-6 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-colors duration-300">
                View Success Stories
              </button>
            </div>
            <div className="relative h-64 md:h-80 rounded-xl overflow-hidden">
              <Image
                src="/games/games6.jpeg"
                alt="Success Stories"
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

export default AcademicActivities 