import { useEffect, useState } from 'react'
import linkedInLogo from '/linkedin-logo.svg'
import instagramLogo from '/instagram-logo.png'
import './App.css'

import carWheel from '/86-wheel.jpg'
import carTaillight from '/86-taillight.jpg'
import carHeadlight from '/86-headlight.jpg'
import carRolling from '/86-rolling.jpg'
import datsun from '/datsun.jpg'
import porsches from '/porsches.jpg'
import porscheClassic from '/944S.jpg'

function App() {
  useEffect(() => {
    const handleWheel = (event) => {
      const container = document.querySelector('.whole-page');
      if (container && event.deltaY !== 0) {
        container.scrollLeft += event.deltaY;
        event.preventDefault(); // Prevent default vertical scrolling behavior
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: false });

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('wheel', handleWheel);
    };
  }, []);

  return (
    <div className='whole-page'>
      
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
        
      </div>
      
      <div className='images-container'> 
        <div className='images'>
        <img src={carRolling} alt="86 Rolling"/>
          <img src={carWheel} alt="86 Wheel"/>
          <img src={carTaillight} alt="86 Taillight"/>
          <img src={carHeadlight} alt="86"/>
          <img src={datsun} alt="Datsun 240z"/>
          <img src={porscheClassic} alt="Porsche 944S"/>
          <img src={porsches} alt="Porsches"/>

        </div> 
      </div>
      
      
    </div>
  )
}

export default App
