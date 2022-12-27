import React from 'react'
import Footer from '../components/Footer'
import Hero2Image from '../components/Hero2Image'
import Navbar from '../components/Navbar'
import PricingCard from '../components/PricingCard'

function Project() {
  return (
    <div>
      <Navbar />
      <Hero2Image heading="PROJECTS" text="Choose your package" />
      {/* <Work /> */}
      <PricingCard />
      <Footer />
    </div>
  )
}

export default Project