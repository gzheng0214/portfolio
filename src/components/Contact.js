/*
 * @Author: Gavin
 * @Date:   2021-02-10 15:16:41
 * @Last Modified by:   Gavin
 * @Last Modified time: 2021-02-10 17:18:17
 */
import React, { useState } from 'react';
import Title from './Title';
import ListItem from './ListItem';

const Contact = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [nameError, setNameError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [messageError, setMessageError] = useState("");

    const validate = () => {
        let isValid = true;
        if (!name) {
            setNameError("Name cannot be blank");
            isValid = false;
        } else {
        	setNameError("");
        }
        if (!email.includes("@")) {
            setEmailError("Invalid email");
            isValid = false;
        } else {
        	setEmailError("");
        }
        if (!message) {
            setMessageError("Message cannot be blank");
            isValid = false;
        } else {
        	setMessageError("");
        }
        return isValid;
    }

    const handleChange = (e) => {
        switch (e.target.name) {
            case "name":
                setName(e.target.value);
                break;
            case "email":
                setEmail(e.target.value);
                break;
            case "message":
                setMessage(e.target.value);
                break;
            default:
                return;
        }
    };

    const handleSubmit = (e) => {
        const isValid = validate();
        if (isValid) {
        	setName("");
        	setEmail("");
        	setMessage("");
        	setNameError("");
        	setEmailError("");
        	setMessageError("");
        }
    };

    return (
        <section className="contact">
		<Title text="<Contact>" />
		<form name="contact" method="POST" onSubmit={handleSubmit} data-netlify="true">
		<div className="input">
		<label htmlFor="name">Name</label> 
		<p style={{color: 'red', fontSize: '1.4rem'}}>{nameError}</p>
		<input type="text" id="name" name="name" placeholder="Enter your name" onChange={handleChange} value={name} />
		</div>
		<div className="input">
		<label htmlFor="email">Email</label>
		<p style={{color: 'red', fontSize: '1.4rem'}}>{emailError}</p>
		<input type="text" id="email" name="email" placeholder="Enter your email" onChange={handleChange} value={email} />
		</div>
		<div className="input">
		<label htmlFor="message">Message</label>
		<p style={{color: 'red', fontSize: '1.4rem'}}>{messageError}</p>
		<textarea id="message" name="message" placeholder="Enter your message" onChange={handleChange} value={message} ></textarea>
		</div>
		<div className="input">
		<button type="submit"><ListItem text="Submit" on/></button>
		</div>
		</form>
	</section>
    );
};

export default Contact;