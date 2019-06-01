import React, { Component } from "react";
import './Feed.css';
import { Button, Image, Row, Col, Modal, Form } from 'react-bootstrap';
import defaultPhoto from './../assets/images/cutmypic.png';
import Timeline from '../pages/Timeline';
import axios from "axios";

const user_url = 'http://localhost:3001/user?username=';
const uploads = 'http://localhost:3001/uploads/';


class UserProfile extends Component {

	constructor(props){
	   super(props);
	   this.state = {
	   	user: []
	   }
    }

	componentDidMount() {
        axios.get(user_url + this.props.match.params.username)
            .then( res => this.setState({ user: res.data }))
	}

	render(props){
        console.log(this.state.user);
		return (
		           <div>
                <div className="feed-page">
                    <Row className="justify-content-md-center no-margin">
                        <Col md="auto">
                            <div className="content-box">
                                <Row className="justify-content-md-center align-items-center no-margin login-input-box profile-info">
                                    <Col xs="4">
                                        <Image src={this.state.user.profileImg ? `${uploads}${this.state.user.profileImg}` : defaultPhoto} className="profile-info-photo" alt="photo" />
                                    </Col>
                                    <Col xs="5" className="profile-info-text">
                                        <Col className="no-padding displayname-text">
                                            <div>{this.state.user.displayname}</div>
                                        </Col>
                                        <Col className="no-padding username-text">
                                            <div>{this.state.user.username}</div>
                                        </Col>
                                        <Col className="no-padding username-text">
                                            <div>{this.state.user.bio}</div>
                                        </Col>
                                        <Col>
                                            <Row>
                                                <span className="fol-counter-number">{this.state.user.followers}</span>
                                                <span className="fol-counter-label">Following</span>
                                                <span className="fol-counter-number">{this.state.user.following}</span>
                                                <span className="fol-counter-label">Followers</span>
                                            </Row>
                                        </Col>
                                    </Col>
                                </Row>
                                <Timeline user = {this.state.user} username = {this.state.user.username} isProfileFeed={true}/>
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
		);
	}
}

export default UserProfile;

