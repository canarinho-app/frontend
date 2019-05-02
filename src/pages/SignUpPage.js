import React, { Component } from 'react';
import './SignUpPage.css';
import './LoginPage.css';
import { Row, Col, Image, Form, Button } from 'react-bootstrap';
import Footer from './../components/footer/Footer'
import canarinho from './../assets/images/canarinho.svg';
import profilePhoto from './../assets/images/cutmypic.png';
import { Api } from './../service/Api.js'

class SignUpPage extends Component{
    constructor(props) {
        super(props);
        this.state = {
            displayname: "",
            username: "",
            email: "",
            password: "",
            passwordRep: ""
        }
    }

    handleInputChange = property => event => {
        this.setState({...this.state, [property]: event.target.value});
    }

    submit = async() => {

        if(this.state.password !== this.state.passwordRep) {
            alert("Passwords did not match!");
            return;
        }

        let user = {
            displayname: this.state.displayname,
            username: this.state.username,
            email: this.state.email,
            password: this.state.password
        }
        await Api.post('user', user);
    }

    render() {
        return (
            <div className="signup-page">
                <Row>
                    <Col xs={6} md={3} className="logo-side">
                        <div className="canarinho-logo">
                            <Image src={canarinho} alt="logo" fluid />
                            <div className="signup-logo-title">Canarinho</div>
                        </div>
                    </Col>
                    <Col xs={6} md={9} className="form-box">
                        <div className="text-center">
                            <div className="signup-text">Sign up for Canarinho</div>
                            <Image src={profilePhoto} className="profile-photo" alt="photo" />
                            <div>
                                <a href="" className="select-photo">Select your profile photo</a>
                            </div>
                        </div>
    
                        <Form>
                            <Row className="justify-content-md-center no-margin signup-input-box">
    
                                <Form.Control className="signup-input" size="lg" placeholder="Username" onChange={this.handleInputChange("username")}/>
    
                                <Form.Control className="signup-input" size="lg" placeholder="Display name" onChange={this.handleInputChange("displayname")}/>
    
                                <Form.Control className="signup-input" size="lg" placeholder="Email" onChange={this.handleInputChange("email")}/>
    
                                <Form.Control className="signup-input" size="lg" placeholder="Password" type="password" onChange={this.handleInputChange("password")}/>
    
                                <Form.Control className="signup-input" size="lg" placeholder="Repeat your password" type="password" onChange={this.handleInputChange("passwordRep")}/>
    
    
                                <Button className="signup-button" variant="primary" size="lg" onClick={this.submit} href="/">Sign up</Button>
                            </Row>
                        </Form>
                    </Col>
                </Row>
                <Footer />
            </div>
        );
    }
}

export default SignUpPage;