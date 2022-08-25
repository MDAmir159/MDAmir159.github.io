import "./HeroimageStyles.css"

import React from 'react'
import IntoImg from "../assets/intro-bg.jpg"
import {Link} from 'react-router-dom'

function Heroimage() {
  return (
    <div className="hero" >
        <div className="mask">
            <img className="into-img" src={IntoImg} alt="IntroImg" />
        </div>
        <div className="content">
            <p>HI, I'M A FREELANCER</p>
            <h1>React Developer</h1>
            <div>
                <Link to="/project" className = "btn">Projects</Link>
                <Link to="/contact" className = "btn-light">Contact</Link>
            </div>
        </div>
    </div>
  )
}

export default Heroimage