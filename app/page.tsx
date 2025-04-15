import React from 'react'
import HeroSection from './components/HeroSection'
import PrimaryNavBar from "./components/PrimaryNavBar"
import FacilitiesSection from './components/FacilitiesSection'
import ClubsSection from './components/ClubsSection'
import NewsSection from './components/NewsSection'

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f1f8fe]">
      {/* <PrimaryNavBar /> */}
      <HeroSection />
      <FacilitiesSection />
      <ClubsSection />
      <NewsSection />
    </main>
  )
}
