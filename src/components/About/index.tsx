import React from 'react'
import './about.css'
import { StaticImage } from 'gatsby-plugin-image'
const About = () => {
  return (
    <section id='about-section'>
        <div>
          <div id="about-details-wrapper">
            <div><p><span className='heading'>About Me</span></p></div>
            <div className='about-details'>
              <p>I am a diligent senior frontend engineer with years of experience in business applications. 
                I've had the pleasure of mentoring aspiring frontend developers, 
                sharing the skills and knowledge needed to thrive in this dynamic field.</p>
            </div>
          </div>
        </div>
        <div><StaticImage src='../../images/about-image.webp' alt="Author(Amit Sahani's) -about- image" /></div>
    </section>
  )
}

export default About