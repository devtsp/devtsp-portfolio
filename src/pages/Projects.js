import ProjectCard from '../components/ProjectCard';

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

const projects = [
	{
		title: 'social media',
		deployed: true,
		sourceCode: 'https://github.com/devtsp/social-media-app-client',
		site: 'https://delightful-cascaron-53270c.netlify.app/',
		previews: [
			'/img/project%20previews/social%20media/1.jpg',
			'/img/project%20previews/social%20media/2.jpg',
			'/img/project%20previews/social%20media/3.jpg',
		],
	},
	{
		title: 'blog',
		deployed: false,
		sourceCode: 'https://github.com/devtsp/blog',
		site: 'https://delightful-cascaron-53270c.netlify.app/',
		previews: [
			'/img/project%20previews/blog/1.jpg',
			'/img/project%20previews/blog/2.jpg',
			'/img/project%20previews/blog/3.jpg',
		],
	},
	{
		title: 'exchange rates',
		deployed: true,
		sourceCode: 'https://github.com/devtsp/exchange-rates',
		site: 'https://devtsp.github.io/exchange-rates/',
		previews: [
			'/img/project%20previews/exchange%20rates/1.jpg',
			'/img/project%20previews/exchange%20rates/2.jpg',
		],
	},
	{
		title: 'memotest',
		deployed: true,
		sourceCode: 'https://github.com/devtsp/memotest',
		site: 'https://devtsp.github.io/memotest/',
		previews: [
			'/img/project%20previews/memotest/1.jpg',
			'/img/project%20previews/memotest/2.jpg',
			'/img/project%20previews/memotest/3.jpg',
		],
	},
	{
		title: 'clubs',
		deployed: true,
		sourceCode: 'https://github.com/devtsp/crud-clubs-FRONT',
		site: 'https://devtsp.github.io/crud-clubs-FRONT/',
		previews: [
			'/img/project%20previews/clubs/1.jpg',
			'/img/project%20previews/clubs/2.jpg',
			'/img/project%20previews/clubs/3.jpg',
			'/img/project%20previews/clubs/4.jpg',
		],
	},
	{
		title: 'pokedex',
		deployed: true,
		sourceCode: 'https://github.com/devtsp/pokedex',
		site: 'https://devtsp.github.io/pokedex/',
		previews: [
			'/img/project%20previews/pokedex/1.jpg',
			'/img/project%20previews/pokedex/2.jpg',
		],
	},
];

export default Projects;
