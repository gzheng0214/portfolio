/*
 * @Author: Gavin
 * @Date:   2021-02-10 00:37:08
 * @Last Modified by:   Gavin
 * @Last Modified time: 2021-02-10 04:14:24
 */
import React from 'react';

const Card = (props) => {
    return (
        <div className="card">
		<div className="card-container">
			<div className="image-container">
			<div className="image-container__bar">
			<div className="circle">
			</div>
			</div>
			<div className={"image-container__image"}>
			<img src={props.img} alt={props.alt} />
			</div>
			</div>
			<div className="card__text">
			<div className="card__title">
			<h3>{props.title}</h3>
			<div>
			<a href={props.demo} target="_blank" rel="noopener noreferrer">Demo</a>
			<a href={props.github} target="_blank" rel="noopener noreferrer">Source</a>
			</div>
			</div>
				<ul className="card__skills">
					{props.skills.map((skill, index) => <li key={index}>{skill}</li>)}
				</ul>
			<p>{props.description}</p>
			<div className="card__links">
			</div>
			</div>
		</div>
		<div className="card__border">
			</div>
		</div>
    );
};

export default Card;