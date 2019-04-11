import React from 'react';
import './SignUpPage.css';
import canarinho from './../assets/images/canarinho.svg';

const SignUpPage = (props) => {
    return (
        <div className="SignUp-page">
            <div className="Logo-side">
                <div class="SignUp-text">Sign up for Canarinho</div>
                <img src={canarinho} className="Canarinho-logo" alt="logo" />
                <div className="Logo-title">Canarinho</div>
            </div>
        </div>
    );
}

export default SignUpPage;