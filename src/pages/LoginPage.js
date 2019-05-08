import React,{Component} from "react";
import Home from './HomePage';
import './LoginPage.css';
import Footer from './../components/footer/Footer';
import canarinho from './../assets/images/canarinho.svg'
import axios from 'axios'
import { Button, Image, Form, Row, Col } from 'react-bootstrap';
import { Redirect } from 'react-router';



class LoginPage extends Component{

  state = {
    email: '',
    password: '',
    isLoggedIn: false
  }

  handleChangeEmail = event => {
    // console.log(event.target.value)
    this.setState({email: event.target.value})
  }

  handleChangePassword = event => {
    console.log(event.target.value)

    this.setState({password: event.target.value})
  }


  handleSubmit = event =>{
    event.preventDefault();
    const user = {
      email: this.state.email,
      password: this.state.password
    }

  axios.post('http://localhost:3001/authenticate',{user})
    .then((res) => {
      if(res === 200) {
        this.setState({isLoggedIn: true});
      }
    })
  
}

render() {
  return (
    <div className="login-page">
      <Row className="justify-content-md-center no-margin">
        <Col md="auto">
          <div className="login-canarinho-logo">
            <Image src={canarinho} alt="logo" fluid />
          </div>
        </Col>
      </Row>
      <div className="login-title">Canarinho</div>
      <Form onSubmit={this.handleSubmit}>
        <Row className="justify-content-md-center no-margin login-input-box">
          <Col xs lg="2">
            <Form.Control className="login-input" size="lg" placeholder="Username" onChange={this.handleChangeEmail}/>
          </Col>
          <Col xs lg="2">
            <Form.Control className="login-input" size="lg" placeholder="Password" type="password" onChange={this.handleChangePassword} />
          </Col>
          <Col xs lg="1">
            <Button className="login-button" variant="primary" size="lg" type="submit" 
            href="/home">Login</Button>
            {this.state.isLoggedIn && 
            <Redirect to={{pathname: Home, state: {isLoggedIn: true}}}/>}
          </Col>
        </Row>
      </Form>
      <a href="/signup" className="login-link">
        Sign up for Canarinho
      </a>
      <Footer/>
    </div>
  );
}
}
export default LoginPage;