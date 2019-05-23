import React, { Component } from "react";
import './PostCard.css';
import {  Row, Col } from 'react-bootstrap';
import { Api } from './../../service/Api.js';


class CommentCard extends Component {
    constructor(props) {
        super(props);

        this.state = {
            tweet: { author: "", content: "" }
        }
    }

    async componentDidMount() {
        const response = await Api.get(`tweet?id=${this.props.tweet}`);
        const user = await Api.get(`userId?id=${response.data.author}`);
        const content = await Api.get(`content?id=${response.data.content}`);
        
        response.data.author = user.data;
        response.data.content = content.data;

        this.setState({tweet:response.data});
    }

    render(props) {
        return (
            <div >
                <Row className="no-margin">
                    <Col xs="12" className="reply-modal-post-box-comment">
                        <Row className="no-margin postcard-identifier">
                            <span className="postcard-displayname"> {this.state.tweet.author.displayname} </span>
                            <span className="postcard-username"> @{this.state.tweet.author.username} </span>
                        </Row>
                        <Row className="no-margin postcard-content">
                            {this.state.tweet.content.text}
                        </Row>
                    </Col>
                </Row>
            </div>

        )
    }
}

export default CommentCard;