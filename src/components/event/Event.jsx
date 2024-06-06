import React from 'react'
import "./event.css"
import event from "./event.jpg"
import twitter from "./svgs/twitter.svg"
import linkedin from "./svgs/linkedin.svg"
import { NavLink } from 'react-router-dom'

const Event = () => {
  return (
    <section className="event" itemprop="event" itemscope itemtype="https://schema.org/Event">
        <h2 className="event" itemprop="name">Coming soon</h2>
        
        <div className="event-container">
            
            <img src={event} className="event-img" alt="event" itemprop="image" />

            <article className="event" itemprop="description">
                <h3 className="event" itemprop="headline">MentalWell Connect:  Empowering Mental Health Conversations</h3>

                <p className="event" itemprop="description">
                    As part of our mission to promote mental health awareness and eradicate the isolation struggles often associated with mental health, the event, MentalWell Connect, aims to create a supportive and inclusive space for individuals to learn more about mental health, share their experiences, connect with mental health professionals, and access mental health resources for support.
                </p>

                <ul className="event-list">
                    <h3 className="event">What you should expect:</h3>

                    <li className="event-list-item">
                        <strong>Expert Speakers: </strong>
                        Hear from leading mental health professionals who will share their insights and strategies for managing mental health.
                    </li>

                    <li  className="event-list-item">
                        <strong>Personal Stories: </strong>
                        Listen to inspiring personal stories from individuals who have navigated mental health challenges and found resilience.
                    </li>

                    <li  className="event-list-item">
                        <strong>Resource Sharing: </strong>
                        Engage with our speakers through an interactive Q&A session, where you can ask questions and get real-time answers.
                    </li>

                    <li className="event-list-item">
                        <strong>Interactice Q&A: </strong>
                        Access valuable mental health resources, including articles, tools, and support networks.
                    </li>
                </ul>

                

                <ul className="contact-form-list">
                    <p className="event">Follow us on social media for updates and reminders about the event:</p>

                    <li className="contact-form-list-item">
                        <NavLink to="https://twitter.com/ventmoir" target="_blank" rel="noopener noreferrer" itemProp="sameAs"> 
                            <img src={twitter} alt="X" />
                            Follow us on X(formly known as Twitter)
                        </NavLink>
                    </li>

                    <li className="contact-form-list-item">
                        <NavLink  to="https://www.linkedin.com/company/vent-moir/" target="_blank" rel="noopener noreferrer" itemProp="sameAs">
                            <img src={linkedin} alt="Linkedin" />
                            Follow us on Linkdein
                        </NavLink>
                    </li>
                </ul>
            </article>
        </div>


    </section>
  )
}

export default Event
