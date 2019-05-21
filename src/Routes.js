import React from 'react';
import { Switch, Route, Redirect } from 'react-router'

import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignUpPage';
import Feed from './pages/Feed'
import SearchPage from './pages/SearchPage';

export default props => (
    <Switch>
        <Route exact path='/login' component={LoginPage}/>
        <Route path='/home' component={HomePage}/>
        <Route path='/signup' component={SignupPage}/>
        <Route path= '/profile' component={Feed}/>
        <Route path='/search' component={SearchPage}/>
        <Redirect from='*' to='/login'/>
    </Switch>
);