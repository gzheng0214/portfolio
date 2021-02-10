/*
* @Author: Gavin
* @Date:   2021-02-09 01:34:49
* @Last Modified by:   Gavin
* @Last Modified time: 2021-02-10 03:30:23
*/
import React from 'react';
import Title from './Title';
import Card from './Card';
import projects from '../content/projects';

const Projects = () => {

	const renderCard = () => {
		const cards = projects.map(project => <Card key={project.title} skills={project.skills} img={project.img} alt={project.title} title={project.title} description={project.description} demo={project.url.demo} github={project.url.github} /> );
		return cards;
	}

	return (
		<section className="projects">
			<Title text="<Projects>" />
			<div className="projects__container">
			{renderCard()}
			</div>
		</section>
	);
};

export default Projects;