import React from 'react'
import { Link } from "react-router-dom";
import "../css/footer.css"

function Footer() {
  return (
    <div>
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
  )
}

export default Footer