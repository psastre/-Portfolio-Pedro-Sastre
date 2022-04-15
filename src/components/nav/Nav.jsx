import React from 'react'
import "./nav.css"
import {BiHomeCircle} from 'react-icons/bi'
import {FaUserAstronaut} from 'react-icons/fa'
import {BiMessageSquareDetail} from 'react-icons/bi'
import {BiBookOpen} from 'react-icons/bi'
import {useState} from 'react'

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <nav>
      <a href="#" onClick={()=> setActiveNav('#')} className={activeNav === '#' ? 'active' : ' '}><BiHomeCircle/></a>
      <a href="#about" onClick={()=> setActiveNav('#about')}className={activeNav === '#about' ? 'active' : ' '}><FaUserAstronaut/></a>
      <a href="#projects" onClick={()=> setActiveNav('#projects')} className={activeNav === '#projects' ? 'active' : ' '} ><BiBookOpen/></a>
      <a href="#contact" onClick={()=> setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ' '} ><BiMessageSquareDetail/></a>
      
    </nav>
  )
}

export default Nav