/*
* @Author: Gavin
* @Date:   2021-02-07 02:56:29
* @Last Modified by:   Gavin
* @Last Modified time: 2021-02-07 19:22:02
*/
import React from 'react';
import { ReactComponent as Arrow } from '../images/arrow.svg';

const ListItem = (props) => {
	return (
		<p className="listItem" style={props.style ? props.style : {}}>
			<Arrow />
			{props.text.toUpperCase()}
		</p>
	);
};

export default ListItem;