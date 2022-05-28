import React from 'react';
import './App.css';

import Header from './components/Header';
import About from './components/About';
import Work from './components/work';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import Experience from './components/experience';
import Tech from './components/tech';
import Blog from './components/blog';

function App() {
	return (
		<div className='App'>
			<Navbar />
			<div className='App-header'>
				<Header />
			</div>

			<div className='About'>
				<About />
			</div>
			<div className='tech'>
				<Tech />
			</div>
			<div className='experience'>
				<Experience />
			</div>
			<div className='work'>
				<Work />
			</div>
			<div className='blog'>
				<Blog />
			</div>
			<div className='contact'>
				<Contact />
			</div>
		</div>
	);
}

export default App;
