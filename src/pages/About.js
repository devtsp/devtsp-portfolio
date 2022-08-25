import { Link } from 'react-router-dom';

import styles from './About.module.scss';

const About = () => {
	return (
		<section className={styles.container}>
			<header className={styles.header}>
				<img src={process.env.PUBLIC_URL + '/img/me.png'} alt="tomas paez" />
				<h1 className={styles.title}>
					<span>I'm Tomas, </span>
					<span>Fullstack </span> <span> Javascript </span>
					<span> developer</span>
				</h1>
			</header>
			<div className={styles.separator}></div>
			<p className={styles.paragraph}>
				Constantly working on different kind of projects to expand my skills and
				explore new technologies.
			</p>
			<p className={`${styles.paragraph} ${styles.paragraph_important}`}>
				I prefer to let my work speak by itself. Take a look at some of my&nbsp;
				<Link to="/projects">PROJECTS</Link>
			</p>
			<div className={styles.separator}></div>
			<p className={`${styles.paragraph} ${styles.pargraph_last}`}>
				You can contact me at&nbsp;
				<a href="mailto:paeztms@gmail.com" target="_blank" rel="noreferrer">
					paeztms@gmail.com
				</a>
			</p>
		</section>
	);
};

export default About;
