import React from 'react'
import linkedInLogo from '/linkedin-logo.svg'
import instagramLogo from '/instagram-logo.png'
import '../App.css'


function Sidenav() {
  return (
    <div className='sidebar'>
        <div className='title'>
          <p>Debbie Dicdican Portfolio</p>
        </div>
        
        <div className='social'>
          <a href="https://www.instagram.com/deldkyuubi/?hl=en" target="_blank">
            <img src={instagramLogo} className="logo" alt="Instagram logo" />
          </a>
          <a href="https://www.linkedin.com/in/debbie-endena-dicdican-445845162/" target="_blank">
            <img src={linkedInLogo} className="logo linkedin" alt="LinkedIn logo" />
          </a>
        </div>

        <nav className=''>
          <div className='row'>
            <a className="links" href="/about">About</a>
            <a className="links" href="/work">Work</a>
            <a className="links" href="/contact">Contact</a>
          </div>
          
        </nav>
      </div>
  )
}

export default Sidenav