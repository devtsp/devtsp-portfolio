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
		deployed: true,
		sourceCode: 'https://github.com/devtsp/blog-client',
		site: 'https://devtsp.github.io/blog-client/',
		previews: [
			'/img/project%20previews/blog/1.jpg',
			'/img/project%20previews/blog/2.jpg',
			'/img/project%20previews/blog/3.jpg',
		],
	},
	{
		title: 'exchange rates',
		deployed: true,
		sourceCode: 'https://github.com/devtsp/exchange-rates-client',
		site: 'https://devtsp.github.io/exchange-rates-client/',
		previews: [
			'/img/project%20previews/exchange%20rates/1.jpg',
			'/img/project%20previews/exchange%20rates/2.jpg',
		],
	},
	{
		title: 'memotest',
		deployed: true,
		sourceCode: 'https://github.com/devtsp/memotest-client',
		site: 'https://devtsp.github.io/memotest-client/',
		previews: [
			'/img/project%20previews/memotest/1.jpg',
			'/img/project%20previews/memotest/2.jpg',
			'/img/project%20previews/memotest/3.jpg',
		],
	},
	{
		title: 'clubs',
		deployed: true,
		sourceCode: 'https://github.com/devtsp/football-clubs-client',
		site: 'https://devtsp.github.io/football-clubs-client/',
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
		sourceCode: 'https://github.com/devtsp/pokedex-vanilla-client',
		site: 'https://devtsp.github.io/pokedex-vanilla-client/',
		previews: [
			'/img/project%20previews/pokedex/1.jpg',
			'/img/project%20previews/pokedex/2.jpg',
		],
	},
];

export default Projects;
