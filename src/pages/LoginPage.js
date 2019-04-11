import React from "react";
import './LoginPage.css';
import Footer from './../components/footer/Footer';
import canarinho from './../assets/images/canarinho.svg'
import TextField from '@material-ui/core/TextField';
import Button from "@material-ui/core/Button";

const LoginPage = () => {
  return(
    <div className="Login-page">
      <img src={canarinho} className="Canarinho-logo" alt="logo" />
      <div className="Login-title">Canarinho</div>
      <div className="Login-input-box">
        <TextField
            id="outlined-email-input"
            label="Email"
            type="email"
            name="email"
            autoComplete="email"
            margin="normal"
            variant="outlined"
          />
        <TextField
            id="outlined-password-input"
            label="Password"
            className="Login-input"
            type="password"
            autoComplete="current-password"
            margin="normal"
            variant="outlined"
          />
        <Button variant="contained">
          Login
        </Button>
      </div>
      <div className="Login-link"> Sign up for Canarinho </div>
      <Footer/>
    </div>
  );
}

export default LoginPage;