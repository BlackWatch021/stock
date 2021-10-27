import React, { Component } from 'react'
import {  BrowserRouter as BRouter, Route } from "react-router-dom";

import Home from './containers/Home';
import About from './containers/About';
import Contact from './containers/Contact';


export default class Router extends Component {
    render() {
        return (
            <BRouter>
            <Route path="/" component={Home} exact></Route>
            <Route path="/About" component={About}></Route> 
            <Route path="/Contact" component={Contact}></Route> 
            </BRouter>
            
 
        )
    }
}
