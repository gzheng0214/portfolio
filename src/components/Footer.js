/*
* @Author: Gavin
* @Date:   2021-02-10 18:41:26
* @Last Modified by:   Gavin
* @Last Modified time: 2021-02-10 18:55:23
*/
import React from 'react';
import SocialIcons from './SocialIcons';

const Footer = () => {
	return (
		<footer className="footer">
		<h3>gzheng0214@gmail.com</h3>
		<SocialIcons style={{flexDirection: 'row', height: "100%"}} />
		</footer>
	);
};

export default Footer;