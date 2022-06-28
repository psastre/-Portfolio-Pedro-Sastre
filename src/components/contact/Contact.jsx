import React from 'react'
import "./contact.css"
import {MdOutlineEmail} from 'react-icons/md'
import { BsTwitter } from 'react-icons/bs'


const Contact = () => {
  const copyMail =()=>{
    navigator.clipboard.writeText("pedro2000sastre@gmail.com");
    document.querySelector(".copied").className='copied-open';
  }
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
          <a   onClick={copyMail}>Copy Mail</a><br/>
          <span className='copied'>copied</span>
        </article>
        <article className='contact__option'>
          <BsTwitter className='contact__option-icon' />
          <h4>Twitter</h4>
          <h5>@pedronason</h5>
          <a href="https://twitter.com/pedronason" target="_blank">Lets talk </a>
        
        </article>
      </div>
      {/*END OF CONTACT OPTION*/}
      <form action="https://formsubmit.co/pedro2000sastre@gmail.com" method="POST">
        <input type="text" name="name" placeholder='Your Full Name' required />
        <input type="email" name='email' placeholder='YourEmail' required />
        <textarea name="message"  rows="7" placeholder='Your Message' required></textarea>

        <input type="hidden" name="_captcha" value="false"></input>
        <input type="hidden" name="_next" value="https://pedro-sastre.web.app/#contact"></input>
        <button type='submit' className='btn-form btn btn-primary '>Send Message.</button>
      </form>
        </div>
    </section>
  )
}

export default Contact