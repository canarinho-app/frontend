import React, { Component } from 'react';
import './HomePage.css';

import Navbar from '../components/navbar/Navbar';

class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoggedIn: props.isLoggedIn
        }
    }
    
    // handleIsLoggedIn(props) {
    //     this.setState({ isLoggedIn: props.isLoggedIn });
    // }

    render(props) {
        return( 
            <div>
                {this.state.isLoggedIn && (

                    <Navbar/>    
                )}
            </div>

        );
    }
} 

export default HomePage;