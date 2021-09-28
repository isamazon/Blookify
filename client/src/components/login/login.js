import React, { useState } from 'react';
import './login.css';
import Icon from './icon';
import Input from './input';
import { Container, Row, Col } from 'react-bootstrap';
import Slide from 'react-reveal/Slide';
import Fade from 'react-reveal/Fade';
import Svg2 from '../svgs/reading2';
import bookpic from '../../assets/bookbackground.png';
// icons
import { GoogleLogin } from 'react-google-login';
import { MdVisibility, MdVisibilityOff } from 'react-icons/md';

import { useDispatch } from 'react-redux';
function Login() {
  // Password toggle
  const [showPassword, setShowPassword] = useState(false);
  const handleShowPassword = () =>
    setShowPassword((prevShowPassword) => !prevShowPassword);

  const [isSignUp, setSignUp] = useState(false);

  const switchMode = () => {
    setSignUp((prevIsSignup) => !prevIsSignup);
  };
  const dispatch = useDispatch();
  // const handleSubmit = () => {};

  // const handleChange = () => {};\
  const googleSuccess = async (res) => {
    console.log(res);
    const result = res?.profileObj;
    const token = res?.tokenId;

    try {
      dispatch({ type: 'AUTH', data: { result, token } });
    } catch (error) {
      console.log(error);
    }
  };
  const googleFailure = (error) => {
    console.log(error);
    console.log('Google sign in was not successful try again later');
  };

  return (
    <Container fluid className="form-cont-main ">
      <div className="form-container">
        <form className="form" onSubmit={'handleSubmit'}>
          <h1>{isSignUp ? 'Sign up to Blookify!' : 'Login to Blookify'}</h1>

          <div className="signup-signin">
            <p>
              {isSignUp
                ? 'Already have an account?'
                : 'Dont have an account yet?'}
            </p>
            <p className="sign-p" onClick={switchMode}>
              {isSignUp ? 'Sign in here' : 'Sign up here'}
            </p>
          </div>
          <GoogleLogin
            clientId="212530664568-hi5grd3rmej7lqvj1o7jdg9hqimdlife.apps.googleusercontent.com"
            render={(renderProps) => (
              <button
                className="google-button"
                onClick={renderProps.onClick}
                disabled={renderProps.disabled}
                fullWidth
                startIcon={<Icon />}
              >
                Google signIn
              </button>
            )}
            onSuccess={googleSuccess}
            onFailure={googleFailure}
            cookiePolicy="single_host_origin"
          />
          <p className="or">------------- or -------------</p>

          {/* Input fields */}

          <Row className="input-row">
            {isSignUp && (
              <>
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
              </>
            )}
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
                type={showPassword ? 'text' : 'password'}
                required
              />
              <i className="show-password" onClick={handleShowPassword}>
                {showPassword ? (
                  <MdVisibility color="#7f5539" size="25px" />
                ) : (
                  <MdVisibilityOff color="#7f5539" size="25px" />
                )}
              </i>
            </Col>
            {isSignUp && (
              <Col xl={12} className="input-column">
                <input
                  className="input"
                  placeholder="Confirm password*"
                  type={showPassword ? 'text' : 'password'}
                  required
                />
                <i className="show-password" onClick={handleShowPassword}>
                  {showPassword ? (
                    <MdVisibility color="#7f5539" size="25px" />
                  ) : (
                    <MdVisibilityOff color="#7f5539" size="25px" />
                  )}
                </i>
              </Col>
            )}
            <button type="submit" className="submit-button">
              {isSignUp ? 'Login' : 'Sign up'}
            </button>
          </Row>
        </form>
      </div>
      <div className="bookimg-container">
        <img src={bookpic} className="img" alt="" />
      </div>
    </Container>
  );
}

export default Login;
