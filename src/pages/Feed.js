import React, { Component } from "react";
import './Feed.css';
import { Button, Image, Row, Col } from 'react-bootstrap';

import Navbar from './../components/navbar/Navbar';
import defaultPhoto from './../assets/images/cutmypic.png';
import PostCard from './../components/post/PostCard';

const uploads = 'http://localhost:3001/uploads/';

class Feed extends Component {
    constructor(props) {
        super(props);
    }

    render(props) {
        return (
            <div>
                <Navbar user = {this.props.user}/>
                <div className="feed-page">
                    <Row className="justify-content-md-center no-margin">
                        <Col md="auto">
                            <div className="content-box">
                                <Row className="justify-content-md-center align-items-center no-margin login-input-box profile-info">
                                    <Col xs="4">
                                        <Image src={this.props.user.profileImg ? `${uploads}${this.props.user.profileImg}` : defaultPhoto} className="profile-info-photo" alt="photo" />
                                    </Col>
                                    <Col xs="5" className="profile-info-text">
                                        <Col className="no-padding displayname-text">
                                            <div>{this.props.user.displayname}</div>
                                        </Col>
                                        <Col className="no-padding username-text">
                                            <div>{this.props.user.username}</div>
                                        </Col>
                                        <Col>
                                            <Row>
                                                <span className="fol-counter-number">{this.props.user.followers.length}</span>
                                                <span className="fol-counter-label">Following</span>
                                                <span className="fol-counter-number">{this.props.user.following.length}</span>
                                                <span className="fol-counter-label">Followers</span>
                                            </Row>
                                        </Col>
                                    </Col>
                                    <Col xs="3">
                                        <Button className="edit-profile-button" variant="primary" size="lg">Edit Profile</Button>
                                    </Col>
                                </Row>
                                <PostCard />

                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
        );
    }
}
export default Feed;