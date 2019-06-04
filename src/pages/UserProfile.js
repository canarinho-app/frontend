import React, { Component } from "react";
import './Feed.css';
import { Button, Image, Row, Col, Modal, Form } from 'react-bootstrap';
import defaultPhoto from './../assets/images/cutmypic.png';
import Timeline from '../pages/Timeline';
import axios from "axios";

const user_url = 'http://localhost:3001/user?username=';
const uploads = 'http://localhost:3001/uploads/';


class UserProfile extends Component {

    constructor(props) {
        super(props);
        this.state = {
            user: this.props.location.state,
            other: {
                displayname: '',
                followers: [],
                following: [],
                profileImg: '',
                email: '',
                username: this.props.match.params.username
            }
        }
    }

    componentDidMount() {
        const url = user_url + this.state.other.username;
        axios.get(url)
            .then(res => this.setState({ other: res.data }))
    }

    render(props) {
        return (
            <div>
                <div className="feed-page">
                    <Row className="justify-content-md-center no-margin">
                        <Col md="auto">
                            <div className="content-box">
                                <Row className="justify-content-md-center align-items-center no-margin login-input-box profile-info">
                                    <Col xs="4">
                                        <Image src={this.state.other.profileImg ? `${uploads}${this.state.other.profileImg}` : defaultPhoto} className="profile-info-photo" alt="photo" />
                                    </Col>
                                    <Col xs="5" className="profile-info-text">
                                        <Col className="no-padding displayname-text">
                                            <div>{this.state.other.displayname}</div>
                                        </Col>
                                        <Col className="no-padding username-text">
                                            <div>{this.state.other.username}</div>
                                        </Col>
                                        <Col className="no-padding username-text">
                                            <div>{this.state.other.bio}</div>
                                        </Col>
                                        <Col>
                                            <Row>
                                                <span className="fol-counter-number">{this.state.other.followers}</span>
                                                <span className="fol-counter-label">Following</span>
                                                <span className="fol-counter-number">{this.state.other.following}</span>
                                                <span className="fol-counter-label">Followers</span>
                                            </Row>
                                        </Col>
                                    </Col>
                                </Row>
                                <Timeline user={this.state.user} username={this.state.user.username} isProfileFeed={true} other={this.state.other} />
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
        );
    }
}

export default UserProfile;

