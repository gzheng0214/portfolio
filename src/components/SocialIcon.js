/*
* @Author: Gavin
* @Date:   2021-02-07 05:33:07
* @Last Modified by:   Gavin
* @Last Modified time: 2021-02-07 06:37:24
*/
import React from 'react';

const SocialIcon = (props) => {
	return (
		<div className="socialIcon">
		<a className="socialIcon__image" href={props.url} rel="noopener" target="_blank">
		{props.children}
		</a>
		</div>
	);
};

export default SocialIcon;