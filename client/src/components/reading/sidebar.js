import React from 'react';
import { Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaBook, FaBookReader, FaSearchPlus } from 'react-icons/fa';
import { AiFillHome } from 'react-icons/ai';
import Booksvg from '../svgs/booksvg';
import Readsvg from '../svgs/read';
import Mag from '../svgs/add';
// React reveal
import Slide from 'react-reveal/Slide';
import Fade from 'react-reveal/Fade';
import './profile.css';

class Sidebar extends React.Component {
  render() {
    return (
      <Col xl={1} lg={12} className="sidebar-container">
        <Fade>
          <div className="nav-side-bar">
            <Link to="/" className="home-link">
              <AiFillHome className="home-icon" />
            </Link>
            <ul className="nav-list">
              {/* Reading link */}
              <Fade top>
                <li className="nav-items">
                  <Link to="/currentlyreading" className="link-area">
                    <FaBookReader className="icons" />
                    <p>Reading</p>
                  </Link>
                </li>
              </Fade>
              <Slide top>
                <li className="nav-items">
                  <Link to="/read" className="link-area">
                    <FaBook className="icons" />
                    <p>Read</p>
                  </Link>
                </li>
              </Slide>
              <Slide top>
                <li className="nav-items">
                  <Link to="/Addbook" className="link-area">
                    <FaSearchPlus className="icons" />
                    <p>Add book</p>
                  </Link>
                </li>
              </Slide>
            </ul>
          </div>
        </Fade>
      </Col>
    );
  }
}

export default Sidebar;
