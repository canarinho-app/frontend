import React, { Component } from "react";
import './Navbar.css';
import { Container, Image, ButtonToolbar, Navbar, Nav, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import canarinho from '../../assets/images/canarinho.svg';
import defaultPhoto from '../../assets/images/cutmypic.png';


const uploads = 'http://localhost:3001/uploads/';

class NavbarCanarinho extends Component {
    constructor(props) {
        super(props);
        this.state = {
            search: ''
        }
    }

    handleChangeSearch = event => {
        this.setState({search: event.target.value});
    }

    render(props) {
        return (
            <Container>
                <Navbar className="menu-area" fixed="top">
                    <Nav className="menu">
                        <ButtonToolbar>
                            <Link to={{ pathname: '/home', state: { isLoggedIn: true, username: this.props.user.username } }} className="home-navbar" variant="outline-none">
                                Pagina Inicial
                            </Link>
                            <Link className="notification-navbar" variant="outline-none">Notificações</Link>
                            <Image src={canarinho} className="logo-navbar" alt="logo" fluid />
                            <Form.Control className="search-form " type="text" onChange={this.handleChangeSearch} />
                            <Link to={{ pathname: '/search', state: {search: this.state.search, user: this.props.user} }} className="search-navbar" variant="outline-none"
                                >
                                <i className="fas fa-search"></i>
                                Pesquisar
                            </Link>
                            <Link to={{ pathname: '/profile', state: this.props.user }}>
                                <Image src={this.props.user.profileImg ? `${uploads}${this.props.user.profileImg}` : defaultPhoto} className="profile-photo-navbar" alt="photo" />
                            </Link>
                            <Link to={{ pathname: '/login', state: { isLoggedIn: false} }} className="logout-navbar" variant="outline-none">
                                Sair
                            </Link>
                        </ButtonToolbar>
                    </Nav>
                </Navbar>
            </Container>

        );
    }
}

export default NavbarCanarinho;