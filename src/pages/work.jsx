import React from 'react'

import suki_1 from '/Suki-1.jpg'
import suki_2 from '/Suki-2.jpg'
import suki_3 from '/Suki-3.jpg'

import carWheel from '/86-wheel.jpg'
import carTaillight from '/86-taillight.jpg'
import carHeadlight from '/86-headlight.jpg'
import carRolling from '/86-rolling.jpg'
import "../css/work.css"

function work() {
  return (
    <div className='images-container'> 
		<div className='images'>
			<img src={suki_1} alt=""/>
			<img src={suki_2} alt=""/>
			<img src={suki_3} alt=""/>
			<img src={carRolling} alt="86 Rolling"/>
			<img src={carWheel} alt="86 Wheel"/>
			<img src={carTaillight} alt="86 Taillight"/>
			<img src={carHeadlight} alt="86"/>
		
		</div> 
	</div>
  )
}

export default work