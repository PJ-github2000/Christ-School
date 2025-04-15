'use client'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const news = [
  {
    title: "CTK Shines Again! Our 2024 Valedictorian Wins The Presidential Award",
    date: "7th February 2024",
    image: '/games/games2.jpeg',
    category: 'Achievement',
    excerpt: 'Christ the King School made history when our 2024 Valedictorian, Master Nigel Danso won prestigious honors.',
    link: '/games/games2.jpeg'
  },
  {
    title: "CTK Secures 2nd Place At Senior Bowers Schools 50th Anniversary Quiz Competition",
    date: "14th January 2024",
    image: '/games/games3.jpeg',
    category: 'Competition',
    excerpt: 'Christ the King School secured 2nd position in the inter-school quiz competition.',
    link: '/games/games3.jpeg'
  },
  {
    title: "Giovanni Adjei Has Won The 2025 National Spelling Bee Competition",
    date: "2nd January 2024",
    image: '/games/games4.jpeg',
    category: 'Achievement',
    excerpt: 'Our student adds a vocabulary to English Dictionary after winning the competition.',
    link: '/games/games4.jpeg'
  }
]

const NewsSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#154265]">News & Updates</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Stay updated with the latest news, events, and achievements from our school community.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {news.map((item, index) => (
            <Link 
              href={item.link} 
              key={index}
              className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
            >
              {/* Image Container */}
              <div className="relative h-48 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
                <Image
                  src={item.image}
                  alt={item.title}
                  width={400}
                  height={300}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
                />
                {/* Category Badge */}
                <span className="absolute top-4 left-4 z-20 bg-[#2390d4] text-white text-xs px-3 py-1 rounded-full">
                  {item.category}
                </span>
                {/* Date Badge */}
                <span className="absolute top-4 right-4 z-20 bg-white/90 text-[#154265] text-xs px-3 py-1 rounded-full">
                  {item.date}
                </span>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-lg font-bold text-[#154265] mb-3 line-clamp-2 group-hover:text-[#2390d4] transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-2">
                  {item.excerpt}
                </p>
                <div className="flex items-center text-[#2390d4] text-sm font-medium group-hover:text-[#154265] transition-colors">
                  Read More
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* View All News Button */}
        <div className="text-center mt-12">
          <Link 
            href="/news" 
            className="inline-flex items-center justify-center px-8 py-3 bg-[#154265] text-white rounded-full hover:bg-[#2390d4] transition-colors"
          >
            View All News
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default NewsSection 