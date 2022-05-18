import React from 'react';

// import html from '../public/img/stack icons/html.svg';
// import css from '../img/stack icons/css.svg';
// import javascript from '../img/stack icons/javascript.svg';
// import node from '../img/stack icons/node.png';
// import express from '../img/stack icons/express.png';
// import mongodb from '../img/stack icons/mongodb.png';
// import mysql from '../img/stack icons/mysql.png';
// import graphql from '../img/stack icons/graphql.png';
// import apollo from '../img/stack icons/apollo.png';
// import react from '../img/stack icons/react.svg';
// import redux from '../img/stack icons/redux.png';
// import semanticui from '../img/stack icons/semanticui.png';
// import git from '../img/stack icons/git.png';
// import github from '../img/stack icons/github.png';
// import bootstrap from '../img/stack icons/bootstrap.png';
// import sass from '../img/stack icons/sass.png';
// import jest from '../img/stack icons/jest.png';
// import cypress from '../img/stack icons/cypress.svg';

const stack = {
	html: '/img/stack%20icons/html.svg',
	css: '/img/stack%20icons/css.svg',
	javascript: '/img/stack%20icons/javascript.svg',
	node: '/img/stack%20icons/node.png',
	express: '/img/stack%20icons/express.png',
	mongodb: '/img/stack%20icons/mongodb.png',
	mysql: '/img/stack%20icons/mysql.png',
	graphql: '/img/stack%20icons/graphql.png',
	apollo: '/img/stack%20icons/apollo.png',
	react: '/img/stack%20icons/react.svg',
	redux: '/img/stack%20icons/redux.png',
	semanticui: '/img/stack%20icons/semanticui.png',
	git: '/img/stack%20icons/git.png',
	github: '/img/stack%20icons/github.png',
	bootstrap: '/img/stack%20icons/bootstrap.png',
	sass: '/img/stack%20icons/sass.png',
	jest: '/img/stack%20icons/jest.png',
	cypress: '/img/stack%20icons/cypress.svg',
};

const Stack = () => {
	return (
		<div id="Stack">
			<h1>
				I have hands-on experience on building <span>client</span> and{' '}
				<span>server</span> side applications with the following tools:
			</h1>
			<div className="separator"></div>
			<img src={process.env.PUBLIC_URL + stack.html} alt="html" />
			<img src={process.env.PUBLIC_URL + stack.css} alt="css" />
			<img src={process.env.PUBLIC_URL + stack.javascript} alt="javascript" />
			<img src={process.env.PUBLIC_URL + stack.node} alt="node" />
			<img src={process.env.PUBLIC_URL + stack.express} alt="express" />
			<img src={process.env.PUBLIC_URL + stack.mongodb} alt="mongodb" />
			<img src={process.env.PUBLIC_URL + stack.mysql} alt="mysql" />
			<img src={process.env.PUBLIC_URL + stack.graphql} alt="graphql" />
			<img src={process.env.PUBLIC_URL + stack.apollo} alt="apollo" />
			<img src={process.env.PUBLIC_URL + stack.react} alt="react" />
			<img src={process.env.PUBLIC_URL + stack.semanticui} alt="semantic ui" />
			<img src={process.env.PUBLIC_URL + stack.redux} alt="redux" />
			<img src={process.env.PUBLIC_URL + stack.git} alt="git" />
			<img src={process.env.PUBLIC_URL + stack.github} alt="github" />
			<img src={process.env.PUBLIC_URL + stack.bootstrap} alt="bootstrap" />
			<img src={process.env.PUBLIC_URL + stack.sass} alt="sass" />
			<img src={process.env.PUBLIC_URL + stack.jest} alt="jest" />
			<img src={process.env.PUBLIC_URL + stack.cypress} alt="cypress" />
			<div className="separator"></div>
		</div>
	);
};

export default Stack;
