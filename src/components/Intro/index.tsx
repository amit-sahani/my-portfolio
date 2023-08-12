import React from 'react'
import './intro.css'
import {StaticImage} from 'gatsby-plugin-image'

const Intro = () => {
  return (
    <section id="intro-section">
      <div>
        <StaticImage src='../../images/DP.jpg' alt="Author(Amit Sahani's) image" />
      </div>
      <div className='basic-info-wrapper'>
        <div id="basic-info">
          <div><p><span className='heading'>Amit Sahani</span></p></div>
          <div><p><span className='role-heading'>Frontend Engineer</span></p></div>
          <div><button className='connect-button'>Reach out</button></div>
        </div>
      </div>
    </section>
  )
}

export default Intro