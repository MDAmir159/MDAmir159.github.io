import React from 'react'
import Footer from '../components/Footer'
import Hero2Image from '../components/Hero2Image'
import Navbar from '../components/Navbar'
import PricingCard from '../components/PricingCard'
import Work from '../components/Work'

function Project() {
  return (
    <div>
      <Navbar />
      <Hero2Image heading="PROJECTS" text="Some of my most recent works" />
      {/* <Work /> */}
      <PricingCard />
      <Footer />
    </div>
  )
}

export default Project