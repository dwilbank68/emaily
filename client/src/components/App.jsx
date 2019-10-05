import React, {useEffect} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {connect} from 'react-redux';
import * as actions from '../actions/index.js';

import Dashboard from './Dashboard.jsx';                                              
import Header from './Header.jsx';                                              
import Landing from './Landing.jsx';                                              
import SurveyNew from './surveys/SurveyNew.jsx';                                              
import OrderNew from './surveys/OrderNew.jsx';                                              
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
                        <Route exact path="/surveys" component={Dashboard} />
                        <Route exact path="/surveys/new" component={SurveyNew} />
                        <Route exact path="/orders/new" component={OrderNew} />
                    </Switch>
                </div>
            </BrowserRouter>  
        </div>
    );
}

export default connect(null, actions)(App);