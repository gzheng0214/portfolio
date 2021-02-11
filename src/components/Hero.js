/*
 * @Author: Gavin
 * @Date:   2021-01-29 19:19:35
 * @Last Modified by:   Gavin
 * @Last Modified time: 2021-02-10 18:59:52
 */
import React from 'react';
import Navbar from './Navbar';
import ListItem from './ListItem';
import SocialIcons from './SocialIcons';
import OrangeLine from './OrangeLine';
import computer from '../images/computer.png';

const Hero = () => {
    return (
        <header className="header">
			<Navbar />
			<div className="header__container">
			<div className="header-content">
			<div className="header-content__left">
			<OrangeLine />
			<h1>Welcome to my <br /> Personal Website</h1>
			<p>Let's create something amazing together!</p>
			</div>
			<div className="header-content__right">
				<img src={computer} alt="Computer" />
				<SocialIcons />
			</div>
			<div className="contact-button">
				<a href="mailto:gzheng0214@gmail.com"><ListItem text="Get in touch" /></a>
			</div>
			</div>
			</div>
	 		</header>
    );
};

export default Hero;