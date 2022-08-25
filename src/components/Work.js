import './CardStyles.css';
import WorkCardData from "./WorkCardData.js"

import React from 'react'
import Card from './Card';
function Work() {
  return (
    <div className="work-container">
        <h1 className="project-heading">Projects</h1>
        <div className="project-container">
            {
                WorkCardData.map((val, index) => {
                    return(
                        <Card 
                            key = {index}
                            imgsrc = {val.imgsrc}
                            title = {val.title}
                            text = {val.text}
                            view = {val.view}
                        />
                    )
                })
            }
        </div> 
    </div>
  )
}

export default Work