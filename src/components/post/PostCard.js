import React from 'react';
import './PostCard.css';
import { Image, Row, Col } from 'react-bootstrap';
import profilePhoto from './../../assets/images/cutmypic.png';

const PostCard = (props) => {
    return (
        <div className="postcard-box">
            <Row className="no-margin">
                <Col xs="2">
                    <Image src={profilePhoto} className="postcard-profile-photo" alt="photo" />
                </Col>
                <Col xs="10" className="postcard-content-box">
                    <Row className="no-margin postcard-identifier">
                        <span className="postcard-displayname"> Victor Borges </span>
                        <span className="postcard-username"> @victorborges </span>
                    </Row>
                    <Row className="no-margin postcard-content">
                    hoje eu cancelei uma corrida com um mototáxi pq o capacete não cabia na minha cabeça
                    </Row>
                    <Row className="no-margin postcard-footer">
                        <Col xs="10" className="postcard-footer-counter">
                        {/* essa string tem q passar por pre-processamento..
                            se tiver curtidas, adiciona a contagem + Likes
                            se tiver reposts, adiciona a contagem + Reposts
                            tem q ter logica pro and tb */}
                            23 Likes and 5 Reposts
                        </Col>
                        <Col xs="1">
                            <i class="fas fa-star"></i>
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

export default PostCard;