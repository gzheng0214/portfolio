/*
 * @Author: Gavin
 * @Date:   2021-01-30 01:44:33
 * @Last Modified by:   Gavin
 * @Last Modified time: 2021-02-08 01:54:05
 */
import React, { useState, useEffect, useCallback } from 'react';
import { ReactComponent as Logo } from '../images/faceIcon.svg';
import NavbarLinks from './NavbarLinks';

const Navbar = () => {
    const [open, setOpen] = useState(false);
    const [scrollPosition, setScrollPosition] = useState(0);
    const [visible, setVisible] = useState(true);

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

    useEffect(() => {
        window.addEventListener('scroll', () => {
            const navbar = document.querySelector('.navbar');
            navbar.classList.toggle("sticky", window.scrollY > 0);
        });
    }, []);

    const handleScroll = useCallback(() => {
        const currentScrollPos = window.pageYOffset;
        setVisible((scrollPosition > currentScrollPos) || currentScrollPos < 10);
        setScrollPosition(currentScrollPos);
    }, [scrollPosition]);



    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll)
        };
    }, [scrollPosition, visible, handleScroll]);

    const onClick = (e) => {
        e.preventDefault();
        if (!e.target.closest('li')) return;
        if (e.target.closest('li').classList.value.includes('--mobile')) {
            setOpen(!open)
        }
    };

    const menuClassName = open ? 'navbar__hamburger--open' : 'navbar__hamburger--closed';

    return (
        <nav className="navbar" style={{top: visible ? '0' : `-${document.querySelector('.navbar').offsetHeight}px`}}>
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