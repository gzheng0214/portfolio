/*
 * @Author: Gavin
 * @Date:   2021-01-29 18:58:50
 * @Last Modified by:   Gavin
 * @Last Modified time: 2021-02-09 15:52:50
 */
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import './scss/main.scss';

ReactDOM.render(
    <Router>
		<Switch>
			<Route exact path="/" component={Home} />
			<Route component={NotFound} />
		</Switch>
	</Router>,
    document.querySelector('#root')
);