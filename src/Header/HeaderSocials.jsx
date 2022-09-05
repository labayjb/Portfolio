import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://linkedin.com/in/labayjb" target='__blank'><BsLinkedin/></a>
        <a href="https://github.com/labayjb" target='__blank'><BsGithub/></a>
    </div>
  )
}

export default HeaderSocials