import React, { Component } from "react";
import './Timeline.css';
import { Row, Col } from 'react-bootstrap';

import Navbar from './../components/navbar/Navbar';
import PostCard from './../components/post/PostCard';
import NewPostTimeLine from './../components/new-post/NewPostTimeLine';

class Timeline extends Component{
    constructor(props) {
        super(props);
    }

render (props){
    return (
        <div>
            <Navbar user = {this.props.user}/>
            <div className="feed-page">
                <Row className="justify-content-md-center no-margin">
                    <Col md="auto">
                            <div className="content-box">
                                    <NewPostTimeLine user = {this.props.user}/>
                                    <PostCard userinfo = {this.props.user}/>
                                    
                            </div>
                    </Col>
                </Row>
            </div>
        </div>
    );
  }
}

export default Timeline;