'use client'
import React, { useState } from 'react'
import Image from "next/image"
import Logo from "../../public/download.png"
import Link from 'next/link'

const PrimaryNavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="w-full">
      {/* Top Bar - Desktop Only */}
      <div className="hidden lg:block bg-[#2390d4] py-2 px-4">
        <div className="container mx-auto">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link href="/">
                <img src={Logo.src} alt="Christ The King International School" className="h-20 w-auto" />
              </Link>
            </div>

            {/* Contact and Portal Links */}
            <div className="flex items-center gap-12">
              {/* Contact Info */}
              <div className="flex items-center gap-6">
                <div className="flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-[#0e2a43]">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
                  <div className="flex flex">
                    {/* <span className="text-sm text-gray-500">Email</span> */}
                    <a href="mailto:info@christthekinginternationalschool.org" className="text-[#0e2a43] hover:text-[#c0e0f7] text-sm">
                      info@christthekinginternationalschool.org
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-[#0e2a43]">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                  </svg>
                  <div className="flex">
                    {/* <span className="text-sm text-gray-500">Call</span> */}
                    <a href="tel:0303940017" className="text-[#0e2a43] hover:text-[#c0e0f7] text-sm">
                      Call Us: 0303940017
                    </a>
                  </div>
                </div>
              </div>

              {/* Portal Buttons and App Store Links */}
              <div className="flex items-center gap-4">
                <div className="flex gap-2">
                  <Link href="/admission" className="bg-[#154265] text-white px-4 py-2 rounded text-sm hover:bg-[#134d79] transition-colors">
                    Admission Portal
                  </Link>
                  <Link href="/alumni" className="bg-[#154265] text-white px-4 py-2 rounded text-sm hover:bg-[#134d79] transition-colors">
                    Alumni Portal
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <nav className="bg-[#4aabe6]">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            {/* Mobile Menu Button and Logo */}
            <div className="flex items-center justify-between w-full lg:w-auto py-2">
              <button
                className="lg:hidden p-2 text-white"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
              {/* Mobile Logo */}
              <div className="lg:hidden">
                <Link href="/">
                  <img src={Logo.src} alt="Christ The King International School" className="h-12 w-auto" />
                </Link>
              </div>
              {/* Spacer for mobile layout */}
              <div className="lg:hidden w-6"></div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center">
              <div className="flex space-x-1">
                <Link href="/" className="px-4 py-4 text-white hover:bg-[#125c92] transition-colors">HOME</Link>
                <div className="relative group">
                  <button className="px-4 py-4 text-white hover:bg-[#125c92] transition-colors flex items-center gap-1">
                    ABOUT CTKIS
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  <div className="absolute hidden group-hover:block w-48 bg-[#e3effb] shadow-lg py-2 z-50">
                    <Link href="/about" className="block px-4 py-2 text-gray-800 hover:bg-[#c0e0f7]">About Us</Link>
                    <Link href="/messages" className="block px-4 py-2 text-gray-800 hover:bg-[#c0e0f7]">Headmistress' Message</Link>
                    <Link href="/history" className="block px-4 py-2 text-gray-800 hover:bg-[#c0e0f7]">Our School History</Link>
                    <Link href="/staff" className="block px-4 py-2 text-gray-800 hover:bg-[#c0e0f7]">Staff</Link>
                  </div>
                </div>
                <div className="relative group">
                  <button className="px-4 py-4 text-white hover:bg-[#125c92] transition-colors flex items-center gap-1">
                    INFOHUB
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  <div className="absolute hidden group-hover:block w-48 bg-[#e3effb] shadow-lg py-2 z-50">
                    <Link href="/academic" className="block px-4 py-2 text-gray-800 hover:bg-[#c0e0f7]">Academic Activities</Link>
                    <Link href="/events" className="block px-4 py-2 text-gray-800 hover:bg-[#c0e0f7]">Events</Link>
                    <Link href="/gallery" className="block px-4 py-2 text-gray-800 hover:bg-[#c0e0f7]">Gallery</Link>
                  </div>
                </div>
                <Link href="/portal" className="px-4 py-4 text-white hover:bg-[#125c92] transition-colors">STUDENT PORTAL</Link>
                <Link href="/calendar" className="px-4 py-4 text-white hover:bg-[#125c92] transition-colors">ACADEMIC CALENDAR</Link>
                <Link href="/admission" className="px-4 py-4 text-white hover:bg-[#125c92] transition-colors">ADMISSION</Link>
                <Link href="/contact" className="px-4 py-4 text-white hover:bg-[#125c92] transition-colors">CONTACT US</Link>
              </div>
            </div>
        </div>

          {/* Mobile Navigation */}
          <div className={`lg:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
            <div className="flex flex-col">
              <Link href="/" className="px-4 py-3 text-white hover:bg-[#125c92] transition-colors">HOME</Link>
              <div className="flex flex-col">
                <Link href="/about" className="px-4 py-3 text-white hover:bg-[#125c92] transition-colors">ABOUT CTKIS</Link>
                <Link href="/about" className="px-8 py-2 text-white hover:bg-[#125c92] transition-colors text-sm">About Us</Link>
                <Link href="/messages" className="px-8 py-2 text-white hover:bg-[#125c92] transition-colors text-sm">Headmistress' Message</Link>
                <Link href="/history" className="px-8 py-2 text-white hover:bg-[#125c92] transition-colors text-sm">Our School History</Link>
                <Link href="/staff" className="px-8 py-2 text-white hover:bg-[#125c92] transition-colors text-sm">Staff</Link>
              </div>
              <div className="flex flex-col">
                <Link href="/info" className="px-4 py-3 text-white hover:bg-[#125c92] transition-colors">INFOHUB</Link>
                <Link href="/news" className="px-8 py-2 text-white hover:bg-[#125c92] transition-colors text-sm">News</Link>
                <Link href="/events" className="px-8 py-2 text-white hover:bg-[#125c92] transition-colors text-sm">Events</Link>
                <Link href="/gallery" className="px-8 py-2 text-white hover:bg-[#125c92] transition-colors text-sm">Gallery</Link>
              </div>
              <Link href="/portal" className="px-4 py-3 text-white hover:bg-[#125c92] transition-colors">STUDENT PORTAL</Link>
              <Link href="/calendar" className="px-4 py-3 text-white hover:bg-[#125c92] transition-colors">ACADEMIC CALENDAR</Link>
              <Link href="/admission" className="px-4 py-3 text-white hover:bg-[#125c92] transition-colors">ADMISSION</Link>
              <Link href="/contact" className="px-4 py-3 text-white hover:bg-[#125c92] transition-colors">CONTACT US</Link>
            </div>
          </div>
    </div>
      </nav>
    </header>
  )
}

export default PrimaryNavBar
