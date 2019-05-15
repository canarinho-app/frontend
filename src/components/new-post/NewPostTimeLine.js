import React, { Component } from "react";
import './NewPostTimeLine.css';
import { Button, Image, Row, Col, Form } from 'react-bootstrap';
import profilePhoto from './../../assets/images/cutmypic.png';


class NewPostTimeLine extends Component{

    render (props){
        return (
            <div className="new-post-timeline-box">
                <Row className="no-margin">
                    <Col xs="2">
                        <Image src={profilePhoto} className="new-post-timeline-profile-photo" alt="photo" />
                    </Col>
                    <Col xs="10" className="new-post-timeline-content-box">
                        <Row className="new-post-text-box no-margin-right">
                            <Form.Control as="textarea" className="new-post-textarea" rows="3" placeholder="O que está acontecendo?" maxlength="280"/>
                        </Row>
                        <Row className="justify-content-end new-post-button-box no-margin-right">
                            <Button className="new-post-button" variant="primary" size="lg">Postar</Button>
                        </Row>
                    </Col>
                </Row>
            </div>

        );
    }
}

export default NewPostTimeLine;