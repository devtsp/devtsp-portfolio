import React from 'react';

import styles from './Stack.module.scss';

import {
	react,
	redux,
	node,
	express,
	mongodb,
	mysql,
	graphql,
	apollo,
	sass,
	jest,
	cypress,
	rtl,
	git,
} from '../constants/stack';

const Stack = () => {
	return (
		<section className={styles.container}>
			<h1 className={styles.header}>
				I have hands-on experience on building <span>client</span> and{' '}
				<span>server</span> side applications with the following tools:
			</h1>
			<div className={styles.separator}></div>
			<abbr title="React">
				<img src={process.env.PUBLIC_URL + react} alt="react" />
			</abbr>
			<abbr title="Redux">
				<img src={process.env.PUBLIC_URL + redux} alt="redux" />
			</abbr>
			<abbr title="Node">
				<img src={process.env.PUBLIC_URL + node} alt="node" />
			</abbr>
			<abbr title="Express">
				<img src={process.env.PUBLIC_URL + express} alt="express" />
			</abbr>
			<abbr title="Mongo DB">
				<img src={process.env.PUBLIC_URL + mongodb} alt="mongodb" />
			</abbr>
			<abbr title="MySQL">
				<img src={process.env.PUBLIC_URL + mysql} alt="mysql" />
			</abbr>
			<abbr title="GraphQL">
				<img src={process.env.PUBLIC_URL + graphql} alt="graphql" />
			</abbr>
			<abbr title="Apollo">
				<img src={process.env.PUBLIC_URL + apollo} alt="apollo" />
			</abbr>
			<abbr title="Sass">
				<img src={process.env.PUBLIC_URL + sass} alt="sass" />
			</abbr>
			<abbr title="Jest">
				<img src={process.env.PUBLIC_URL + jest} alt="jest" />
			</abbr>
			<abbr title="Cypress">
				<img src={process.env.PUBLIC_URL + cypress} alt="cypress" />
			</abbr>
			<abbr title="Testing Library">
				<img src={process.env.PUBLIC_URL + rtl} alt="testing-library" />
			</abbr>
			<abbr title="Git">
				<img src={process.env.PUBLIC_URL + git} alt="git" />
			</abbr>
			<div className={styles.separator}></div>
		</section>
	);
};

export default Stack;
