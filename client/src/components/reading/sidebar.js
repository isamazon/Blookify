import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AiFillHome } from "react-icons/ai";
import Booksvg from "../svgs/booksvg";
import Readsvg from "../svgs/read";
import Mag from "../svgs/add";
// React reveal
import Slide from "react-reveal/Slide";
import "./profile.css";
function Sidebar() {
  return (
    <Col xl={1} className="sidebar-container">
      <Slide left>
        <div className="nav-side-bar">
          <Link to="/" className="home-link">
            <AiFillHome className="home-icon" size="85%" />
          </Link>
          <ul className="nav-list">
            {/* Reading link */}
            <Slide top>
              <li className="nav-items">
                <Link to="/" className="link-area">
                  <Booksvg width="80%" height="60%" />
                  <p>Reading</p>
                </Link>
              </li>
            </Slide>
            <Slide top>
              <li className="nav-items">
                <Link to="/" className="link-area">
                  <Readsvg classname="svg" width="100%" height="100%" />
                  <p>Read </p>
                </Link>
              </li>
            </Slide>
            <Slide top>
              <li className="nav-items">
                <Link to="/" className="link-area">
                  <Mag classname="svg" width="100%" height="80%" />
                  <p>Add book</p>
                </Link>
              </li>
            </Slide>
          </ul>
          <ul className="logout-section"></ul>
        </div>
      </Slide>
    </Col>
  );
}

export default Sidebar;
