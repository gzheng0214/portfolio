/*
 * @Author: Gavin
 * @Date:   2021-02-09 15:48:35
 * @Last Modified by:   Gavin
 * @Last Modified time: 2021-02-09 16:04:05
 */
import React from 'react';
import { Link } from 'react-router-dom';
import ListItem from '../components/ListItem';

const NotFound = () => {
    return (
        <div className="error">
        <h1>404</h1>
        <h2>Page Not Found</h2>
			<div className="contact-button">
				<Link className="" to="/"><ListItem text="Go Home" /></Link>
			</div>
		</div>
    );
};

export default NotFound;