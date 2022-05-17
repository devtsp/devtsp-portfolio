import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';

import Navbar from './components/Navbar.js';
import About from './pages/About';
import Projects from './pages/Projects';
import Stack from './pages/Stack';
import TransitionGroup from './util/TransitionGroup.js';

function App() {
	return (
		<div id="App">
			<BrowserRouter>
				<Navbar></Navbar>
				<div id="body">
					<TransitionGroup>
						<Route path="/" element={<About />} />
						<Route path="projects" element={<Projects />} />
						<Route path="stack" element={<Stack />} />
					</TransitionGroup>
				</div>
			</BrowserRouter>
		</div>
	);
}

export default App;
