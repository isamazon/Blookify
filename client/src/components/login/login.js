import React from "react";
import "./login.css";
import Nav from "../navbar";
import { Container, Row, Col } from "react-bootstrap";
import Svg2 from "../svgs/reading2";
function Login() {
  return (
    <div className="form-cont-main">
      <Nav />
      <Container fluid className="form-cont">
        <Row className="row-1">
          <Col className="col-1" lg={12}>
            <div className="select-h1">
              <h1 className="login-h1 selected-h1">Sign in</h1>
              <h1 className="sign-h1">Sign up</h1>
            </div>
            {/* Form */}
            <form className="form-1">
              <div className="email-container">
                <div className="email-input">
                  <label className="custom-field-2">
                    <input type="text" name="email" required />
                    <span className="placeholder">Your Email</span>
                  </label>
                </div>
              </div>
              <div className="email-container">
                <div className="email-input">
                  <label className="custom-field-2">
                    <input type="text" name="passowrd" required />
                    <span className="placeholder">Password</span>
                  </label>
                </div>
              </div>
            </form>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Login;
