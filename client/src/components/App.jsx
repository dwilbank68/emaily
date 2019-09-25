import React, {useEffect} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {connect} from 'react-redux';
import * as actions from '../actions/index.js';

import Header from './Header.jsx';                                              
import Landing from './Landing.jsx';                                              
// import logo from './logo.svg';
// import './App.css';

function App({fetchUser}) {
	useEffect(
        () => {fetchUser()},
        []
    )	

    return (
        <div className="container">
            <BrowserRouter>
                <div>
                    <Header/>
                    <Switch>
                        <Route exact path="/" component={Landing} />
                    </Switch>
                </div>
            </BrowserRouter>  
        </div>
    );
}

export default connect(null, actions)(App);