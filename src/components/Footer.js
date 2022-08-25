import './FooterStyle.css'

import React from 'react'
import { FaFacebook, FaHome, FaLinkedin, FaMailBulk, FaPhone, FaTwitter } from 'react-icons/fa'
import { contactDetails } from '../assets/contactInfo'

function Footer() {
  return (
    <div className="footer">
        <div className="footer-container">
            <div className = "left">
                <div className = "location">
                    <FaHome size={20} style={{ color: "#fff", marginRight: "2rem"}}/>
                    <div>
                        <p>{ contactDetails.address }</p>
                        <p> {contactDetails.country} </p>
                    </div>
                </div>
                <div className="phone">
                    <h4>
                        <FaPhone size={20} style={{ color: "#fff", marginRight: "2rem"}}/>
                        {contactDetails.contactNo}
                    </h4>
                </div>
                <div className="email">
                    <h4>
                        <FaMailBulk size={20} style={{ color: "#fff", marginRight: "2rem"}}/>
                        {contactDetails.email}
                    </h4>
                </div>
            </div>
            <div className = "right">
                <h4>About the company</h4>
                <p>This is MD Amirul Islam. Undergraduate 4th year in Computer Science and Engineering, Rajshahi University 
                    of Engineering and Technology
                </p>
                <div className = "social">
                    <FaFacebook size={30} 
                        style={{color :"#fff",
                        marginRight: "1rem"
                    }}                    
                    />
                    <FaTwitter size={30} 
                        style={{color :"#fff",
                        marginRight: "1rem"
                    }}                    
                    />
                    <FaLinkedin size={30} 
                        style={{color :"#fff",
                        marginRight: "1rem"
                    }}                    
                    />
                </div>

            </div>
        </div> 

    </div>
  )
}

export default Footer