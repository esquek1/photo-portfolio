import { useState } from 'react'
import linkedInLogo from '/linkedin-logo.svg'
import instagramLogo from '/instagram-logo.png'
import './App.css'

import carWheel from '/86-wheel.jpg'
import carTaillight from '/86-taillight.jpg'
import carHeadlight from '/86-headlight.jpg'
import carRolling from '/86-rolling.jpg'

function App() {


  return (
    <>
      <div className='title'>
        <p>Debbie Dicdican Photography</p>
      </div>
      
      <div className='images'>
        <img src={carRolling}></img>
        <img src={carWheel}></img>
        <img src={carTaillight}></img>
        <img src={carHeadlight}></img>
        
      </div>
      
      <div className='social'>
        <a href="https://www.instagram.com/deldkyuubi/?hl=en" target="_blank">
          <img src={instagramLogo} className="logo" alt="Instagram logo" />
        </a>
        <a href="https://www.linkedin.com/in/debbie-endena-dicdican-445845162/" target="_blank">
          <img src={linkedInLogo} className="logo linkedin" alt="LinkedIn logo" />
        </a>
      </div>

      
      
    </>
  )
}

export default App
