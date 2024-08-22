import React, { useState } from 'react'
import { useEffect } from 'react'

import suki_1 from '/Suki-1.jpg'
import suki_2 from '/Suki-2.jpg'
import suki_3 from '/Suki-3.jpg'

import carWheel from '/86-wheel.jpg'
import carTaillight from '/86-taillight.jpg'
import carHeadlight from '/86-headlight.jpg'
import carRolling from '/86-rolling.jpg'
import "../css/work.css"


function Work() {
	const [selectedFolder, setSelectedFolder] = useState('Portraits');
	


	// useEffect(() => {
	// 	const handleWheel = (event) => {
	// 		const container = document.querySelector('.images-container');
	// 		if (container && event.deltaY !== 0) {
	// 			container.scrollLeft += event.deltaY;
	// 			event.preventDefault(); // Prevent default vertical scrolling behavior
	// 		}
	// 	};

	// 	window.addEventListener('wheel', handleWheel, { passive: false });

	// 	// Clean up the event listener on component unmount
	// 	return () => {
	// 		window.removeEventListener('wheel', handleWheel);
	// 	};
	// }, []);
  return (
    <div className='images-container'> 
		<div className='button-container'>
			<button className='button' type="button" onClick={() => setSelectedFolder("Portraits")}>
				Portraits
			</button>  
			<button className='button' type="button" onClick={() => setSelectedFolder("Graduation")}>
				Graduation
			</button>  
			<button className='button' type="button" onClick={() => setSelectedFolder("Wedding")}>
				Wedding
			</button>  
			<button className='button' type="button" onClick={() => setSelectedFolder("Automobile")}>
				Automobile
			</button>  
		</div>
		
		<div className='images-item'>
			<img src={suki_1} alt=""/>
			<img src={suki_2} alt=""/>
			{/*<img src={suki_3} alt=""/>
			<img src={carRolling} alt="86 Rolling"/>
			<img src={carWheel} alt="86 Wheel"/>
			<img src={carTaillight} alt="86 Taillight"/>
			<img src={carHeadlight} alt="86"/> */}
		
		</div> 
	</div>
  )
}

export default Work
