import React from 'react'
import './about.css';
import ME from '../../assets/me-abaout-2.png'
import {AiFillHtml5} from 'react-icons/ai'
import {DiCss3} from 'react-icons/di'
import {IoLogoJavascript} from 'react-icons/io'
import {FaReact} from 'react-icons/fa'
import {SiPhp} from 'react-icons/si'
import {DiLaravel} from 'react-icons/di'
import {SiMysql} from 'react-icons/si'
import {SiGreensock} from 'react-icons/si'
import {SiThreedotjs} from 'react-icons/si'

import animate from "../../utils/animate"

import {useEffect} from "react";

const About = () => {


  
   
  
  
  
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <div className="about__me-image-center">
              {/*<img src={ME} alt="About Image" />*/}
            </div>
            <div className="about__me-image-text">
              <p>Pedro Sastre - Full Stack Dev - </p>
            </div>
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <h5>FrontEnd</h5>
              <AiFillHtml5 className='about__icon'/>
              <DiCss3 className='about__icon'/>
              <IoLogoJavascript className='about__icon'/>
              <FaReact className='about__icon'/>
              
            </article>
            <article className='about__card'>
              <h5>BackEnd</h5>
              <SiPhp className='about__icon'/>
              <DiLaravel className='about__icon' alt="LAravel"/>
              <SiMysql className='about__icon'/>
              
            </article>
            <article className='about__card'>
              <h5>Others</h5>
              <SiGreensock className='about__icon'/>
              <SiThreedotjs className='about__icon'/>
              
            </article>
          </div>
            <p> Looking forward for a challenging job, that encourages me to learn something new every day and a team that helps me implement all that new knowledge, to develop in my career the ability of working with several technological tools and find the best way of combining them in each project.</p>
        </div>
      </div>
    </section>
  )
}

export default About