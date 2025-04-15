'use client'
import React, { useState } from 'react'
import Image from 'next/image'

interface Event {
  id: number
  title: string
  date: string
  time: string
  location: string
  description: string
  image: string
  category: 'upcoming' | 'past'
  type: 'academic' | 'sports' | 'cultural' | 'special'
}

const EventsSection = () => {
  const [activeTab, setActiveTab] = useState<'upcoming' | 'past'>('upcoming')

  const events: Event[] = [
    {
      id: 1,
      title: 'Annual Sports Day',
      date: 'March 15, 2024',
      time: '9:00 AM - 4:00 PM',
      location: 'School Sports Ground',
      description: 'Join us for our annual sports day featuring various athletic competitions, team sports, and fun activities for all students.',
      image: '/games/games1.jpeg',
      category: 'upcoming',
      type: 'sports'
    },
    {
      id: 2,
      title: 'Science Exhibition',
      date: 'April 5, 2024',
      time: '10:00 AM - 2:00 PM',
      location: 'School Science Lab',
      description: 'Students showcase their innovative science projects and experiments in our annual science exhibition.',
      image: '/school/download (7).jpeg',
      category: 'upcoming',
      type: 'academic'
    },
    {
      id: 3,
      title: 'Cultural Festival',
      date: 'May 20, 2024',
      time: '6:00 PM - 9:00 PM',
      location: 'School Auditorium',
      description: 'A celebration of cultural diversity through music, dance, and art performances by our students.',
      image: '/danceActivities/download (1).jpeg',
      category: 'upcoming',
      type: 'cultural'
    },
    {
      id: 4,
      title: 'Graduation Ceremony',
      date: 'June 10, 2024',
      time: '4:00 PM - 7:00 PM',
      location: 'School Main Hall',
      description: 'Celebrating the achievements of our graduating students with a formal ceremony and awards presentation.',
      image: '/games/games4.jpeg',
      category: 'upcoming',
      type: 'special'
    },
    {
      id: 5,
      title: 'Annual Day Celebration',
      date: 'December 15, 2023',
      time: '5:00 PM - 8:00 PM',
      location: 'School Auditorium',
      description: 'A grand celebration of our school\'s achievements with performances, awards, and cultural programs.',
      image: '/games/games3.jpeg',
      category: 'past',
      type: 'special'
    },
    {
      id: 6,
      title: 'Inter-School Debate',
      date: 'November 20, 2023',
      time: '10:00 AM - 3:00 PM',
      location: 'School Conference Hall',
      description: 'Students participated in an inter-school debate competition on contemporary topics.',
      image: '/school/download (6).jpeg',
      category: 'past',
      type: 'academic'
    }
  ]

  const filteredEvents = events.filter(event => event.category === activeTab)

  return (
    <div className="w-full min-h-screen py-16 px-4">
      {/* Hero Section */}
      <div className="relative h-[60vh] w-full mb-16 overflow-hidden rounded-2xl">
        <Image
          src="/danceActivities/download (3).jpeg"
          alt="Christ the King School"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 max-w-4xl">
          School Events
          </h1>
          <p className="text-xl md:text-2xl max-w-2xl">
          Celebrating Learning and Achievement
          </p>
        </div>
      </div>

      {/* Events Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
        {/* Tabs */}
        <div className="flex justify-center mb-12">
          <div className="bg-white rounded-full p-1 shadow-lg">
            <button
              onClick={() => setActiveTab('upcoming')}
              className={`px-8 py-3 rounded-full font-semibold transition-colors duration-300 ${
                activeTab === 'upcoming'
                  ? 'bg-[#154265] text-white'
                  : 'text-[#154265] hover:bg-gray-100'
              }`}
            >
              Upcoming Events
            </button>
            <button
              onClick={() => setActiveTab('past')}
              className={`px-8 py-3 rounded-full font-semibold transition-colors duration-300 ${
                activeTab === 'past'
                  ? 'bg-[#154265] text-white'
                  : 'text-[#154265] hover:bg-gray-100'
              }`}
            >
              Past Events
            </button>
          </div>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredEvents.map(event => (
            <div
              key={event.id}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative h-48">
                <Image
                  src={event.image}
                  alt={event.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute top-4 right-4">
                  <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                    event.type === 'academic' ? 'bg-blue-100 text-blue-800' :
                    event.type === 'sports' ? 'bg-green-100 text-green-800' :
                    event.type === 'cultural' ? 'bg-purple-100 text-purple-800' :
                    'bg-yellow-100 text-yellow-800'
                  }`}>
                    {event.type.charAt(0).toUpperCase() + event.type.slice(1)}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#154265] mb-2">{event.title}</h3>
                <div className="flex items-center gap-4 text-gray-600 mb-4">
                  <div className="flex items-center">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    {event.date}
                  </div>
                  <div className="flex items-center">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {event.time}
                  </div>
                </div>
                <div className="flex items-center text-gray-600 mb-4">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  {event.location}
                </div>
                <p className="text-gray-600 mb-6">{event.description}</p>
                {event.category === 'upcoming' && (
                  <button className="w-full bg-[#154265] text-white px-6 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-colors duration-300">
                    Register Now
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Newsletter Section */}
        <div className="mt-20 bg-gradient-to-r from-[#154265] to-[#2390d4] rounded-2xl p-8 md:p-12 text-white">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">Stay Updated</h2>
              <p className="text-lg mb-6">
                Subscribe to our newsletter to receive updates about upcoming events and school activities.
              </p>
              <div className="flex gap-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-lg border-2 border-gray-800 text-white text-gray-800 focus:outline-none"
                />
                <button className="bg-white text-[#154265] px-6 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-colors duration-300">
                  Subscribe
                </button>
              </div>
            </div>
            <div className="relative h-64 md:h-80 rounded-xl overflow-hidden">
              <Image
                src="/games/games6.jpeg"
                alt="Newsletter"
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

export default EventsSection 