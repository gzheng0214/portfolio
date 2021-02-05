/*
 * @Author: Gavin
 * @Date:   2021-01-30 01:44:33
 * @Last Modified by:   Gavin
 * @Last Modified time: 2021-02-05 17:52:07
 */
import React, { useState, useEffect } from 'react';
import { ReactComponent as Logo } from '../images/faceIcon.svg';
import NavbarLinks from './NavbarLinks';

const Navbar = () => {
    const [open, setOpen] = useState(false);

    const onClick = (e) => {
        e.preventDefault();
        if (!e.target.closest('a')) return;
        setOpen(!open);
    };

    const menuClassName = open ? 'navbar__hamburger--open' : 'navbar__hamburger--closed';

    useEffect(() => {
        window.matchMedia("(min-width: 801px)").addListener((x) => {
            if (x.matches) {
                setOpen(false);
            }
        });
    }, []);

    useEffect(() => {
        if (open) {
            document.body.classList.add('noScroll');
        } else {
            document.body.classList.remove('noScroll');
        }
    }, [open]);

    return (
        <nav className="navbar">
		<div className="logo">
			<Logo />
			<span className="logo__text">Gavin</span>
		</div>
		<NavbarLinks className="" onClick={onClick} />
		<NavbarLinks className="--mobile" onClick={onClick} style={open ? {transform: "translateX(0)"} : {}} />
		<div className="navbar__hamburger" onClick={() => setOpen(!open)} >
			<span className={menuClassName}></span>
		</div>
		</nav>
    );
};

export default Navbar;