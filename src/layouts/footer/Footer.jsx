import React from 'react'
import "./footer.css"
import BrandLogo from '../../components/ui/brandLogo/BrandLogo'
import { NavLink } from 'react-router-dom'
import twitter from "./svgs/twitter.svg"
import linkedin from "./svgs/linkedin.svg"
import email from "./svgs/email.svg"

const Footer = () => {
  return (
    <footer className="footer"  itemScope itemType="https://schema.org/WPFooter">
        <section className="footer">
            <BrandLogo />
            
            <nav className="footer" itemProp="hasPart" itemScope itemType="https://schema.org/SiteNavigationElement">

                <ul className="footer-list">
                    <h2 className="footer">Menu</h2>
                    <li className="footer-list-item">
                        <NavLink to="/" itemProp="url">
                            Home
                        </NavLink>
                    </li>

                    <li className="footer-list-item">
                        <NavLink to="posts" itemProp="url">
                            Posts
                        </NavLink>
                    </li>

                    <li className="footer-list-item">
                        <NavLink to="about" itemProp="url">
                            About
                        </NavLink>
                    </li>

                    <li className="footer-list-item">
                        <NavLink to="contact" itemProp="url">
                            Contact
                        </NavLink>
                    </li>
                </ul>

                <ul className="footer-list">
                    <h2 className="footer">Follow</h2>

                    <li className="footer-list-item">
                        <NavLink to="https://x.com/ventmoir" target="_blank" rel="noopener noreferrer" itemProp="sameAs">
                            <img src={twitter} alt="X" />
                        </NavLink>
                    </li>

                    <li className="footer-list-item">
                        <NavLink to="https://www.linkedin.com/company/vent-moir/" target="_blank" rel="noopener noreferrer" itemProp="sameAs">
                            <img src={linkedin} alt="Linkedin" />
                        </NavLink>
                    </li>

                    <li className="footer-list-item">
                        <NavLink to="mailto:contactventmoir@gmail.com" target="_blank" rel="noopener noreferrer" itemProp="sameAs">
                            <img src={email} alt="Email" />
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </section>
        
        <center>
            <p>2024 Ventmoir. All rights reserved</p>
        </center>
    </footer>
  )
}

export default Footer
