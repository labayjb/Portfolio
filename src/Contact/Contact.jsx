import React from 'react'
import './Contact.css'
import {FiMail} from 'react-icons/fi'
import { useRef } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_96d3wy8', 'template_lmdgqdx', form.current, 'OzJFXVgu9-YeHroGF')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

    e.target.reset();
  };

  return (
    <section className='Contact' id='contact'>
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>
      
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <FiMail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>jayben.3.labay@gmail.com</h5>
            <a href="mailto:jayben.3.labay@gmail.com" target='__blank'>Send a message</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required/>
          <input type="email"  name='email' placeholder='Your Email' required/>
          <textarea name="message" id="" cols="30" rows="10" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact