import { Link } from 'react-router-dom';

import styles from './About.module.scss';

const About = () => {
	return (
		<section className={styles.container}>
			<header className={styles.header}>
				<img src={process.env.PUBLIC_URL + '/img/me.png'} alt="tomas paez" />
				<div>
					<h1>
						<span>Tomas Paez</span>
						Fullstack Javascript developer
					</h1>
					<p>
						Contact me at&nbsp;
						<a href="mailto:paeztms@gmail.com" target="_blank" rel="noreferrer">
							paeztms@gmail.com
						</a>
						<br />
						Checkout my{' '}
						<a
							href="https://github.com/devtsp"
							target="_blank"
							rel="noreferrer"
						>
							github
						</a>
					</p>
				</div>
			</header>
		</section>
	);
};

export default About;
