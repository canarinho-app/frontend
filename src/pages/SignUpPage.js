import React from 'react';
import './SignUpPage.css';
import './LoginPage.css';
import { Row, Col, Image, Form, Button } from 'react-bootstrap';
import Footer from './../components/footer/Footer'
import canarinho from './../assets/images/canarinho.svg';
import profilePhoto from './../assets/images/cutmypic.png';

const SignUpPage = (props) => {
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

                            <Form.Control className="signup-input" size="lg" placeholder="Username" />

                            <Form.Control className="signup-input" size="lg" placeholder="Display name" />

                            <Form.Control className="signup-input" size="lg" placeholder="Email" />

                            <Form.Control className="signup-input" size="lg" placeholder="Password" type="password" />

                            <Form.Control className="signup-input" size="lg" placeholder="Repeat your password" type="password" />


                            <Button className="signup-button" variant="primary" size="lg">Sign up</Button>
                        </Row>
                    </Form>
                </Col>
            </Row>
            <Footer />
        </div>
    );
}

export default SignUpPage;