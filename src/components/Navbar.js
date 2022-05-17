import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const activeStyle = {
	textShadow: '0 0 5px -1px black',
	color: 'YellowGreen',
};

const Navbar = () => {
	return (
		<div id="Navbar">
			<NavLink to="/" style={({ isActive }) => (isActive ? activeStyle : null)}>
				ABOUT
			</NavLink>
			<NavLink
				to="projects"
				style={({ isActive }) => (isActive ? activeStyle : null)}
			>
				PROJECTS
			</NavLink>
			<NavLink
				to="stack"
				style={({ isActive }) => (isActive ? activeStyle : null)}
			>
				STACK
			</NavLink>
		</div>
	);
};

export default Navbar;
