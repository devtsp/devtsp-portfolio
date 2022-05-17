import React from 'react';

import ProjectCard from '../components/ProjectCard';

const projects = [
	{
		title: 'social media',
		deployed: true,
		sourceCode: 'https://github.com/devtsp/social-media-app-client',
		site: 'https://delightful-cascaron-53270c.netlify.app/',
		img: '',
	},
	{
		title: 'blog',
		deployed: false,
		sourceCode: 'https://github.com/devtsp/blog',
		site: 'https://delightful-cascaron-53270c.netlify.app/',
		img: '',
	},
	{
		title: 'exchange rates',
		deployed: true,
		sourceCode: 'https://github.com/devtsp/exchange-rates',
		site: 'https://delightful-cascaron-53270c.netlify.app/',
		img: '',
	},
	{
		title: 'client manager',
		deployed: false,
		sourceCode: 'https://github.com/devtsp/node-client-manager',
		site: 'https://delightful-cascaron-53270c.netlify.app/',
		img: '',
	},
	{
		title: 'pokedex',
		deployed: false,
		sourceCode: 'https://github.com/devtsp/react-pokedex',
		site: 'https://delightful-cascaron-53270c.netlify.app/',
		img: '',
	},
	{
		title: 'memotest',
		deployed: true,
		sourceCode: 'https://github.com/devtsp/memotest',
		site: 'https://delightful-cascaron-53270c.netlify.app/',
		img: '',
	},
];

const Projects = () => {
	return (
		<div id="Projects">
			<ul>
				{projects.map(project => (
					<li key={project.title}>
						<ProjectCard project={project}></ProjectCard>
					</li>
				))}
			</ul>
		</div>
	);
};

export default Projects;
