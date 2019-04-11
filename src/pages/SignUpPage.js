import React from 'react';
import './SignUpPage.css';
import Footer from './../components/footer/Footer'
import canarinho from './../assets/images/canarinho.svg';
import profilePhoto from './../assets/images/cutmypic.png';

const SignUpPage = (props) => {
    return (
        <div className="SignUp-page">
            <div className="Logo-side">
                <div className="SignUp-text">Sign up for Canarinho</div>
                <img src={profilePhoto} className="Profile-photo" alt="photo"/>
                <img src={canarinho} className="Canarinho-logo" alt="logo" />
                <div className="Logo-title">Canarinho</div>
            </div>
            <div className="footer">
                <Footer/>
            </div>
        </div>
    );
}

export default SignUpPage;