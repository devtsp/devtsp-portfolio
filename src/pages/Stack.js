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
	azure,
	sqlServer,
	nextJs,
	svelte,
	nestjs,
	semanticui,
	materialui,
	tailwindcss,
	bootstrap,
} from '../constants/stack';

const Stack = () => {
	return (
		<section className={styles.container}>
			<div className={styles.separator}></div>
			<div className={styles.figuresContainer}>
				<div className={styles.figure}>
					<abbr title="React">
						<img src={process.env.PUBLIC_URL + react} alt="react" />
					</abbr>
					React
				</div>
				<div className={styles.figure}>
					<abbr title="Svelte">
						<img src={process.env.PUBLIC_URL + svelte} alt="Svelte" />
					</abbr>
					Svelte
				</div>
				<div className={styles.figure}>
					<abbr title="Redux">
						<img src={process.env.PUBLIC_URL + redux} alt="redux" />
					</abbr>
					Redux
				</div>
				<div className={styles.figure}>
					<abbr title="Node">
						<img src={process.env.PUBLIC_URL + node} alt="node" />
					</abbr>
					Node
				</div>
				<div className={styles.figure}>
					<abbr title="Express">
						<img src={process.env.PUBLIC_URL + express} alt="express" />
					</abbr>
					Express
				</div>
				<div className={styles.figure}>
					<abbr title="Nestjs">
						<img src={process.env.PUBLIC_URL + nestjs} alt="Nestjs" />
					</abbr>
					Nestjs
				</div>
				<div className={styles.figure}>
					<abbr title="Nextjs">
						<img src={process.env.PUBLIC_URL + nextJs} alt="Nextjs" />
					</abbr>
					Nextjs
				</div>
				<div className={styles.figure}>
					<abbr title="Mongo DB">
						<img src={process.env.PUBLIC_URL + mongodb} alt="mongodb" />
					</abbr>
					MongoDB
				</div>
				<div className={styles.figure}>
					<abbr title="SQLServer">
						<img src={process.env.PUBLIC_URL + sqlServer} alt="SQL Server" />
					</abbr>
					SQLServer
				</div>
				<div className={styles.figure}>
					<abbr title="MySQL">
						<img src={process.env.PUBLIC_URL + mysql} alt="mysql" />
					</abbr>
					MySQL
				</div>
				<div className={styles.figure}>
					<abbr title="Azure">
						<img src={process.env.PUBLIC_URL + azure} alt="azure" />
					</abbr>
					Azure
				</div>
				<div className={styles.figure}>
					<abbr title="GraphQL">
						<img src={process.env.PUBLIC_URL + graphql} alt="graphql" />
					</abbr>
					GraphQL
				</div>
				<div className={styles.figure}>
					<abbr title="Apollo">
						<img src={process.env.PUBLIC_URL + apollo} alt="apollo" />
					</abbr>
					Apollo
				</div>
				<div className={styles.figure}>
					<abbr title="MaterialUI">
						<img src={process.env.PUBLIC_URL + materialui} alt="MaterialUI" />
					</abbr>
					MaterialUI
				</div>
				<div className={styles.figure}>
					<abbr title="Sass">
						<img src={process.env.PUBLIC_URL + sass} alt="sass" />
					</abbr>
					Sass
				</div>
				<div className={styles.figure}>
					<abbr title="TailwindCSS">
						<img src={process.env.PUBLIC_URL + tailwindcss} alt="TailwindCSS" />
					</abbr>
					TailwindCSS
				</div>
				<div className={styles.figure}>
					<abbr title="Bootstrap">
						<img src={process.env.PUBLIC_URL + bootstrap} alt="Bootstrap" />
					</abbr>
					Bootstrap
				</div>
				<div className={styles.figure}>
					<abbr title="SemanticUI">
						<img src={process.env.PUBLIC_URL + semanticui} alt="semanticui" />
					</abbr>
					SemanticUI
				</div>
				<div className={styles.figure}>
					<abbr title="Jest">
						<img src={process.env.PUBLIC_URL + jest} alt="jest" />
					</abbr>
					Jest
				</div>
				<div className={styles.figure}>
					<abbr title="Cypress">
						<img src={process.env.PUBLIC_URL + cypress} alt="cypress" />
					</abbr>
					Cypress
				</div>
				<div className={styles.figure}>
					<abbr title="Testing Library">
						<img src={process.env.PUBLIC_URL + rtl} alt="testing-library" />
					</abbr>
					Testing Library
				</div>
				<div className={styles.figure}>
					<abbr title="Git">
						<img src={process.env.PUBLIC_URL + git} alt="git" />
					</abbr>
					Git
				</div>
			</div>
			<div className={styles.separator}></div>
		</section>
	);
};

export default Stack;
