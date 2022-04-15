import React from 'react'
import "./contact.css"
import {MdOutlineEmail} from 'react-icons/md'
import { BsTwitter } from 'react-icons/bs'


const Contact = () => {
  return (
    <section id='contact'>
    <h5>Get in Touch</h5>
    <h2>Contact Me</h2>

    <div className='container contact__container'>
      <div className="contact__options">
        <article className='contact__option'>
          <MdOutlineEmail className='contact__option-icon'/>
          <h4>Email</h4>
          <h5>pedro2000sastre@gmail.com</h5>
          <a href="mailto:pedro2000sastre@gmail.com" target="_blank">Send a message</a>
        
        </article>
        <article className='contact__option'>
          <BsTwitter className='contact__option-icon' />
          <h4>Twitter</h4>
          <h5>@pedronason</h5>
          <a href="https://twitter.com/pedronason" target="_blank">Lets talk </a>
        
        </article>
      </div>
      {/*END OF CONTACT OPTION*/}
      <form action="">
        <input type="text" name="name" placeholder='Your Full Name' required />
        <input type="email" name='email' placeholder='YourEmail' required />
        <textarea name="message"  rows="7" placeholder='Your Message' required></textarea>
        <button type='sibmit' className='btn btn-primary'>Send Message</button>
      </form>
        </div>
    </section>
  )
}

export default Contact