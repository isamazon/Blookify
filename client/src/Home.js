import React, { useState, useEffect } from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './styles/landingpage.css';

import Svg1 from './components/svgs/reading1';
import Nav from './components/navbar';
import Test from './components/test';

// SVGs

function Home() {
  const [results, setResults] = useState([]);

  return (
    <div>
      <Nav />
      <Container fluid className="landingpage-fl-cnt">
        <div className="svg-cont">
          <Svg1 className="svg1" />
        </div>
        {results.map((item) => (
          <div key={item.title}>{item.title}</div>
        ))}
        <Row className="row-1">
          <div className="text-container">
            <h1>Welcome to Blookify,</h1>
            <p>
              Utilize over 7 million books and store the books youre currently
              reading and the books that youve finished into your own personal
              library.
            </p>
            <div className="button-cont">
              <Link to="/Login" className="btn-1 b-1">
                Login
              </Link>
              <Link to="/Addbook" className="btn-1 b-2">
                Get started
              </Link>
            </div>
          </div>
        </Row>
      </Container>
    </div>
  );
}

export default Home;
