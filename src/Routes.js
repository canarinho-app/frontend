import React from 'react';
import { Switch, Route, Redirect } from 'react-router'

import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignUpPage';

export default props => (
    <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route path='/login' component={LoginPage}/>
        <Route path='/signup' component={SignupPage}/>
        <Redirect from='*' to='/'/>
    </Switch>
);