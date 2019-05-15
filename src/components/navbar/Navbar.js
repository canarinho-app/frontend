import React from 'react';
import './Navbar.css';
import { Container, Image, ButtonToolbar, Button, Navbar, Nav } from 'react-bootstrap';

import canarinho from '../../assets/images/canarinho.svg';
import defaultPhoto from '../../assets/images/cutmypic.png';

const uploads = 'http://localhost:3001/uploads/';
const NavbarCanarinho = (props) => {
    console.log(props)
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
                        <Image src={props.user.profileImg ? `${uploads}${props.user.profileImg}` : defaultPhoto} className="profile-photo-navbar" alt="photo" />
                    </ButtonToolbar>
                </Nav>
            </Navbar>
        </Container>

    );
}

export default NavbarCanarinho;