import React from 'react'
import "./projects.css"
import project1 from "../../assets/project1.jpg"
import project2 from "../../assets/project2.jpg"
import project3 from "../../assets/project3.jpg"

const Projects = () => {
  return (
    <section id="projects">
      <h5>My Recent Work</h5>
      <h2>Projects</h2>

      <div className="container project__container">
        <article className='projects__item'>
          <div className="projects__item-image">
            <img src={project1} alt="project 1" />
          </div>
          <h3>Project Title</h3>
          <div className="projects__item-cta">
            <a href="" className='btn' target='_blank'>Github</a>
            <a href="" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>
        <article className='projects__item'>
          <div className="projects__item-image">
            <img src={project1} alt="project 1" />
          </div>
          <h3>Project Title</h3>
          <div className="projects__item-cta">
            <a href="" className='btn' target='_blank'>Github</a>
            <a href="" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>
        <article className='projects__item'>
          <div className="projects__item-image">
            <img src={project1} alt="project 1" />
          </div>
          <h3>Project Title</h3>
          <div className="projects__item-cta">
            <a href="" className='btn' target='_blank'>Github</a>
            <a href="" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>
        <article className='projects__item'>
          <div className="projects__item-image">
            <img src={project1} alt="project 1" />
          </div>
          <h3>Project Title</h3>
          <div className="projects__item-cta">
            <a href="" className='btn' target='_blank'>Github</a>
            <a href="" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>
        <article className='projects__item'>
          <div className="projects__item-image">
            <img src={project1} alt="project 1" />
          </div>
          <h3>Project Title</h3>
          <div className="projects__item-cta">
            <a href="" className='btn' target='_blank'>Github</a>
            <a href="" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>
        <article className='projects__item'>
          <div className="projects__item-image">
            <img src={project1} alt="project 1" />
          </div>
          <h3>Project Title</h3>
          <div className="projects__item-cta">
            <a href="" className='btn' target='_blank'>Github</a>
            <a href="" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>
        
      </div>
    </section>
  )
}

export default Projects