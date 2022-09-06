import React from 'react'
import './Education.css'
import PUP from '../assets/PUP.png'
import MNHS from '../assets/MNHS.png'
import BES from '../assets/BES.png'

const Education = () => {
  return (
    <section className='education' id='accomp'>
      <h5>Schools Attended</h5>
      <h2>Education</h2>

      <div className="container education__container">
        <article>
        <div className="education__details">
          <div className="education__details-img">
            <img src={PUP} alt="" />
          </div>
          <div className="education__details-content">
            <h3>Polytechnic University of the Philippines</h3>
            <h5>Bachelor of Science in Computer Engineering</h5>
            <small>2018-2022</small>
          </div>
        </div>
        <div className="education__details">
          <div className="education__details-img">
            <img src={PUP} alt="" />
          </div>
          <div className="education__details-content">
            <h3>Polytechnic University of the Philippines</h3>
            <h5>Science, Technology, Engineering and Mathematics Strand</h5>
            <small>2016-2018</small>
          </div>
        </div>
        <div className="education__details">
          <div className="education__details-img">
            <img src={MNHS} alt="" />
          </div>
          <div className="education__details-content">
            <h3>Marinduque National High School</h3>
            <h5>Special Science Class</h5>
            <small>2012-2016</small>
          </div>
        </div>
        <div className="education__details">
          <div className="education__details-img">
            <img src={BES} alt="" />
          </div>
          <div className="education__details-content">
            <h3>Balimbing Elementary School</h3>
            <small>2006-2012</small>
          </div>
        </div>
        </article>
      </div>
    </section>
  )
}

export default Education