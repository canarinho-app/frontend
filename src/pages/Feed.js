import React, { Component } from "react";
import './Feed.css';
import { Button, Image, Row, Col } from 'react-bootstrap';
import axios from 'axios'

import Navbar from './../components/navbar/Navbar';
import profilePhoto from './../assets/images/cutmypic.png';
import PostCard from './../components/post/PostCard';

class Feed extends Component{
    constructor(props) {
        super(props);
        this.state = {
            userdata: {
                displayname: '',
                followers: [],
                following:[],
                profileImg: '',
                email: '',
                username:''


            }
        }
        
    }

componentDidMount(){
    axios.get('http://localhost:3001/user?username=' +this.props.username)
    .then(res =>
        this.setState({userdata : res.data})    
        
        )
     
}


render (props){
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
                                                <div>{this.state.userdata.displayname}</div>
                                            </Col>
                                            <Col className="no-padding username-text">
                                                <div>{this.state.userdata.username}</div>
                                            </Col>
                                            <Col>
                                                <Row>
                                                    <span className="fol-counter-number">{this.state.userdata.followers.length}</span>
                                                    <span className="fol-counter-label">Following</span>
                                                    <span className="fol-counter-number">{this.state.userdata.following.length}</span>
                                                    <span className="fol-counter-label">Followers</span>
                                                </Row>
                                            </Col>
                                        </Col>
                                        <Col xs="3">
                                            <Button className="edit-profile-button" variant="primary" size="lg">Edit Profile</Button>
                                        </Col>
                                    </Row>
                                    <PostCard/>
                                    
                            </div>
                    </Col>
                </Row>
            </div>
        </div>
    );
  }
}
  export default Feed;