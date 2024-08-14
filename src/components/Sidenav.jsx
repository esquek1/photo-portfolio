import React from 'react'
import linkedInLogo from '/linkedin-logo.svg'
import instagramLogo from '/instagram-logo.png'
import "../css/sidenav.css"
import { Link } from "react-router-dom";


function Sidenav() {
  return (
    <div className='sidebar'>
		<div className=''>
			<p className='title'>Debbie Dicdican Portfolio</p>
		</div>
		
		{/* <div className='social'>
			<a href="https://www.instagram.com/deldkyuubi/?hl=en" target="_blank">
				<img src={instagramLogo} className="logo" alt="Instagram logo" />
			</a>
			<a href="https://www.linkedin.com/in/debbie-endena-dicdican-445845162/" target="_blank">
				<img src={linkedInLogo} className="logo linkedin" alt="LinkedIn logo" />
			</a>
		</div> */}

		<nav className=''>
			<ul className='nav-list'>
				<li className='nav-item'>
					<Link to="/">Home</Link>
				</li>
				<li className='nav-item'>
					<Link to="/about">About</Link>
				</li>
				<li className='nav-item'>
					<Link to="/contact">Contact</Link>
				</li>
				<li className="nav-item extraBorder">
					<Link to="/work">Work</Link>
				</li>
			</ul>
			
		</nav>
	</div>
  )
}

export default Sidenav