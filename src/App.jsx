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
			<div className='grid-item content'>
				<BrowserRouter>
					<div className='header'>
						<Header />
					</div> 
					<Routes>
						<Route index element={<Home />} />
						<Route path="about" element={<About />} />
						<Route path="contact" element={<Contact />} />
						<Route path="work" element={<Work />} />
					</Routes>
				</BrowserRouter>
				item 1
			</div>
			<div className='grid-item'> item 2</div>
			<div className='grid-item'> 
				<BrowserRouter>
					<div className='footer'>
						<Footer />
					</div> 
					<Routes>
						<Route index element={<Home />} />
						<Route path="about" element={<About />} />
						<Route path="contact" element={<Contact />} />
						<Route path="work" element={<Work />} />
					</Routes>
				</BrowserRouter>
			</div>
			
		</div>
	)
}

export default App;
