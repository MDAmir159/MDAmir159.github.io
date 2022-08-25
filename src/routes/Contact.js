import React from 'react'
import Footer from '../components/Footer'
import Form from '../components/Form'
import Hero2Image from '../components/Hero2Image'
import Navbar from '../components/Navbar'

function Contact() {
  return (
    <div>
      <Navbar />
      <Hero2Image heading="CONTACT" text = "Let's have a chat" />
      <Form />
      <Footer />
    </div>
  )
}

export default Contact