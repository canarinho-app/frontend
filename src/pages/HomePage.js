import React, { Component } from 'react';
import axios from 'axios'
import './HomePage.css';
import Navbar from '../components/navbar/Navbar';
import Feed from '../pages/Feed';

class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoggedIn: props.location.state.isLoggedIn,
            username: props.location.state.username,
            user: {
                displayname: '',
                followers: [],
                following: [],
                profileImg: '',
                email: '',
                username: ''


            }
        }
    }
    
    componentDidMount() {
        axios.get('http://localhost:3001/user?username=' + this.state.username)
            .then(res => this.setState({ user: res.data }));
    }
    
    render(props) {
        return( 
            <div>
                {this.state.isLoggedIn && (
                    <div >
                        <Feed {...this.state}/>    
                    </div>
                )}
            </div>

        );
    }
} 

export default HomePage;