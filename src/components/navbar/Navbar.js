import React, { Component } from "react";
import './Navbar.css';
import { Container, Image, ButtonToolbar, Button, Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import canarinho from '../../assets/images/canarinho.svg';
import defaultPhoto from '../../assets/images/cutmypic.png';

const uploads = 'http://localhost:3001/uploads/';

class NavbarCanarinho extends Component {

    render(props) {
        return (
            <Container>
                <Navbar className="menu-area" fixed="top">
                    <Nav class="menu">
                        <Image src={canarinho} className="logo-navbar" alt="logo" fluid />
                        <ButtonToolbar>
                            <Link to={{ pathname: '/home', state: { isLoggedIn: true, username: this.props.user.username } }} className="home-navbar" variant="outline-none">
                                Home
                            </Link>
                            <Button href="/notification" className="notification-navbar" variant="outline-none">Notifications</Button>
                            <i className="fas fa-search"></i>
                            <Button className="search-navbar" variant="outline-none">Search</Button>
                            <Link to={{ pathname: '/profile', state: this.props.user }}>
                                <Image src={this.props.user.profileImg ? `${uploads}${this.props.user.profileImg}` : defaultPhoto} className="profile-photo-navbar" alt="photo" />
                            </Link>
                        </ButtonToolbar>
                    </Nav>
                </Navbar>
            </Container>

        );
    }
}

export default NavbarCanarinho;