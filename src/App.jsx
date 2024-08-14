import { useEffect } from 'react'
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Work from './pages/Work';

import Sidenav from './components/Sidenav'

import './App.css'


function App() {
	return (
		<div className='grid-container'>
			<Sidenav />
		{/* <div className='grid-item sidenav'>
			<Sidenav />
		</div> */}
			{/* <div className='grid-item content'>
				<BrowserRouter>
				<Routes>
					<Route index element={<Home />} />
					<Route path="about" element={<About />} />
					<Route path="contact" element={<Contact />} />
					<Route path="work" element={<Work />} />
				</Routes>
				</BrowserRouter>
			</div> */}
			
			
			
		</div>
	)
}

export default App
