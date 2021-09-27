import React, { useState } from 'react';
import './login.css';
import Input from './input';
import { Container, Row, Col } from 'react-bootstrap';
import Slide from 'react-reveal/Slide';
import Svg2 from '../svgs/reading2';
import { MdVisibility, MdVisibilityOff } from 'react-icons/md';
import { IconButton, InputAdornment } from '@material-ui/core';
function Login() {
  // Password toggle
  const [showPassword, setShowPassword] = useState(false);
  const handleShowPassword = () =>
    setShowPassword((prevShowPassword) => !prevShowPassword);

  const isSignUp = true;

  // const handleSubmit = () => {};

  // const handleChange = () => {};

  const handleChange = () => {};

  return (
    <Container fluid className="form-cont-main ">
      <div className="form-container">
        <form className="form" onSubmit={'handleSubmit'}>
          <Slide top cascade>
            <h1>{isSignUp ? 'Sign up to blookify!' : 'Login to Blookify'}</h1>

            <div className="signup-signin">
              <p>
                {isSignUp
                  ? 'Already have an account?'
                  : 'Dont have an account yet?'}
              </p>
              <p className="sign-p" onClick={'handleSubmit'}>
                {isSignUp ? 'Sign in here' : 'Sign up here'}
              </p>
            </div>

            <p className="or">------------- or -------------</p>
          </Slide>
          {/* Input fields */}
          {isSignUp ? (
            <Row className="input-row">
              <Col xl={6} className="input-column">
                <input
                  className="input"
                  placeholder="First Name*"
                  name="firstName"
                  label="First Name"
                  onChange={'handleChange'}
                  type="text"
                  required
                />
              </Col>
              <Col xl={6} className="input-column">
                <input
                  className="input"
                  placeholder="Last Name*"
                  type="text"
                  required
                />
              </Col>
              <Col xl={12} className="input-column">
                <input
                  className="input"
                  placeholder="Email*"
                  type="text"
                  required
                />
              </Col>
              <Col xl={12} className="input-column">
                <input
                  className="input"
                  placeholder="Password*"
                  type="password"
                  required
                />
                <i className="show-password">
                  <MdVisibility color="#7f5539" size="25px" />
                </i>
              </Col>
              <Col xl={12} className="input-column">
                <input
                  className="input"
                  placeholder="Confirm password*"
                  type="text"
                  required
                />
                <i className="show-password">
                  <MdVisibility color="#7f5539" size="25px" />
                </i>
              </Col>
            </Row>
          ) : (
            <Row className="input-row">
              <Col xl={12} className="input-column">
                <input
                  className="input"
                  placeholder="Email"
                  name="firstName"
                  label="First Name"
                  onChange={'handleChange'}
                  type="password"
                />
              </Col>
              <Col xl={12} className="input-column">
                <input
                  className="input"
                  placeholder="Password*"
                  type="password"
                />
                <i className="show-password">
                  <MdVisibility color="#7f5539" size="25px" />
                </i>
              </Col>
            </Row>
          )}
        </form>
      </div>
    </Container>
  );
}

export default Login;
