import React, { useState, useEffect, Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./profile.css";
import axios from "axios";
// API url

// components
import Search from "./search";
import Nav from "../navbar";
import Bookrow from "../reading/bookrow";

class Profile extends Component {
  render() {
    return (
      <div>
        <Nav />
        <Container fluid className="profile-cont">
          <Search
            title={this.state.value1}
            author={this.state.value2}
            submit={(e) => this.onClickHandler(e)}
          />
          <div className="profile-container">{this.renderBook}</div>
        </Container>
      </div>
    );
  }
}

export default Profile;
