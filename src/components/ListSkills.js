/*
* @Author: Gavin
* @Date:   2021-02-07 02:53:31
* @Last Modified by:   Gavin
* @Last Modified time: 2021-02-07 04:09:44
*/
import Raact from 'react';
import ListItem from './ListItem';

const ListSkills = () => {

	return (
		<section class="listSkills">
			<ListItem text="html" />
			<ListItem text="css/scss" />
			<ListItem text="javascript" />
			<ListItem text="react" />
			<ListItem text="python" />
		</section>
	);
};

export default ListSkills;