import React from 'react'
import AboutContent from '../components/AboutContent'
import Footer from '../components/Footer'
import Heroimage from '../components/Heroimage'
import Navbar from '../components/Navbar'

function Home() {
  return (
    <div>
        <Navbar />
        <Heroimage />
        <AboutContent />
        <Footer />    
    </div>
  )
}

export default Home