import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';

import Navbar from '../navbar/Navbar';
import Routes from '../../Routes';
import LoginPage from '../../pages/LoginPage'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {isLoggedIn: false};
  }

  setIsLoggedIn(res) {
    if(res !== 400) {
      this.setState({isLoggedIn: true});
    }
  }

  render() {
    const isLoggedIn = this.state.isLoggedIn;
    return (
      <BrowserRouter>
          <Routes/>
        <div className="app">
          {/* {isLoggedIn && (<Navbar/>)} */}
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
