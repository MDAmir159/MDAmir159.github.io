import "./PricingCardStyles.css";

import React from 'react'
import {Link} from 'react-router-dom'


function PricingCard() {
  return (
    <div className="pricing">
        <div className="card-container">
            <div className="card">
                <h3>- Basic -</h3>
                <span className="bar"></span>
                <p className="btc">$ 40</p>
                <p>- 14 Days -</p>
                <p>- 3/4 Pages -</p>
                <p>- Featured -</p>
                <p>- User Authetication -</p>
                <Link to = "/contact" className="btn">PURCHASE NOW</Link>
            </div>
            <div className="card">
                <h3>- Standard -</h3>
                <span className="bar"></span>
                <p className="btc">$ 200</p>
                <p>- 30 Days -</p>
                <p>- 7/8 Pages -</p>
                <p>- Featured -</p>
                <p>- User Authorization and Authetication -</p>
                <Link to = "/contact" className="btn">PURCHASE NOW</Link>
            </div>
            <div className="card">
                <h3>- Premium -</h3>
                <span className="bar"></span>
                <p className="btc">$ 500</p>
                <p>- 90 Days -</p>
                <p>- 12+ Pages -</p>
                <p>- Featured -</p>
                <p>- User Authorization and Authetication -</p>
                <p>- Admin dashboard available -</p>
                <Link to = "/contact" className="btn">PURCHASE NOW</Link>
            </div>
        </div>
    </div>
  )
}

export default PricingCard