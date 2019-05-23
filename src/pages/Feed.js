import React, { Component } from "react";
import './Feed.css';
import { Button, Image, Row, Col, Modal, Form } from 'react-bootstrap';
import defaultPhoto from './../assets/images/cutmypic.png';
import Timeline from '../pages/Timeline';
import Axios from "axios";

const uploads = 'http://localhost:3001/uploads/';

class Feed extends Component {
    constructor(props) {
        super(props);
        this.user = this.props.location.state;

        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.handleChangeDisplayBio = this.handleChangeDisplayBio.bind(this)
        this.handleChangeDisplayName = this.handleChangeDisplayName.bind(this)
        this.handleChangeDisplayPassword = this.handleChangeDisplayPassword.bind(this)
        this.handleChangeDisplayPasswordRep = this.handleChangeDisplayPasswordRep.bind(this)

        this.state = {
            show: false,
            displayname: "",
            bio: "",
            password:"",
            passwordRep:"",
        };
    }

    handleClose() {
        this.setState({ show: false });
        if(this.state.password !== this.state.passwordRep){
            alert("Password did not match!")
            return;
        }
        let userUpdate = {
            displayname: this.state.displayname,
            bio: this.state.bio,
            password: this.state.password
        }
        Axios.patch('http://localhost:3001/user/profile?username=' + this.user.username, {userUpdate})
    }
    
    handleShow() {
        this.setState({ show: true });
    }

    handleChangeDisplayName(event){
        this.setState({ displayname: event.target.value})
    }

    handleChangeDisplayBio(event){
        this.setState({ bio: event.target.value})
    }

    handleChangeDisplayPassword(event){
        this.setState({ password: event.target.value})
        console.log(this.state.password)
    }

    handleChangeDisplayPasswordRep(event){
        this.setState({ passwordRep: event.target.value})
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
                                        <Image src={this.user.profileImg ? `${uploads}${this.user.profileImg}` : defaultPhoto} className="profile-info-photo" alt="photo" />
                                    </Col>
                                    <Col xs="5" className="profile-info-text">
                                        <Col className="no-padding displayname-text">
                                            <div>{this.user.displayname}</div>
                                        </Col>
                                        <Col className="no-padding username-text">
                                            <div>{this.user.username}</div>
                                        </Col>
                                        <Col className="no-padding username-text">
                                            <div>{this.user.bio}</div>
                                        </Col>
                                        <Col>
                                            <Row>
                                                <span className="fol-counter-number">{this.user.followers.length}</span>
                                                <span className="fol-counter-label">Following</span>
                                                <span className="fol-counter-number">{this.user.following.length}</span>
                                                <span className="fol-counter-label">Followers</span>
                                            </Row>
                                        </Col>
                                    </Col>
                                    <Col xs="3">
                                        {/* Botão de editar perfil: <Button className="edit-profile-button" variant="primary" size="lg" onClick={this.handleShow}>Editar Perfil</Button> */}
                                        {/* Botão de seguir perfil: <Button className="follow-profile-button" variant="primary" size="lg">Seguir</Button> */}
                                        {/* Botão de deixar de seguir: <Button className="unfollow-profile-button" variant="primary" size="lg">Deixar de Seguir</Button> */}
                                        <Button className="edit-profile-button" variant="primary" size="lg" onClick={this.handleShow}>Editar Perfil</Button>
                                        <Modal size="md" show={this.state.show} onHide={this.handleClose}>
                                            <Modal.Header closeButton>
                                                <Modal.Title>Editar Perfil</Modal.Title>
                                            </Modal.Header>
                                            <Modal.Body>
                                                <div className="edit-profile-modal-body-box no-margin">
                                                    <Col className="justify-content-md-center reply-modal-form-label">
                                                        <span className="edit-profile-modal-form-label">Seu nome de exibição é: {this.user.displayname}</span>
                                                        <Row>
                                                            <Form.Control className="edit-profile-input" size="lg" placeholder="Display name" onChange={this.handleChangeDisplayName}/>
                                                        </Row>
                                                        <Row>
                                                            <Form.Control className="edit-profile-input" size="lg" placeholder="Bio" onChange={this.handleChangeDisplayBio}/>
                                                        </Row>
                                                        <Row>
                                                            <Form.Control className="edit-profile-input" size="lg" placeholder="Password" type="password" onChange={this.handleChangeDisplayPassword} />
                                                        </Row>
                                                        <Row>
                                                            <Form.Control className="edit-profile-input" size="lg" placeholder="Repeat your password" type="password" onChange={this.handleChangeDisplayPasswordRep}/>
                                                        </Row>
                                                        
                                                    </Col>
                                                </div>
                                            </Modal.Body>
                                            <Modal.Footer>
                                                <Button className="edit-profile-modal-button" variant="primary" onClick={this.handleClose}>
                                                    Salvar
                                                </Button>
                                            </Modal.Footer>
                                        </Modal>
                                    </Col>
                                </Row>
                                <Timeline user = {this.user} username = {this.user.username} isProfileFeed={true}/>   
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
        );
    }
}
export default Feed;