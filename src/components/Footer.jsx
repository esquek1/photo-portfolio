import React from 'react'
import { Link } from "react-router-dom";
import "../css/footer.css"
import { FaHome } from "react-icons/fa";
import { FaInfoCircle } from "react-icons/fa";

import { IoMdContact } from "react-icons/io";
import { MdPhotoLibrary } from "react-icons/md";


function Footer() {
  return (
    <div>
        <nav className='item'>
            <ul className='nav-container'>
                <li className='nav-item'>
                    <Link to="/">
                        <div className='footer-icon'>
                            <FaHome />
                        </div>
                        Home
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to="/about">
                        <div className='footer-icon'>
                            <FaInfoCircle />
                        </div>
                        About
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to="/contact">
                        <div className='footer-icon'>
                            <IoMdContact />
                        </div>
                        Contact
                    </Link>
                </li>
                <li className="nav-item extraBorder">
                   
                    <Link to="/work"> 
                        <div className='footer-icon'>
                            <MdPhotoLibrary />
                        </div>
                        Work
                    </Link>
                </li>
            </ul>
            
        </nav>
    </div>
  )
}

export default Footer