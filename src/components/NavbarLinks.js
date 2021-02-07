/*
 * @Author: Gavin
 * @Date:   2021-02-05 17:28:50
 * @Last Modified by:   Gavin
 * @Last Modified time: 2021-02-06 00:36:19
 */
import React from 'react';
import NavbarLink from './NavbarLink';

const NavbarLinks = (props) => {

	const sections = ["about", "skills", "projects", "contact"];

    return (
        <ul className={'navbar__links' + props.className} onClick={props.onClick} style={props.style}>
        	{sections.map(section => <NavbarLink key={section} className={props.className} text={section} />)}
		</ul>
    );
};

export default NavbarLinks;