import React, { Component } from "react";
import './NewPostTimeLine.css';
import { Button, Image, Row, Col, Form } from 'react-bootstrap';
import defaultPhoto from './../../assets/images/cutmypic.png';
import { Api } from './../../service/Api.js';
import { useAlert } from 'react-alert';

const uploads = 'http://localhost:3001/uploads/';

/**
 * Function to use the logic of the alert hook.
 */
function alertHook(Component) {
    return function WrappedComponent(props) {
        const alert = useAlert();
        return <Component {...props} alert={alert} />;
    }
}

class NewPostTimeLine extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: ""
        }   
    }
 
    handleInputChange = property => event => {
        this.setState({ ...this.state, [property]: event.target.value });
    }

    submit = async () => {
        try {
            const content = { text: this.state.text };
            const createdContent = await Api.post('content', content);
            const tweet = {
                author: this.props.user,
                content: createdContent.data.id
            };

            const createdTweet = await Api.post('tweet', tweet);
            
            let updatedUser = await Api.get(`user?username=${this.props.user.username}`);
            updatedUser = updatedUser.data;
            
            updatedUser.tweets.push(createdTweet.data.id);
            await Api.patch(`user?username=${this.props.user.username}`, updatedUser);
            
            this.setState({text: ""})
            window.location.reload();
        }
        catch (error){
            error.response.data.message ? this.props.alert.error(error.response.data.message) :
            this.props.alert.error('Ops... something went wrong!')
        }
    }

    render(props) {
        return (
            <div className="new-post-timeline-box">
                <Row className="no-margin">
                    <Col xs="2">
                        <Image src={this.props.user.profileImg ? `${uploads}${this.props.user.profileImg}` : defaultPhoto} className="new-post-timeline-profile-photo" alt="photo" />
                    </Col>
                    <Col xs="10" className="new-post-timeline-content-box">
                        <Row className="new-post-text-box no-margin-right">
                            <Form.Control as="textarea" className="new-post-textarea" rows="3" value={this.state.text} placeholder="O que está acontecendo?" maxLength="280" onChange={this.handleInputChange("text")} />
                        </Row>
                        <Row className="justify-content-end new-post-button-box no-margin-right">
                            <Button className="new-post-button" variant="primary" onClick={this.submit} size="lg">Postar</Button>
                        </Row>
                    </Col>
                </Row>
            </div>

        );
    }
}
NewPostTimeLine = alertHook(NewPostTimeLine);
export default NewPostTimeLine;