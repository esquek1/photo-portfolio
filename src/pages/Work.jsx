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
		<div className='images-item'>
			Item 1
		</div>
		<div className='images-item'>
			Item 2
		</div>
		<div className='images-item'>
			Item 3
		</div>
		<div className='images-item'>
			Item 4
		</div>
		<div className='images-item'>
			Item 5
		</div>
		<div className='images-item'>
			Item 6
		</div>
		<div className='images-item'>
			Item 7
		</div>
		<div className='images-item'>
			Item 8 
		</div>
		<div className='images-item'>
			Item 9
		</div>
	</div>
  )
}

export default Work
