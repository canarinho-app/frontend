import React from 'react';
import { Switch, Route, Redirect } from 'react-router'

import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignUpPage';

export default props => (
    <Switch>
        <Route exact path='/' component={LoginPage}/>
        <Route path='/home' component={HomePage}/>
        <Route path='/signup' component={SignupPage}/>
        <Redirect from='*' to='/'/>
    </Switch>
);