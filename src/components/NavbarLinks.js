/*
 * @Author: Gavin
 * @Date:   2021-02-05 17:28:50
 * @Last Modified by:   Gavin
 * @Last Modified time: 2021-02-05 17:56:28
 */
import React from 'react';
import NavbarLink from './NavbarLink';

const NavbarLinks = (props) => {

    return (
        <ul className={'navbar__links' + props.className} onClick={props.onClick} style={props.style}>
			<NavbarLink className={props.className} text="about" />
			<NavbarLink className={props.className} text="skills" />
			<NavbarLink className={props.className} text="projects" />
			<NavbarLink className={props.className} text="contact" />
		</ul>
    );
};

export default NavbarLinks;