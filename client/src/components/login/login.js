import React, { useState } from 'react';
import './login.css';
import useStyles from './styles';
import Input from './input';
import { Grid } from '@material-ui/core';
import { Button, Container } from 'react-bootstrap';
import Svg2 from '../svgs/reading2';
function Login() {
  const [signUp, setSign] = useState('');
  // Password toggle
  const [showPassword, setShowPassword] = useState(false);
  const handleShowPassword = () =>
    setShowPassword((prevShowPassword) => !prevShowPassword);

  const isSignUp = false;

  // const handleSubmit = () => {};

  // const handleChange = () => {};

  const handleClick = () => {
    setSign(!signUp);
  };

  const handleChange = () => {};

  return (
    <Container fluid className="form-cont-main ">
      <div className="form-container">
        <form className="form" action="">
          <h1>{signUp ? 'Sign up to blookify!' : 'Login to Blookify'}</h1>
          <div className="signup-signin">
            <p>
              {signUp
                ? 'Already have an account?'
                : 'Dont have an account yet?'}
            </p>
            <p className="sign-p" onClick={handleClick}>
              {signUp ? 'Sign in here' : 'Sign up here'}
            </p>
          </div>
          <p className="or">--------- or ---------</p>
          <Grid container spacing={2}>
            {isSignUp && (
              <>
                <Input
                  name="firstName"
                  label="First Name"
                  handleChange={handleChange}
                  autoFocus
                  half
                />
                <Input
                  name="firstName"
                  label="First Name"
                  handleChange={handleChange}
                  half
                />
              </>
            )}
            <Input
              name="email"
              label="Email Address"
              handleChange={handleChange}
              type="email"
            />
            <Input
              name="password"
              label="Password"
              handleChange={handleChange}
              type={showPassword ? 'text' : 'password'}
              handleShowPassword={handleShowPassword}
            />
            {isSignUp && (
              <Input
                name=" confirmPassword"
                label="Repeat password"
                handleChange={handleChange}
                type="password"
              />
            )}
          </Grid>
          {/* Submit button */}
          <Button
            type="submit"
            fullWidth
            variant="contained"
            className="button"
          >
            {isSignUp ? 'Sign up' : 'Sign in'}
          </Button>
        </form>
      </div>
    </Container>
  );
}

export default Login;
