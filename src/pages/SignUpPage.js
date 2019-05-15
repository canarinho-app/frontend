import React, { Component } from 'react';
import { Redirect } from 'react-router';
import './SignUpPage.css';
import './LoginPage.css';
import { Row, Col, Image, Form, Button } from 'react-bootstrap';
import Footer from './../components/footer/Footer'
import canarinho from './../assets/images/canarinho.svg';
import defaultPhoto from './../assets/images/cutmypic.png';
import { Api } from './../service/Api.js'
import { useAlert } from 'react-alert';

/**
 * Function to use the logic of the alert hook.
 */
function alertHook(Component) {
    return function WrappedComponent(props) {
        const alert = useAlert();
        return <Component {...props} alert={alert} />;
    }
}

class SignUpPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            profileImg: "",
            displayname: "",
            username: "",
            email: "",
            password: "",
            passwordRep: "",
            isAuth: false
        }
        this.defaultImg = defaultPhoto;
        this.inputOpenFileRef = React.createRef()
    }

    handleInputChange = property => event => {
        this.setState({ ...this.state, [property]: event.target.value });
    }

    submit = async () => {

        if (this.state.password !== this.state.passwordRep) {
            alert("Passwords did not match!");
            return;
        }
       
        const user = {
            profileImg: this.state.profileImg,
            displayname: this.state.displayname,
            username: this.state.username,
            email: this.state.email,
            password: this.state.password
        }

        try {
            await Api.post('user', user);
            this.props.alert.success('User successfully registered!');
            this.setState({ isAuth: true });
        }
        catch (error) {
            error.response.data.message ? this.props.alert.error(error.response.data.message) :
                this.props.alert.error('Ops... something went wrong!');
        };
    }

    /**
     * Opens a dialog box to select a file for the profile picture.
     */
    openFileDlg = () => {
        this.inputOpenFileRef.current.click();
    };

    /**
     * Saves the profile image on the server, linking the returned image path to the 
     * user to be registered.
     * 
     */
    handleProfileImg = event => {
        const imgObject = new FormData();

        imgObject.append("imageName", event.target.files[0].name);
        imgObject.append("imageData", event.target.files[0]);
        
        this.defaultImg = URL.createObjectURL(event.target.files[0]);

        Api.post('user/profileImg', imgObject)
            .then(response => {
                this.setState({ profileImg: response.data });

            })
            .catch(error => {
                this.defaultImg = defaultPhoto;
                error.response.data.message ? this.props.alert.error(error.response.data.message) :
                    this.props.alert.error('Ops... something went wrong!')
            });
    };

    render() {
        return (
            <div className="signup-page">
                <Row>
                    <Col xs={6} md={3} className="logo-side">
                        <div className="canarinho-logo">
                            <Image src={canarinho} alt="logo" fluid />
                            <div className="signup-logo-title">Canarinho</div>
                        </div>
                    </Col>
                    <Col xs={6} md={9} className="form-box">
                        <div className="text-center">
                            <div className="signup-text">Sign up for Canarinho</div>
                            <Image src={this.defaultImg} className="profile-photo" alt="photo" />
                            <div>
                                <input type="file" ref={this.inputOpenFileRef} onChange={e => this.handleProfileImg(e)} style={{ display: "none" }} />
                                <a className="select-photo" onClick={this.openFileDlg}>Select your profile photo</a>
                            </div>
                        </div>

                        <Form>
                            <Row className="justify-content-md-center no-margin signup-input-box">

                                <Form.Control className="signup-input" size="lg" placeholder="Username" onChange={this.handleInputChange("username")} />

                                <Form.Control className="signup-input" size="lg" placeholder="Display name" onChange={this.handleInputChange("displayname")} />

                                <Form.Control className="signup-input" size="lg" placeholder="Email" onChange={this.handleInputChange("email")} />

                                <Form.Control className="signup-input" size="lg" placeholder="Password" type="password" onChange={this.handleInputChange("password")} />

                                <Form.Control className="signup-input" size="lg" placeholder="Repeat your password" type="password" onChange={this.handleInputChange("passwordRep")} />


                                <Button className="signup-button" variant="primary" size="lg" onClick={this.submit}>Sign up</Button>
                                {this.state.isAuth && <Redirect to="/" />}
                            </Row>
                        </Form>
                    </Col>
                </Row>
                <Footer />
            </div>
        );

    }
}

SignUpPage = alertHook(SignUpPage);
export default SignUpPage;