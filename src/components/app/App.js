import React, { Component } from 'react';
import Navbar from '../navbar/Navbar';

import { BrowserRouter } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="app">
          <Navbar/>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
