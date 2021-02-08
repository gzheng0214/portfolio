/*
* @Author: Gavin
* @Date:   2021-02-08 13:36:10
* @Last Modified by:   Gavin
* @Last Modified time: 2021-02-08 13:38:22
*/
import React from 'react';
import OrangeLine from './OrangeLine';

const Title = (props) => {
	return (
		<div className="title">
			<OrangeLine />
			<h1>{props.text}</h1>
		</div>
	);
};

export default Title;