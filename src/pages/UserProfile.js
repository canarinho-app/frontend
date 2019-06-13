import React, { Component } from "react";
import './Feed.css';
import { Button, Image, Row, Col} from 'react-bootstrap';
import defaultPhoto from './../assets/images/cutmypic.png';
import Timeline from '../pages/Timeline';
import axios from "axios";
import { Api } from './../service/Api.js';

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
                username: this.props.match.params.username,
            	bio: '',
		        description: '',
		        tweets: []
	        }
        }
    }

    async componentDidMount() {
        // this.axiosCancelSource = axios.CancelToken.source();
        const url = user_url + this.state.other.username;
        await axios.get(url)
            .then(res => this.setState({ other: res.data }))
    }
    
    async componentDidUpdate() {
        const url = user_url + this.state.other.username;
        await axios.get(url)
            .then(res => this.setState({ other: res.data }))
    }

    // componentWillUnmount() {
    //     this.axiosCancelSource.cancel('Component unmounted.');
    // }

    follow = async () => {
    	try {
            // Get Updated user
	    let updatedUser = await Api.get(`user?username=${this.state.user.username}`);
            updatedUser = updatedUser.data;
	    // Get Updated Profile
	    let updatedOther = await Api.get(`user?username=${this.state.other.username}`);
	    updatedOther = updatedOther.data;

	    // Check if user already follow profile
	    var index = updatedUser.following.indexOf(updatedOther._id)
	    // Remove 
	    if (index !== -1){
		    updatedUser.following.splice(0, 1);
		    var other_index = updatedOther.followers.indexOf(updatedUser._id);
		    updatedOther.followers.splice(other_index, 1);
	    }
	    // Add to following/ followers list
	    else{
	    	updatedUser.following.push(updatedOther._id);
	    	updatedOther.followers.push(updatedUser._id);
	    }
	    
	    // Update user / profile
	    await Api.patch(`user?username=${this.state.user.username}`, updatedUser);
	    await Api.patch(`user?username=${this.state.other.username}`, updatedOther);
	    this.state.user = updatedUser
	}
	catch (error) {
	    error.response.data.message ? this.props.alert.error(error.response.data.message) :
	    this.props.alert.error('Ops... something went wrong!')
	}
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
                                                <span className="fol-counter-number">{this.state.other.followers.length}</span>
                                                <span className="fol-counter-label">Seguidores</span>
                                                <span className="fol-counter-number">{this.state.other.following.length}</span>
                                                <span className="fol-counter-label">Seguindo</span>
                                            </Row>
                                        </Col>
					<Button className="follow-profile-button" variant="primary" onClick={this.follow} size="lg">Seguir</Button>
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

