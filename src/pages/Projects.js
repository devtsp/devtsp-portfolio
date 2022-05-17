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
			'./img/project%20previews/social%20media/1.jpg',
			'./img/project%20previews/social%20media/2.jpg',
			'./img/project%20previews/social%20media/3.jpg',
		],
	},
	{
		title: 'blog',
		deployed: false,
		sourceCode: 'https://github.com/devtsp/blog',
		site: 'https://delightful-cascaron-53270c.netlify.app/',
		previews: [
			'./img/project%20previews/blog/1.jpg',
			'./img/project%20previews/blog/2.jpg',
			'./img/project%20previews/blog/3.jpg',
		],
	},
	{
		title: 'exchange rates',
		deployed: true,
		sourceCode: 'https://github.com/devtsp/exchange-rates',
		site: 'https://delightful-cascaron-53270c.netlify.app/',
		previews: [
			'./img/project%20previews/social%20media/1.jpg',
			'./img/project%20previews/social%20media/2.jpg',
			'./img/project%20previews/social%20media/3.jpg',
		],
	},
	{
		title: 'client manager',
		deployed: false,
		sourceCode: 'https://github.com/devtsp/node-client-manager',
		site: 'https://delightful-cascaron-53270c.netlify.app/',
		previews: [
			'./img/project%20previews/social%20media/1.jpg',
			'./img/project%20previews/social%20media/2.jpg',
			'./img/project%20previews/social%20media/3.jpg',
		],
	},
	{
		title: 'pokedex',
		deployed: false,
		sourceCode: 'https://github.com/devtsp/react-pokedex',
		site: 'https://delightful-cascaron-53270c.netlify.app/',
		previews: [
			'./img/project%20previews/social%20media/1.jpg',
			'./img/project%20previews/social%20media/2.jpg',
			'./img/project%20previews/social%20media/3.jpg',
		],
	},
	{
		title: 'memotest',
		deployed: true,
		sourceCode: 'https://github.com/devtsp/memotest',
		site: 'https://delightful-cascaron-53270c.netlify.app/',
		previews: [
			'./img/project%20previews/social%20media/1.jpg',
			'./img/project%20previews/social%20media/2.jpg',
			'./img/project%20previews/social%20media/3.jpg',
		],
	},
];

export default Projects;
