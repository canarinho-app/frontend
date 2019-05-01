import React from "react";
import './Feed.css';
import { Button, Image, Form, Row, Col } from 'react-bootstrap';

import Navbar from './../components/navbar/Navbar';
import profilePhoto from './../assets/images/cutmypic.png';

const Feed = () => {
    return (
        <div>
            <Navbar/>
            <div className="feed-page">
                <Row className="justify-content-md-center no-margin">
                    <Col md="auto">
                            <div className="content-box">
                                
                                    <Row className="justify-content-md-center align-items-center no-margin login-input-box profile-info">
                                        <Col xs="4">
                                            <Image src={profilePhoto} className="profile-info-photo" alt="photo" />
                                        </Col>
                                        <Col xs="5" className="profile-info-text">
                                            <Col className="no-padding displayname-text">
                                                <div>Victor Borges</div>
                                            </Col>
                                            <Col className="no-padding username-text">
                                                <div>@victorborges</div>
                                            </Col>
                                            <Col className="no-padding">
                                                <Row>
                                                    <Col xs="2" className="fol-counter fol-counter-number">500</Col>
                                                    <Col xs="3" className="fol-counter fol-counter-label">Following</Col>
                                                    <Col xs="2" className="fol-counter fol-counter-number fol-counter-number-margin">501</Col>
                                                    <Col xs="3" className="fol-counter fol-counter-label">Followers</Col>
                                                </Row>
                                            </Col>
                                        </Col>
                                        <Col xs="3">
                                            <Button className="edit-profile-button" variant="primary" size="lg">Edit Profile</Button>
                                        </Col>
                                    </Row>
                                
                            </div>
                    </Col>
                </Row>
            </div>
        </div>
    );
  }
  
  export default Feed;