import React from 'react'
import "./Hero2ImageStyles.css"

function Hero2Image(props) {
  return (
    <div className="hero-img">
        <div className="heading">
            <h1>{props.heading}</h1>
            <p> {props.text} </p>
        </div>
    </div>
  )
}

export default Hero2Image