/*
 * @Author: Gavin
 * @Date:   2021-01-29 19:19:35
 * @Last Modified by:   Gavin
 * @Last Modified time: 2021-02-08 01:28:29
 */
import React from 'react';
import Navbar from './Navbar';
import ListItem from './ListItem';
import OrangeLine from './OrangeLine';
import SocialIcon from './SocialIcon';
import computer from '../images/computer.png';
import { ReactComponent as Github } from '../images/github.svg';
import { ReactComponent as Linkedin } from '../images/linkedin.svg';
import { ReactComponent as Mail } from '../images/mail.svg';

const Hero = () => {
    return (
        <header className="header">
			<Navbar />
			<div className="container">
			<div className="content">
			<div className="content__left">
			<OrangeLine />
			<h1>Welcome to my <br /> Personal Website</h1>
			<p>Let's create something amazing together!</p>
			</div>
			<div className="content__right">
				<img src={computer} alt="Computer" />
				<div className="socialIcons">
					<SocialIcon url="https://github.com/gzheng0214"><Github /></SocialIcon>
					<SocialIcon url="https://linkedin.com/in/gzheng0214"><Linkedin /></SocialIcon>
					<SocialIcon url="mailto:gzheng0214@gmail.com"><Mail /></SocialIcon>
				</div>
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