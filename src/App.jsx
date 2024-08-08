import { useEffect } from 'react'
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Work from './pages/Work';

import Sidenav from './components/Sidenav'

import './App.css'

import suki_1 from '/Suki-1.jpg'
import suki_2 from '/Suki-2.jpg'
import suki_3 from '/Suki-3.jpg'

import carWheel from '/86-wheel.jpg'
import carTaillight from '/86-taillight.jpg'
import carHeadlight from '/86-headlight.jpg'
import carRolling from '/86-rolling.jpg'

function App() {
	useEffect(() => {
		const handleWheel = (event) => {
			const container = document.querySelector('.images-container');
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
			<BrowserRouter>
				<Sidenav/>
					<Routes>  
							<Route path="/" element={<Home />}>
								<Route index element={<Home />} />
								<Route index path="about" element={<About/>} />
								<Route path="contact" element={<Contact />} />
								<Route path="work" element={<Work />} />
							</Route>
					</Routes>
			</BrowserRouter>
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
		</div>
	)
}

export default App
