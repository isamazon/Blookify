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
          <Col className="col-1" lg={6}>
            <div className="select-h1">
              <h1 className="login-h1 selected-h1">Signin</h1>
              <h1 className="sign-h1">Sign up</h1>
            </div>
            <form>
              <label>
                Name:
                <input type="text" name="name" />
              </label>
              <input type="submit" value="Submit" />
            </form>
          </Col>
          <Col className="col-2" lg={6}>
            <Svg2 width="100%" height="100%" />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Login;
