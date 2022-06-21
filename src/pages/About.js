import { Link } from 'react-router-dom';

const About = () => {
	return (
		<div id="About">
			<h1> &lt; Fullstack Javascript developer /&gt; </h1>
			<div className="separator"></div>
			<p>
				Constantly working on different kind of projects to expand my skills and
				strengthen the fundamentals.
			</p>
			<p>
				I prefer to let my work speak by itself. Take a look at some of my{' '}
				<Link to="/projects">PROJECTS</Link>
			</p>
			<div className="separator"></div>
			<p>
				You can contact me at{' '}
				<a href="mailto:paeztms@gmail.com" target="_blank" rel="noreferrer">
					paeztms@gmail.com
				</a>
			</p>
		</div>
	);
};

export default About;
