import React from 'react';

import html from '../img/stack icons/html.svg';
import css from '../img/stack icons/css.svg';
import javascript from '../img/stack icons/javascript.svg';
import node from '../img/stack icons/node.png';
import express from '../img/stack icons/express.png';
import mongodb from '../img/stack icons/mongodb.png';
import mysql from '../img/stack icons/mysql.png';
import graphql from '../img/stack icons/graphql.png';
import apollo from '../img/stack icons/apollo.png';
import react from '../img/stack icons/react.svg';
import redux from '../img/stack icons/redux.png';
import semanticui from '../img/stack icons/semanticui.png';
import git from '../img/stack icons/git.png';
import github from '../img/stack icons/github.png';
import bootstrap from '../img/stack icons/bootstrap.png';
import sass from '../img/stack icons/sass.png';
import jest from '../img/stack icons/jest.png';
import cypress from '../img/stack icons/cypress.svg';

const Stack = () => {
	return (
		<div id="Stack">
			<h1>
				I have hands-on experience on building <span>client</span> and{' '}
				<span>server</span> side applications with the following tools:
			</h1>
			<div className="separator"></div>
			<img src={html} alt="html" />
			<img src={css} alt="css" />
			<img src={javascript} alt="javascript" />
			<img src={node} alt="node" />
			<img src={express} alt="express" />
			<img src={mongodb} alt="mongodb" />
			<img src={mysql} alt="mysql" />
			<img src={graphql} alt="graphql" />
			<img src={apollo} alt="apollo" />
			<img src={react} alt="react" />
			<img src={semanticui} alt="semantic ui" />
			<img src={redux} alt="redux" />
			<img src={git} alt="git" />
			<img src={github} alt="github" />
			<img src={bootstrap} alt="bootstrap" />
			<img src={sass} alt="sass" />
			<img src={jest} alt="jest" />
			<img src={cypress} alt="cypress" />
			<div className="separator"></div>
		</div>
	);
};

export default Stack;
