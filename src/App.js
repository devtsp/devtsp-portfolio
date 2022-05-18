import { HashRouter as Router, Route } from 'react-router-dom';
import Navbar from './components/Navbar.js';
import About from './pages/About';
import Projects from './pages/Projects';
import Stack from './pages/Stack';
import TransitionGroup from './util/TransitionGroup.js';

function App() {
	return (
		<div id="App">
			<Router>
				<Navbar></Navbar>
				<div id="body">
					<TransitionGroup>
						<Route path="/" element={<About />} />
						<Route path="/projects" element={<Projects />} />
						<Route path="/stack" element={<Stack />} />
						<Route
							path="*"
							element={
								<h1 style={{ textAlign: 'center', margin: '4rem' }}>404</h1>
							}
						/>
					</TransitionGroup>
				</div>
			</Router>
		</div>
	);
}

export default App;
