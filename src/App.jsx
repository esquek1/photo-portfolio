import { useEffect } from 'react'
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Work from './pages/Work';

import Header from './components/Header'

import './App.css'
import Footer from './components/Footer';


function App() {
	return (
		<div className='grid-container'>
			<BrowserRouter>
			<div className='grid-item header'>
				<div className='header'>
					<Header />
				</div> 
			</div>
			
			<div className='grid-item content '>
				<Routes>
					<Route index element={<Home />} />
					<Route path="about" element={<About />} />
					<Route path="contact" element={<Contact />} />
					<Route path="work" element={<Work />} />
				</Routes>
			</div>

			<div className='grid-item footer-content'> 
				<div className='footer'>
					<Footer />
				</div> 
			</div>
			
			</BrowserRouter>
		</div>
	)
}

export default App;
