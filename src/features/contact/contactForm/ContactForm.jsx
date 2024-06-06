import React, { useState } from 'react'
import "./contact-form.css"
import Button from '../../../components/ui/Button'
import { NavLink } from 'react-router-dom'
import twitter from "./svgs/twitter.svg"
import linkedin from "./svgs/linkedin.svg"


const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [errorMessage, setErrorMessage] = useState(null)

  const handleFormInput = (e) => {
    const {value, name } = e.target;
    setFormData(oldData => {
      return {
        ...oldData,
        [name]: value
      }
    })
  }

  console.log(Object.values(formData).every(value => value))

  const getData = (e) => {
    e.preventDefault()
    const validInputs = Object.values(formData).every(value => value)

    try{
      if(!validInputs){
        alert("Kindly fill all fields")
        throw new Error("Kindly fill all fields")
      }
  
      const message = `Name: ${encodeURIComponent(formData.name)}
      
      Message: ${encodeURIComponent(formData.message)}`;
      
      const mailtoLink = `mailto:contactventmoir@gmail.com?subject=${encodeURIComponent('Contact Form Submission')}&body=${message}`;
      
      window.location.href = mailtoLink;
      setFormData({
        name: "",
        email: "",
        message: ""
      })
    }
    catch(error){
      setErrorMessage(error.message)
    }
    finally{
      setErrorMessage("Kindly fill all fields")
      setTimeout(() => {
        setErrorMessage("")
      }, 3000);
    }
  }
  return (
    <section className="contact-form" itemScope itemType="https://schema.org/ContactPage">

        <article className="contact-form">
          <h2  className="contact-form"  itemProp="headline">Connect with us</h2>
          <p className="contact-form" itemProp="description">
            At Venmoir, we are dedicated to providing a supportive and safe space for mental health discussions. If you have any questions, need assistance, or want to share your feedback, please feel free to reach out to us. We value your input and are committed to ensuring you have the best experience possible.
          </p>

          <ul className="contact-form-list">
            <li className="contact-form-list-item" itemScope itemType="https://schema.org/ContactPoint">
                <NavLink  to="https://x.com/ventmoir" target="_blank" rel="noopener noreferrer"> 
                    <img src={twitter} alt="X" />
                    <span itemProp="name">Follow us on X (formerly known as Twitter)</span>
                </NavLink>
            </li>

            <li className="contact-form-list-item" itemScope itemType="https://schema.org/ContactPoint">
                <NavLink to="https://www.linkedin.com/company/vent-moir/" target="_blank" rel="noopener noreferrer" itemProp="url">
                    <img src={linkedin} alt="Linkedin" itemProp="image"/>
                    <span itemProp="name">Follow us on LinkedIn</span>
                </NavLink>
            </li>
          </ul>
        </article>

        <form className="contact-form" onSubmit={getData} itemProp="potentialAction" itemScope itemType="https://schema.org/CommunicateAction">
            <h2  className="contact-form" itemProp="name">Send a message</h2>
            <>
              <label className="contact-form-label" htmlFor="name">Name:</label>
              <input name="name" value={formData.name} onChange={handleFormInput} type="text" id="name" placeholder="Enter your name" itemProp="name"/>
            </>
            
            <>
              <label className="contact-form-label" htmlFor="email">Email:</label>
              <input name="email" value={formData.email} onChange={handleFormInput} type="text" id="email" placeholder="Enter your email address" itemProp="email" />
            </>

            <>
              <label className="contact-form-label" htmlFor="message">Message:</label>
              <textarea name="message" value={formData.message} onChange={handleFormInput} id="message" placeholder="Enter your message" itemProp="text"/>
            </>

            <Button
              text="Submit"
              className="contact-form-btn"
            />
        </form>
      
    </section>
  )
}

export default ContactForm
