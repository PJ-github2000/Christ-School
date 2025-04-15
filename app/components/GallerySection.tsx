'use client'
import React, { useState } from 'react'
import Image from 'next/image'

const GallerySection = () => {
  const [activeCategory, setActiveCategory] = useState('all')
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  const categories = [
    { id: 'all', name: 'All Photos' },
    { id: 'academic', name: 'Academic' },
    { id: 'sports', name: 'Sports' },
    { id: 'events', name: 'Events' },
    { id: 'facilities', name: 'Facilities' }
  ]

  const images = [
    {
      id: 1,
      category: 'academic',
      src: '/school/download (6).jpeg',
      title: 'Classroom Learning',
      description: 'Students engaged in interactive learning'
    },
    {
      id: 2,
      category: 'academic',
      src: '/school/download (7).jpeg',
      title: 'Science Lab',
      description: 'Hands-on experiments in our modern laboratory'
    },
    {
      id: 3,
      category: 'sports',
      src: '/games/games1.jpeg',
      title: 'Sports Day',
      description: 'Annual sports competition'
    },
    {
      id: 4,
      category: 'sports',
      src: '/games/games2.jpeg',
      title: 'Basketball Team',
      description: 'School basketball team in action'
    },
    {
      id: 5,
      category: 'events',
      src: '/games/games3.jpeg',
      title: 'Annual Day',
      description: 'Cultural performances and celebrations'
    },
    {
      id: 6,
      category: 'events',
      src: '/games/games4.jpeg',
      title: 'Graduation',
      description: 'Graduation ceremony'
    },
    {
      id: 7,
      category: 'facilities',
      src: '/infrastructure/download.jpeg',
      title: 'School Building',
      description: 'Modern infrastructure'
    },
    {
      id: 8,
      category: 'facilities',
      src: '/infrastructure/download (1).jpeg',
      title: 'Library',
      description: 'Well-stocked library'
    },
    {
      id: 9,
      category: 'academic',
      src: '/school/download (8).jpeg',
      title: 'Computer Lab',
      description: 'Digital learning facilities'
    }
  ]

  const filteredImages = activeCategory === 'all' 
    ? images 
    : images.filter(image => image.category === activeCategory)

  return (
    <div className="w-full min-h-screen py-16 px-4">
      {/* Hero Section */}
      <div className="relative h-[60vh] w-full mb-16 overflow-hidden rounded-2xl">
        <Image
          src="/danceActivities/download (1).jpeg"
          alt="Christ the King School"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 max-w-4xl">
          School Gallery
          </h1>
          <p className="text-xl md:text-2xl max-w-2xl">
          Capturing Moments of Excellence
          </p>
        </div>
      </div>

      {/* Gallery Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-2 rounded-full font-semibold transition-colors duration-300 ${
                activeCategory === category.id
                  ? 'bg-[#154265] text-white'
                  : 'bg-white text-[#154265] hover:bg-gray-100'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredImages.map(image => (
            <div
              key={image.id}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer"
              onClick={() => setSelectedImage(image.src)}
            >
              <div className="relative h-64">
                <Image
                  src={image.src}
                  alt={image.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="text-lg font-bold mb-1">{image.title}</h3>
                <p className="text-sm">{image.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl w-full h-[80vh]">
            <Image
              src={selectedImage}
              alt="Selected Image"
              fill
              className="object-contain"
            />
            <button
              className="absolute top-4 right-4 text-white hover:text-gray-300"
              onClick={() => setSelectedImage(null)}
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default GallerySection 