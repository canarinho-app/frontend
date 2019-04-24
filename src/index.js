import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/app/App';
import LoginPage from './pages/LoginPage'
import SignUpPage from './pages/SignUpPage'
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<SignUpPage />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
