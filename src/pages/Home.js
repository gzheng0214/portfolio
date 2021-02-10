/*
* @Author: Gavin
* @Date:   2021-01-29 19:11:25
* @Last Modified by:   Gavin
* @Last Modified time: 2021-02-10 15:18:38
*/
import React from 'react';
import About from '../components/About';
import Hero from '../components/Hero';
import ListSkills from '../components/ListSkills';
import Projects from '../components/Projects';
import Contact from '../components/Contact';

const App = () => {
	return (
		<React.Fragment>
		<Hero />
		<ListSkills />
		<About />
		<Projects />
		<Contact />
		</React.Fragment>
	);
}

export default App;