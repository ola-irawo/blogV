import React, { useEffect, useState } from 'react'
import "./nav-bar.css"
import BrandLogo from '../../components/ui/brandLogo/BrandLogo'
import { NavLink, Outlet } from 'react-router-dom'
import useWindowWidth from '../../hooks/useWindowWidth'
import Button from '../../components/ui/Button'
import Footer from '../footer/Footer'

const NavBar = () => {
  const [showNav, setShowNav] = useState(false)

  const screenWidth = useWindowWidth()
  const isMobile = screenWidth <= 767

  useEffect(() => {
    if(!isMobile){
      setShowNav(true)
    }
    else{
      setShowNav(false)
    }
  }, [screenWidth])

  return (
    <>
    <header className="nav-bar" itemScope itemType="https://schema.org/WPHeader">
      <BrandLogo />
      
      {showNav && <nav className="nav-container" itemProp="hasPart" itemScope itemType="https://schema.org/SiteNavigationElement">
        <ul className="nav-list">
         {isMobile && <li
            className="nav-list-item"
            onClick={() => setShowNav(oldvalue => !oldvalue)}
            aria-label="Close navigation menu"
          >
           <svg  aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 512 512">
            <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z"/>
           </svg>
          </li>}
          <li className="nav-list-item">
            <NavLink to="/" itemProp="url">Home</NavLink>
          </li>
          <li className="nav-list-item">
            <NavLink to="/posts" itemProp="url">Posts</NavLink>
          </li>
          {/* <li className="nav-list-item">
            <NavLink to="resources">Resources</NavLink>
          </li> */}
          <li className="nav-list-item">
            <NavLink to="about" itemProp="url">About</NavLink>
          </li>
          <li className="nav-list-item">
            <NavLink to="contact" itemProp="url">Contact</NavLink>
          </li>
        </ul>
      </nav>}

      {isMobile && !showNav &&
        <Button
          className="nav-button"
          text={
            <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 448 512">
              <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"/>
            </svg> 
          }
          onClick={() => setShowNav(oldvalue => !oldvalue)}
          ariaLabel="Open navigation menu"
          ariaExpanded={showNav}
        />
      }
    </header>
    <Outlet />
    <Footer />
    </>

  )
}

export default NavBar
