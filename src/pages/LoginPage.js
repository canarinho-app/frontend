import React from "react";
import './LoginPage.css';
import Footer from './../components/footer/Footer';
import canarinho from './../assets/images/canarinho.svg'
import { Button, Image, Form, Row, Col } from 'react-bootstrap';

const LoginPage = () => {
  return(
    <div className="login-page">
      <Row className="justify-content-md-center no-margin">
        <Col md="auto">
          <div className="login-canarinho-logo">
            <Image src={canarinho} alt="logo" fluid/>
          </div>
        </Col>
      </Row>
      <div className="login-title">Canarinho</div>
      <Form>
        <Row className="justify-content-md-center no-margin login-input-box">
          <Col xs lg="2">
            <Form.Control className="login-input" size="lg" placeholder="Username"/>
          </Col>
          <Col xs lg="2">
            <Form.Control className="login-input" size="lg" placeholder="Password" type="password"/>
          </Col>
          <Col xs lg="1">
            <Button className="login-button" variant="primary" size="lg">Login</Button>
          </Col>
        </Row>
      </Form>
      <div href="" className="login-link">
        Sign up for Canarinho
      </div>
      <Footer/>
    </div>
  );
}

export default LoginPage;