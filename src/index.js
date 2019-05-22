import React from 'react';
import ReactDOM from 'react-dom';
import { positions, Provider as AlertProvider } from 'react-alert'
import AlertTemplate from 'react-alert-template-basic'
import './index.css';
import App from './components/app/App';
import * as serviceWorker from './serviceWorker';


// optional cofiguration
const options = {
    position: positions.TOP_RIGHT,
    timeout: 5000,
    offset: '70px',
  }
   
  const Root = () => (
    <AlertProvider template={AlertTemplate} {...options}>
      <App />
    </AlertProvider>
  )

ReactDOM.render(<Root />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
