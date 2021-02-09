/*
* @Author: Gavin
* @Date:   2021-01-29 19:11:25
* @Last Modified by:   Gavin
* @Last Modified time: 2021-02-09 01:36:17
*/
import React from 'react';
import About from './About';
import Hero from './Hero';
import ListSkills from './ListSkills';
import Projects from './Projects';

const App = () => {
	return (
		<React.Fragment>
		<Hero />
		<ListSkills />
		<About />
		<Projects />
		</React.Fragment>
	);
}

export default App;