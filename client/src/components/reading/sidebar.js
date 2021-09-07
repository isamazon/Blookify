import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AiFillHome } from "react-icons/ai";
import Booksvg from "../svgs/booksvg";
// React reveal
import Slide from "react-reveal/Slide";
import "./profile.css";
function Sidebar() {
  return (
    <Col xl={1} className="sidebar-container">
      <Slide left>
        <div className="nav-side-bar">
          <Link className="home-link">
            <AiFillHome className="home-icon" size="80%" />
          </Link>
          <ul className="nav-list">
            <li className="nav-items">
              <Link to="/" className="link-area">
                <Booksvg width="80%" height="60%" />
                <p>Reading</p>
              </Link>
            </li>
            <li className="nav-items"></li>
            <li className="nav-items"></li>
            <li className="nav-items"></li>
            <li className="nav-items"></li>
          </ul>
          <ul className="logout-section"></ul>
        </div>
      </Slide>
    </Col>
  );
}

export default Sidebar;
