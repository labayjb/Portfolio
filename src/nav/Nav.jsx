import React from 'react'
import './nav.css'
import {CgProfile} from 'react-icons/cg'
import {CgWebsite} from 'react-icons/cg'
import {RiServiceLine} from 'react-icons/ri'
import {FaGraduationCap} from 'react-icons/fa'
import {MdMessage} from 'react-icons/md'
import {useState} from 'react'

const Nav = () => {
    const [activeNav, setActiveNav] = useState('#header');
  return (
    <nav>
        <a href="#header" onClick={()=>setActiveNav('#header')} className={(activeNav === '#header') ? "active": ""}><CgProfile/></a>
        <a href="#accomp" onClick={()=>setActiveNav('#accomp')} className={(activeNav === '#accomp') ? "active": ""}><FaGraduationCap/></a>
        <a href="#olcourses" onClick={()=>setActiveNav('#olcourses')} className={(activeNav === '#olcourses') ? "active": ""}><RiServiceLine/></a>
        <a href="#projects" onClick={()=>setActiveNav('#projects')} className={(activeNav === '#projects') ? "active": ""}><CgWebsite/></a>
        <a href="#contact" onClick={()=>setActiveNav('#contact')} className={(activeNav === '#contact') ? "active": ""}><MdMessage/></a>
    </nav>
  )
}

export default Nav