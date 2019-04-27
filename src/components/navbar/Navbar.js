import React from 'react';
import './Navbar.css';
import { Image, ButtonToolbar, Button } from 'react-bootstrap';

import canarinho from '../../assets/images/canarinho.svg';
import profilePhoto from '../../assets/images/cutmypic.png';

const Navbar = (props) => {
    return (
        <aside class="menu-area">
            <nav className="menu">
                <ButtonToolbar>
                    <Button href="/" className="home-navbar" variant="outline-none">Home</Button>
                    <Button href="/notification" className="notification-navbar" variant="outline-none">Notifications</Button>
                    <Image src={canarinho} className="logo-navbar" alt="logo" fluid/> 
                    <i className="fas fa-search"></i>
                    <Button className="search-navbar" variant="outline-none">Search</Button>
                    <Image src={profilePhoto} className="profile-photo-navbar" alt="photo"/>
                </ButtonToolbar>
            </nav>
        </aside>

    );
}

export default Navbar;