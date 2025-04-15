'use client'
import React from 'react'
import Image from 'next/image'

const facilities = [
  {
    title: 'Safety First',
    description: 'Because the emergency procedures are well recognized and abide by school safety and health protocols.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    )
  },
  {
    title: 'Certified Teachers',
    description: 'Our educators are highly qualified professionals who use skills and abilities to educate and develop children based on their age, aptitude, and ability.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
      </svg>
    )
  },
  {
    title: 'Creative Lessons',
    description: 'All of the lessons are engaged in our creative way of learning to generate new information. The lessons enable them to make sense of the materials and infuse excitement and purpose into their schooling.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
      </svg>
    )
  },
  {
    title: 'Sports Facilities',
    description: 'The goal of the physical education and sports program is to provide space for practice and develop our learners to be competitive. The sports environment is sports like basketball, table tennis.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
      </svg>
    )
  }
]

const facilities2 = [
  {
    title: 'Infrastructure',
    description: 'CTKIS is being developed into an educational masterpiece. The classrooms are well-ventilated and spacious.',
    image: '/infrastructure/download (8).jpeg'
  },
  {
    title: 'Smart Classroom',
    description: 'Moving with the evolving world around us, we are committed to leveraging technology. Our smart classrooms are equipped with digital tools and resources to enhance teaching and prepare our students for the future.',
    image: '/school/download (7).jpeg'
  },
  {
    title: 'Science Laboratory',
    description: 'At CTKIS, we provide a science laboratory to support comprehensive and practical learning experiences.',
    image: '/infrastructure/download.jpeg'
  },
  {
    title: 'Computer Lab',
    description: 'CTKIS lab is accessible to students and staff, offering the latest software and hardware to facilitate a wide range of educational and creative activities.',
    image: '/faculty/download (5).jpeg'
  }
]

const FacilitiesSection = () => {
  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        {/* What We Offer Section */}
        <div className="mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-[#154265]">What We Offer</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            The school offers a comprehensive, English-based curriculum grounded in modern teaching philosophies. Through our well-structured and extracurricular involvement, we support professional development for staff.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {facilities.map((facility, index) => (
              <div 
                key={index}
                className="group p-6 bg-[#e3effb] rounded-xl shadow-[#89c7f0] shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-[#2390d4]"
              >
                <div className="w-14 h-14 rounded-full bg-[#e3effb] flex items-center justify-center mb-4 text-[#2390d4] group-hover:bg-[#2390d4] group-hover:text-white transition-all duration-300">
                  {facility.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-[#154265]">{facility.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{facility.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Best Facilities Section */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-[#154265]">
            Best Facilities For Your Kids And Students
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            We provide state-of-the-art facilities to ensure the best learning environment for our students.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {facilities2.map((facility, index) => (
              <div 
                key={index}
                className="group relative overflow-hidden rounded-xl bg-white shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="aspect-w-16 aspect-h-9 relative">
                  <Image
                    src={facility.image}
                    alt={facility.title}
                    width={600}
                    height={400}
                    className="object-cover w-full h-full rounded-t-xl transform group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-[#154265] group-hover:text-[#2390d4] transition-colors">
                    {facility.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {facility.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default FacilitiesSection 