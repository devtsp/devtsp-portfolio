import React from 'react';

// import html from '/img/stack icons/html.svg';
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
	html: '/img/stack icons/html.svg',
	css: '/img/stack icons/css.svg',
	javascript: '/img/stack icons/javascript.svg',
	node: '/img/stack icons/node.png',
	express: '/img/stack icons/exrpess.png',
	mongodb: '/img/stack icons/mongodb.png',
	mysql: '/img/stack icons/mysql.png',
	graphql: '/img/stack icons/graphql.png',
	apollo: '/img/stack icons/apollo.png',
	react: '/img/stack icons/react.svg',
	redux: '/img/stack icons/redux.png',
	semanticui: '/img/stack icons/senanticui.png',
	git: '/img/stack icons/git.png',
	github: '/img/stack icons/github.png',
	bootstrap: '/img/stack icons/bootstrap.png',
	sass: '/img/stack icons/sass.png',
	jest: '/img/stack icons/jest.png',
	cypress: '/img/stack icons/cypress.svg',
};

const Stack = () => {
	return (
		<div id="Stack">
			<h1>
				I have hands-on experience on building <span>client</span> and{' '}
				<span>server</span> side applications with the following tools:
			</h1>
			<div className="separator"></div>
			<img src={stack.html} alt="html" />
			<img src={stack.css} alt="css" />
			<img src={stack.javascript} alt="javascript" />
			<img src={stack.node} alt="node" />
			<img src={stack.express} alt="express" />
			<img src={stack.mongodb} alt="mongodb" />
			<img src={stack.mysql} alt="mysql" />
			<img src={stack.graphql} alt="graphql" />
			<img src={stack.apollo} alt="apollo" />
			<img src={stack.react} alt="react" />
			<img src={stack.semanticui} alt="semantic ui" />
			<img src={stack.redux} alt="redux" />
			<img src={stack.git} alt="git" />
			<img src={stack.github} alt="github" />
			<img src={stack.bootstrap} alt="bootstrap" />
			<img src={stack.sass} alt="sass" />
			<img src={stack.jest} alt="jest" />
			<img src={stack.cypress} alt="cypress" />
			<div className="separator"></div>
		</div>
	);
};

export default Stack;
