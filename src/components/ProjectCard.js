import React from 'react';
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

import styles from './ProjectCard.module.scss';

const ProjectCard = ({ project }) => {
	return (
		<article className={styles.container}>
			<div
				className={styles.image_container}
				onClick={() => window.open(project.site, '_blank')}
			>
				<Fade
					autoplay={true}
					duration={2000}
					arrows={false}
					pauseOnHover={false}
				>
					{project.previews.map((preview, i) => (
						<div className="each-fade" key={i}>
							<div className="image-container">
								<img
									key={i}
									src={process.env.PUBLIC_URL + preview}
									alt={project.title}
								/>
							</div>
						</div>
					))}
				</Fade>
			</div>
			{/* <h2 className={styles.project_title}># {project.title} </h2> */}
			<div className={styles.links}>
				<a href={project.sourceCode} target="_blank" rel="noreferrer">
					source code
				</a>
				{/* <a
					href={project.site}
					target="_blank"
					rel="noreferrer"
					style={project.deployed ? {} : disabledStyle}
				>
					go to site
				</a> */}
			</div>
		</article>
	);
};

const disabledStyle = {
	color: 'lightgray',
	pointerEvents: 'none',
};

export default ProjectCard;
