import React, { Component } from 'react';
import './HomePage.css';

import Navbar from '../components/navbar/Navbar';
import Feed from '../pages/Feed';

class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoggedIn: props.location.state.isLoggedIn,
            username: props.location.state.username

        }
    }
    
    // handleIsLoggedIn(props) {
    //     this.setState({ isLoggedIn: props.isLoggedIn });
    // }
    
    render(props) {
        return( 
            <div>
                {this.state.isLoggedIn && (
                    <div >
                        {console.log(this.state.username)}
                        <Navbar/>
                        <Feed {...this.state}/>    
                    </div>
                )}
            </div>

        );
    }
} 

export default HomePage;