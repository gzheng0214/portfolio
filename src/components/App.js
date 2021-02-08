/*
* @Author: Gavin
* @Date:   2021-01-29 19:11:25
* @Last Modified by:   Gavin
* @Last Modified time: 2021-02-08 13:27:04
*/
import React from 'react';
import About from './About';
import Hero from './Hero';
import ListSkills from './ListSkills';

const App = () => {
	return (
		<React.Fragment>
		<Hero />
		<ListSkills />
		<About />
		</React.Fragment>
	);
}

export default App;