import React from 'react'
import detekt from '../assets/detekt.png'
import './projects.css'

const Projects = () => {
  return (
    <section className='projects' id='projects'>
      <h5>My Recent Work</h5>
      <h2>Projects</h2>

      <div className="container portfolio__container">
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={detekt} alt='' />
          </div>
          <h3>Spam Detection</h3>
          <h5>Responsive Website platform for SMS/Email Spam Detection using ReactJS</h5>
          <div className="porfolio__item-cta">
            <a href="https://github.com/labayjb/SpamDetection" className='btn'>Github</a>
            <a href="https://spam-detekt.herokuapp.com/" className='btn btn-primary' target='__blank'>Live Demo</a>
          </div>
        </article>
      </div>
        

    </section>
  )
}

export default Projects