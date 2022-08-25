import React from 'react'
import AboutContent from '../components/AboutContent'
import Footer from '../components/Footer'
import Hero2Image from '../components/Hero2Image'
import Navbar from '../components/Navbar'

const About = () => {
  return (
    <div>
      <Navbar />
      <Hero2Image heading = "ABOUT" text = "I am a friendly Full Stack Developer" />
      <AboutContent />
      <Footer />
    </div>
  )
}

export default About