import React, { Component } from "react";
import './PostCard.css';
import { Image, Row, Col, Modal, Button, Form } from 'react-bootstrap';
import profilePhoto from './../../assets/images/cutmypic.png';
import CommentCard from './CommentCard';

const uploads = 'http://localhost:3001/uploads/';

class PostCard extends Component {

    constructor(props, context) {
        super(props, context);

        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);

        this.state = {
            show: false,
            like: { author: "" },
            comment: ""
        };
    }

    componentDidMount() {        
    }

    handleInputChange = property => event => {
        this.setState({ ...this.state, [property]: event.target.value });
    }

    handleClose() {
        this.setState({ show: false, comment: "" });
    }

    handleShow() {
        this.setState({ show: true });
    }

    render(props) {
        const comments = this.props.tweet.comments.map(item => {
            return (<CommentCard tweet={item} key={item} />)
        });
        return (
            <div className="postcard-box">
                <Row className="no-margin">
                    <Col xs="2">
                        <Image src={this.props.tweet.author.profileImg ? `${uploads}${this.props.tweet.author.profileImg}` : profilePhoto} className="postcard-profile-photo" alt="photo" />
                    </Col>
                    <Col xs="10" className="postcard-content-box">
                        <Row className="no-margin postcard-identifier">
                            <span className="postcard-displayname"> {this.props.tweet.author.displayname} </span>
                            <span className="postcard-username"> @{this.props.tweet.author.username} </span>
                        </Row>
                        <Row className="no-margin postcard-content">
                            {this.props.tweet.content.text}
                        </Row>
                        <Row className="no-margin postcard-footer">
                            <Col xs="9" className="postcard-footer-counter">
                                {this.props.tweet.likes.length} Likes and {this.props.tweet.comments.length} comments
                            </Col>
                            <Col xs="1">
                                <i className="fas fa-reply" onClick={this.handleShow}></i>
                                <Modal size="lg" show={this.state.show} onHide={this.handleClose}>
                                    <Modal.Header closeButton>
                                        <Modal.Title>Responder para {this.props.tweet.author.displayname}</Modal.Title>
                                    </Modal.Header>
                                    <Modal.Body>
                                        <div className="reply-modal-body-box">
                                            {comments}
                                            <Row className="reply-modal-form-label">
                                                <span className="reply-modal-form-label-first">Em resposta a</span>
                                                <span className="reply-modal-form-label-second">@{this.props.tweet.author.username}</span>
                                            </Row>
                                            <Row className="reply-modal-textarea">
                                                <Form.Control as="textarea" className="reply-modal-post-textarea" rows="3" value={this.state.comment} maxLength="280" onChange={this.handleInputChange("comment")} />
                                            </Row>
                                        </div>
                                    </Modal.Body>
                                    <Modal.Footer>
                                        <Button className="reply-modal-button" variant="primary" onClick={() => { this.setState({ comment: "" }); this.props.handleComment(this.state.comment, this.props.tweet.id) }}>
                                            Postar
                                        </Button>
                                    </Modal.Footer>
                                </Modal>
                            </Col>
                            <Col xs="1">
                                <i className="fas fa-star" onClick={() => {this.props.handleLike(this.props.tweet.id)}}></i>
                            </Col>
                            <Col xs="1">
                                <i className="fas fa-retweet" onClick={() => {this.props.handleRetweet(this.props.tweet.id)}}></i>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </div>

        );
    }
}

export default PostCard;