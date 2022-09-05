import React from 'react'
import profile from './LABAY.JPG'
import './profile.css'

const Profile = () => {
  return (
    <section className='profile' id='profile'>
        <img src={profile} alt='Jay Benedict M. Labay'/>
        <h1>JAY BENEDICT MONTERAS LABAY</h1>
        <h3>Computer Engineer</h3>
        <div className='intro'>
            <h5>Motivated, teamwork-oriented, and responsible Computer Engineer with 
            significant experiences in programming , research, and project management. </h5>
        </div>
        <div className='triangle'></div>
    </section>
  )
}

export default Profile