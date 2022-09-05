import React from 'react'
import CTA from './CTA'
import PIC from '../assets/LABAY.JPG'
import HeaderSocials from './HeaderSocials'
import './header.css'

const Header = () => {
  return (
    <header id='header'>
        <div className="container header__container">
            <h5>Hello I am</h5>
            <h1>Jay Benedict Labay</h1>
            <h5 className="text-light">
                Computer Engineer
            </h5>
            <CTA />
            <HeaderSocials />
            <div className="me">
                <img src={PIC} alt="" />
            </div>

            <a href="#contact" className='scroll__down'>Scroll Down</a>
            
        </div>
    </header>
  )
}

export default Header