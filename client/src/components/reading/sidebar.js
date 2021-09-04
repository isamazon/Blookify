import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./profile.css";
function Sidebar() {
  return (
    <Col xl={1} className="sidebar-container">
      <div className="nav-side-bar"></div>
    </Col>
  );
}

export default Sidebar;
