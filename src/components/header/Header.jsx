import React from 'react'
import "./header.css"
import CTA from "./CTA"

import HeaderSocials from "./HeaderSocials"
import {init} from "../../utils/initDroneLayer"
import {useEffect} from "react";
import animate from "../../utils/animate"


const Header = () => {
  useEffect(()=>{
    animate()
    setTimeout(init,1300)
    
  },[])
 
  return (
    <header>
      <div className="dialog-line"></div>
      <div className="container header__container">
        <div className="header__title">
        <h5>Hello I`m</h5>
        <h1>Pedro Sastre</h1>
        <h5 className="text-light">Fullstack <br/>Developer</h5>
        <CTA/>
        </div>
        <HeaderSocials/>
    
        <a href="#about" className='scroll__down'>Scroll Down</a>
      </div>
      
    <div>Header</div>
 
    </header>
  )
}

export default Header