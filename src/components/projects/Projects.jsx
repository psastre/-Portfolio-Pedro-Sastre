import React from 'react'
import "./projects.css"
import project1 from "../../assets/project1.jpg"
import project2 from "../../assets/project2.jpg"
import project3 from "../../assets/project3.jpg"
import projectPokedex from "../../assets/project-pokedex.PNG"
import projectBrassai from "../../assets/project-brassai.PNG"
import projectPortfolio from "../../assets/project-portfolio.PNG"
import projectMeme from "../../assets/project-meme.PNG"
import projectMusic from "../../assets/project-music.PNG"
import projectTenzi from "../../assets/project-tenzie.PNG"

const Projects = () => {
  return (
    <section id="projects">
      <h5>My Recent Work</h5>
      <h2>Projects</h2>

      <div className="container project__container">
        <article className='projects__item'>
          <div className="projects__item-image">
            <img src={projectBrassai} alt="project 1" />
          </div>
          <h3>Brassaï Gallery </h3>
          <p>Photo gallery test, with moving depth effects built with Gsap ScrollTrigger</p>
          <div className="projects__item-cta">
            <a href="https://github.com/psastre/Brassai-gallery" className='btn' target='_blank'>Github</a>
            <a href="https://brassai-project.web.app/" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>
        <article className='projects__item'>
          <div className="projects__item-image">
            <img src={projectPokedex} alt="project 1" />
          </div>
          <h3>Pokedex</h3>
          <p>Original pokedex design, with mouse tracking and ScrollTrigger effects for a more dynamic interaction, and all data fetched from Pokeapi </p>
          <div className="projects__item-cta">
            <a href="https://github.com/psastre/Pokedex" className='btn' target='_blank'>Github</a>
            <a href="https://pokedex-project-ps.web.app" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>
        <article className='projects__item'>
          <div className="projects__item-image">
            <img src={projectPortfolio} alt="project 1" />
          </div>
          <h3>Portfolio</h3>
          <p>Inception? This portfolio is made with React, CSS, ThreeJS, GSAP</p>
          <div className="projects__item-cta">
            <a href="https://github.com/psastre/Portfolio-Drone" className='btn' target='_blank'>Github</a>
            <a href="" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>
        <article className='projects__item'>
          <div className="projects__item-image">
            <img src={projectMeme} alt="project 1" />
          </div>
          <h3>Meme generator</h3>
          <p>With a classic meme gallery and a drag and drop logic for the text </p>
          <div className="projects__item-cta">
            <a href="https://github.com/psastre/Meme-Generator" className='btn' target='_blank'>Github</a>
            <a href="https://meme-generator-project-ps.web.app" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>
        <article className='projects__item'>
          <div className="projects__item-image">
            <img src={projectMusic} alt="project 1" />
          </div>
          <h3>Music PLayer</h3>
          <p>Part of a React course, we built a music player with its main logic and a music gallery</p>
          <div className="projects__item-cta">
            <a href="https://github.com/psastre/Music-Player" className='btn' target='_blank'>Github</a>
            <a href="https://music-player-project-10856.web.app" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>
        <article className='projects__item'>
          <div className="projects__item-image">
            <img src={projectTenzi} alt="project 1" />
          </div>
          <h3>Tenzi Game </h3>
          <p>Dice game made in react, to exercise the logic of game rules and the operation of local Storage</p>
          <div className="projects__item-cta">
            <a href="https://github.com/psastre/Tenzi-game" className='btn' target='_blank'>Github</a>
            <a href="https://tenzi-project.web.app" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>
        
      </div>
    </section>
  )
}

export default Projects