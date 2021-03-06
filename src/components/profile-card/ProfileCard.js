import React, { Component } from 'react';
import './ProfileCard.css';
import { Image, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';


import defaultPhoto from '../../assets/images/cutmypic.png';

const uploads = 'http://localhost:3001/uploads/';

class ProfileCard extends Component {
    constructor(props) {
        super(props);
        this.user = this.props.user;
        this.other = this.props.other;
    }

    render() {
        return (
            <div className="pro-page">
                <Row className="justify-content-md-center no-margin">
                    <Col md="auto">
                        <div className="pro-box">
                            <Row className="justify-content-md-center align-items-center no-margin  pro-info">
                                <Col xs="4">
                                    <Link to={{ pathname: '/user-profile/' + this.other.username, state: this.props.user }}>
                                        <Image src={this.other.profileImg ? `${uploads}${this.other.profileImg}` : defaultPhoto} className="pro-photo" alt="photo" />
                                    </Link>
                                </Col>
                                <Col xs="5" className="pro-text">
                                    <Col className="no-padding displayname-text">
                                        <div>{this.other.displayname}</div>
                                    </Col>
                                    <Col className="no-padding username-text">
                                        <div>{this.other.username}</div>
                                    </Col>
                                    <Col>
                                        <Row>
                                            <span className="fol-counter-number">{this.other.followers.length}</span>
                                            <span className="fol-counter-label">Seguidores</span>
                                            <span className="fol-counter-number">{this.other.following.length}</span>
                                            <span className="fol-counter-label">Seguindo</span>
                                        </Row>
                                    </Col>
                                </Col>
                                <Col xs="3">

                                </Col>
                            </Row>

                        </div>
                    </Col>
                </Row>
            </div>
        );
    }
}


export default ProfileCard;
