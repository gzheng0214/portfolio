/*
 * @Author: Gavin
 * @Date:   2021-02-10 18:48:08
 * @Last Modified by:   Gavin
 * @Last Modified time: 2021-02-10 18:51:57
 */
import React from 'react';
import SocialIcon from './SocialIcon';
import { ReactComponent as Github } from '../images/github.svg';
import { ReactComponent as Linkedin } from '../images/linkedin.svg';
import { ReactComponent as Mail } from '../images/mail.svg';

const SocialIcons = (props) => {
    return (
        <div className="socialIcons" style={props.style ? props.style : {}} >
			<SocialIcon url="https://github.com/gzheng0214"><Github /></SocialIcon>
			<SocialIcon url="https://linkedin.com/in/gzheng0214"><Linkedin /></SocialIcon>
			<SocialIcon url="mailto:gzheng0214@gmail.com"><Mail /></SocialIcon>
		</div>
    );
};

export default SocialIcons;