import './AboutContentStyles.css'

import React from 'react'
import node from '../assets/node.webp'
import mysql from '../assets/mysql.webp'
import {Link} from 'react-router-dom'
function AboutContent() {
  return (
    <div className='about'>
        <div className='left'>
            <h1>Who am I?</h1>
            <p>I am a back-end Developer. I do develope secure servers for websites and mobile applciaions for my clients.</p>
            <Link to="/contact">
                <button className='btn'>Contact</button>
            </Link>
        </div>
        <div className='right'>
            <div className='img-container'>
                <div className='img-stack top'>
                    <img src = {node} className="img" alt="true" />
                </div>
                <div className='img-stack bottom'>
                    <img src = {mysql} className="img" alt="true" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutContent