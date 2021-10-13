import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { CircularProgress } from '@material-ui/core';
import { Fade } from 'react-reveal';
import { Link } from 'react-router-dom';
import Nav from '../navbar';
import Sidebar from './sidebar';

function Emptybook(props) {
  return (
    <div className="main-container">
      <Nav menuicon="menu-link-hidden" />
      <Row className="profile-row">
        <Sidebar />
        <Fade>
          <div className="blank-reading-container">
            <p>{props.emptybookp}</p>
            <Link className="link-to-add" to={props.routeto}>
              {props.linktext}
            </Link>
          </div>
        </Fade>
      </Row>
    </div>
  );
}

export default Emptybook;
