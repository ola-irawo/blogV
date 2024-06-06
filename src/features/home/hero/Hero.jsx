import React from 'react'
import "./hero.css"
import Button from '../../../components/ui/Button'
import { NavLink } from 'react-router-dom'

const Hero = () => {
  return (
    <section className="hero">
        <article className="hero-content" itemscope itemtype="https://schema.org/WebPage">
            <section className="hero-text" itemprop="mainContentOfPage">
                <h1 className="hero-intro" itemprop="headline">Bridging the gap between social media and mental health.</h1>
            </section> 

             <section className="hero-call-to-action">
                <NavLink to="/posts" itemprop="url">View latest post</NavLink>
                <NavLink to="https://www.ventmoir.com" target="_blank" rel="noopener noreferrer" itemprop="url">Join the community</NavLink>
            </section>   
        </article>    
    </section>
  )
}

export default Hero
