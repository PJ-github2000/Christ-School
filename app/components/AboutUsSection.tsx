'use client'
import React from 'react'
import Image from 'next/image'

const AboutUsSection = () => {
  return (
    <div className="w-full py-16 px-4">
      {/* Hero Section */}
      <div className="relative h-[60vh] w-full mb-16 overflow-hidden rounded-2xl">
        <Image
          src="/school/download (7).jpeg"
          alt="Christ the King School"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 max-w-4xl">
            Our Story
          </h1>
          <p className="text-xl md:text-2xl max-w-2xl">
            A Legacy of Excellence Since 1994
          </p>
        </div>
      </div>

      {/* History Section */}
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#154265]">
              A New Star in Education
            </h2>
            <p className="text-gray-600 leading-relaxed">
              In 1994, a new chapter in education began at Christurajapuram. Following the Andhra Bishop's Conference decision to relocate the Christ the King Seminary to Nuzvid, Most Rev. Joseph Thumma, the late Bishop of Vijayawada diocese, envisioned transforming the seminary building into an English medium school for the children of Christurajapuram.
            </p>
            <p className="text-gray-600 leading-relaxed">
              The Sisters of St. Joseph of Cluny, under the leadership of Rev. Fr. Joseph Vempeny as correspondent, were entrusted with the administration of the school. On June 20th, 1994, the school opened its doors with 95 students from L.K.G to Std. 1, marking the beginning of a remarkable educational journey.
            </p>
          </div>
          <div className="relative h-[400px] rounded-xl overflow-hidden">
            <Image
              src="/school/download (6).jpeg"
              alt="School History"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Mission & Vision Section */}
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#154265] mb-12">
            Our Mission & Vision
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[#e3effb] p-8 rounded-xl shadow-[#c0e0f7] border-2 border-[#2390d4] hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="w-16 h-16 mx-auto mb-6 text-[#154265] bg-white rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#154265] mb-4 text-center">Integrated Development</h3>
              <p className="text-gray-600 text-center">
                To bring about an integrated development of the student, developing them physically, intellectually, morally, spiritually, emotionally, and aesthetically.
              </p>
            </div>

            <div className="bg-[#e3effb] p-8 rounded-xl shadow-[#c0e0f7] border-2 border-[#2390d4] hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="w-16 h-16 mx-auto mb-6 text-[#154265] bg-white rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#154265] mb-4 text-center">Spiritual Growth</h3>
              <p className="text-gray-600 text-center">
                To enable students to discover a deeper awareness of God, promoting inter-relatedness and integration among all religions.
              </p>
            </div>

            <div className="bg-[#e3effb] p-8 rounded-xl shadow-[#c0e0f7] border-2 border-[#2390d4] hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="w-16 h-16 mx-auto mb-6 text-[#154265] bg-white rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#154265] mb-4 text-center">Service & Values</h3>
              <p className="text-gray-600 text-center">
                To form responsible citizens who uphold democratic values and are committed to serving society, especially the poor.
              </p>
            </div>
          </div>
        </div>

        {/* School Emblem Section */}
        <div className="bg-[#e3effb] p-12 rounded-2xl shadow-[#c0e0f7] border-2 border-[#2390d4]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-[#154265]">School Emblem & Motto</h2>
              <p className="text-gray-600 leading-relaxed">
                Our emblem, designed by the first principal Sr. Rita, consists of the Sacred Heart, the Crown, and the Cross, symbolizing our commitment to molding young minds and hearts. The motto "Reach out in Love" reflects our dedication to helping students blossom into knowledgeable and virtuous individuals.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-8 h-8 rounded-full bg-[#154265] flex items-center justify-center text-white mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                  </div>
                  <p className="text-gray-600">The Sacred Heart represents divine love and compassion</p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-8 h-8 rounded-full bg-[#154265] flex items-center justify-center text-white mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                  </div>
                  <p className="text-gray-600">The Crown symbolizes excellence and achievement</p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-8 h-8 rounded-full bg-[#154265] flex items-center justify-center text-white mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                  </div>
                  <p className="text-gray-600">The Cross represents faith and spiritual guidance</p>
                </div>
              </div>
            </div>
            <div className="relative h-[400px] rounded-xl overflow-hidden">
              <Image
                src="/school/logoShort.png"
                alt="School Emblem"
                fill
                className="object-contain bg-white p-6"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutUsSection 