import ProjectCard from '../components/ProjectCard';

import styles from './Projects.module.scss';

import projects from '../constants/projects';

const Projects = () => {
	return (
		<section className={styles.container}>
			<ul>
				{projects.map(project => (
					<li key={project.title}>
						<ProjectCard project={project}></ProjectCard>
					</li>
				))}
			</ul>
		</section>
	);
};

export default Projects;
