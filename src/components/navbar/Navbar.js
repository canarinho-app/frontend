import React from 'react';
import './Navbar.css';
import { Container, Image, ButtonToolbar, Button, Navbar, Nav } from 'react-bootstrap';

import canarinho from '../../assets/images/canarinho.svg';
import profilePhoto from '../../assets/images/cutmypic.png';

const NavbarCanarinho = (props) => {
    return (
        <Container>
            <Navbar className="menu-area" fixed="top">
                <Nav class="menu">
                        <Image src={canarinho} className="logo-navbar" alt="logo" fluid/> 
                    <ButtonToolbar>
                        <Button href="/" className="home-navbar" variant="outline-none">Home</Button>
                        <Button href="/notification" className="notification-navbar" variant="outline-none">Notifications</Button>
                        <i className="fas fa-search"></i>
                        <Button className="search-navbar" variant="outline-none">Search</Button>
                        <Image src={profilePhoto} className="profile-photo-navbar" alt="photo"/>
                    </ButtonToolbar>
                </Nav>
            </Navbar>
        </Container>

    );
}

export default NavbarCanarinho;