'use client'
import React from 'react'
import Image from 'next/image'

const HeadmistressMessage = () => {
  return (
    <div className="w-full py-16 px-4">
      {/* Hero Section */}
      <div className="relative h-[50vh] w-full mb-16 overflow-hidden rounded-2xl">
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
            Messages
          </h1>
          <p className="text-xl md:text-2xl max-w-2xl">
            From Our Leadership
          </p>
        </div>
      </div>

      {/* Messages Section */}
      <div className="max-w-6xl mx-auto">
        {/* Correspondent's Message */}
        <div className="mb-16">
          <div className="bg-[#e3effb] p-12 rounded-2xl shadow-[#c0e0f7] border-2 border-[#2390d4]">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="relative h-[400px] rounded-xl overflow-hidden">
                <Image
                  src="/faculty/correspondent.jpeg"
                  alt="Correspondent"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="space-y-6">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-full bg-[#154265] flex items-center justify-center text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                    </svg>
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-[#154265]">Correspondent's Message</h2>
                    <p className="text-gray-600">Christ the King E.M. High School</p>
                  </div>
                </div>
                <div className="relative">
                  <div className="absolute -top-4 -left-4 text-6xl text-[#154265] opacity-20">"</div>
                  <p className="text-gray-600 leading-relaxed text-lg pl-8">
                    Christ the King E.M. High School, Christurajapuram, Vijayawada, is celebrating its Silver Jubilee. It is befitting to thank and praise the almighty God for his loving protection and providence all through the past twenty five years.
                  </p>
                  <div className="absolute -bottom-4 -right-4 text-6xl text-[#154265] opacity-20">"</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Principal's Message */}
        <div>
          <div className="bg-[#e3effb] p-12 rounded-2xl shadow-[#c0e0f7] border-2 border-[#2390d4]">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6 order-2 md:order-1">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-full bg-[#154265] flex items-center justify-center text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                    </svg>
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-[#154265]">Principal's Message</h2>
                    <p className="text-gray-600">Christ the King E.M. High School</p>
                  </div>
                </div>
                <div className="relative">
                  <div className="absolute -top-4 -left-4 text-6xl text-[#154265] opacity-20">"</div>
                  <p className="text-gray-600 leading-relaxed text-lg pl-8">
                    Christ the King E.M. High School, Christurajapuram, Vijayawada, is celebrating its Silver Jubilee. It is befitting to thank and praise the almighty God for his loving protection and providence all through the past twenty five years.
                  </p>
                  <div className="absolute -bottom-4 -right-4 text-6xl text-[#154265] opacity-20">"</div>
                </div>
              </div>
              <div className="relative h-[400px] rounded-xl overflow-hidden order-1 md:order-2">
                <Image
                  src="/faculty/principal.jpeg"
                  alt="Principal"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Silver Jubilee Celebration */}
        <div className="mt-16 text-center">
          <div className="inline-block bg-[#e3effb] p-8 rounded-xl shadow-[#c0e0f7] border-2 border-[#2390d4]">
            <h2 className="text-3xl font-bold text-[#154265] mb-4">Silver Jubilee Celebration</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Join us as we celebrate 25 years of excellence in education, faith, and service to the community.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeadmistressMessage 