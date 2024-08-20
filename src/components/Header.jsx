import React from 'react'
import linkedInLogo from '/linkedin-logo.svg'
import instagramLogo from '/instagram-logo.png'
import "../css/header.css"
import { Link } from "react-router-dom";
import { FiMenu } from "react-icons/fi";


function Header() {
  return (
    <div className='header-container'>
		<div className='header-item header-item-1'>
			<p className='title'>Debbie Dicdican Portfolio</p>
		</div>
		
		<div className='links header-item header-item-2'>
			<FiMenu className='menu-icon' />
	
			<div className='header-item social-item'>
				<a href="https://www.instagram.com/deldkyuubi/?hl=en" target="_blank">
					<img src={instagramLogo} className="logo" alt="Instagram logo" />
				</a>
				<a href="https://www.linkedin.com/in/debbie-endena-dicdican-445845162/" target="_blank">
					<img src={linkedInLogo} className="logo linkedin" alt="LinkedIn logo" />
				</a>
			</div>

			<nav className='item'>
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
		
	</div>
  )
}

export default Header