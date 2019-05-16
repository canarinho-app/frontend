import React, { Component } from "react";
import './PostCard.css';
import { Image, Row, Col, Modal, Button, Form } from 'react-bootstrap';
import profilePhoto from './../../assets/images/cutmypic.png';
import axios from 'axios'

class PostCard extends Component{

    constructor(props, context) {
        super(props, context);
    
        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);
    
        this.state = {
          show: false,
          tweet: {
              like: 0,
              comment:[],
              author: '',
              content: '',

          },
          text: '',
          press: false
        };
    }

    componentDidMount(){
        console.log(this.props.tweetId)
        axios.get('http://localhost:3001/tweet?id=' + this.props.tweetId).then(res => {
            this.setState({tweet:res.data})
        axios.get('http://localhost:3001/content?id=' + this.state.tweet.content).then(res2 => {
            this.setState({text: res2.data})
        })           
    })

        
    }

    componentDidUpdate() {
        // axios.post'http://localhost:3001/content?id=' + this.state.tweet.content()
    }
    
    handleClose() {
        this.setState({ show: false });
    }
    
    handleShow() {
        this.setState({ show: true });
    }

    handleLike() {
        if(this.state.press === false) {
            this.setState({
                tweet: {...this.state.tweet,
                    like: this.state.tweet.like + 1} })
            this.setState({press: true})
        } else {
            this.setState({
                tweet: {...this.state.tweet,
                    like: this.state.tweet.like - 1} })
            this.setState({press: false})
        }
    }

    render(props) {
        return (
            <div className="postcard-box">
                <Row className="no-margin">
                    <Col xs="2">
                        <Image src={profilePhoto} className="postcard-profile-photo" alt="photo" />
                    </Col>
                    <Col xs="10" className="postcard-content-box">
                        <Row className="no-margin postcard-identifier">
                            <span className="postcard-displayname"> {this.props.userinfo.displayname} </span>
                            <span className="postcard-username"> @{this.props.userinfo.username} </span>
                        </Row>
                        <Row className="no-margin postcard-content">
                            {this.state.tweet.text}
                        </Row>
                        <Row className="no-margin postcard-footer">
                            <Col xs="9" className="postcard-footer-counter">
                            {/* essa string tem q passar por pre-processamento..
                                se tiver curtidas, adiciona a contagem + Likes
                                se tiver reposts, adiciona a contagem + Reposts
                                tem q ter logica pro and tb */}
                                {this.state.tweet.like} Likes and {this.state.tweet.comment.length} Reposts
                            </Col>
                            <Col xs="1">
                                <i class="fas fa-reply" onClick={this.handleShow}></i>
                                <Modal size="lg" show={this.state.show} onHide={this.handleClose}>
                                    <Modal.Header closeButton>
                                        <Modal.Title>Responder para {this.props.userinfo.displayname}</Modal.Title>
                                    </Modal.Header>
                                    <Modal.Body>
                                        <div className="reply-modal-body-box">
                                            <Row className="no-margin">
                                                <Col xs="12" className="reply-modal-post-box">
                                                    <Row className="no-margin postcard-identifier">
                                                        <span className="postcard-displayname"> {this.props.userinfo.displayname} </span>
                                                        <span className="postcard-username"> @{this.props.userinfo.username} </span>
                                                    </Row>
                                                    <Row className="no-margin postcard-content">
                                                        hoje eu cancelei uma corrida com um mototáxi pq o capacete não cabia na minha cabeça
                                                    </Row>
                                                </Col>
                                            </Row>
                                            <Row className="reply-modal-form-label">
                                                <span className="reply-modal-form-label-first">Em resposta a</span>
                                                <span className="reply-modal-form-label-second">@{this.props.userinfo.username}</span>
                                            </Row>
                                            <Row className="reply-modal-textarea">
                                                <Form.Control as="textarea" className="reply-modal-post-textarea" rows="3" maxlength="280"/>
                                            </Row>
                                        </div>
                                    </Modal.Body>
                                    <Modal.Footer>
                                        <Button className="reply-modal-button" variant="primary" onClick={this.handleClose}>
                                            Postar
                                        </Button>
                                    </Modal.Footer>
                                </Modal>
                            </Col>
                            <Col xs="1">
                                <button onClick={() => this.handleLike()}><i class="fas fa-star"></i></button>
                            </Col>
                            <Col xs="1">
                                <i class="fas fa-retweet"></i>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </div>

        );
    }
}

export default PostCard;