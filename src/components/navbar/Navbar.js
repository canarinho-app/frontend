import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import { Image } from 'react-bootstrap';

import canarinho from '../../assets/images/canarinho.svg';
import profilePhoto from '../../assets/images/cutmypic.png';

const Navbar = (props) => {
    return (
        <aside class="menu-area">
            <nav className="menu">
                <Link to="/" className="home-navbar">Home</Link>
                <Link to="/notifications" className="notification-navbar">Notifications</Link>
                <Image src={canarinho} className="logo-navbar" alt="logo" fluid/> 
                <i className="fas fa-search"></i>
                <text className="search-navbar">Search</text>
                <Image src={profilePhoto} className="profile-photo-navbar" alt="photo"/>
            </nav>
        </aside>

    );
}

export default Navbar;