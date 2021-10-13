import React, { useState } from 'react';
import { Container, Row } from 'react-bootstrap';

import Slide from 'react-reveal/Slide';
import Fade from 'react-reveal/Fade';
import Nav from './components/navbar';
import { Link } from 'react-router-dom';
import './styles/landingpage.css';

import Svg1 from './components/svgs/reading1';

function Home() {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
  return (
    <div>
      <Nav menuicon="menu-link" />
      <Container fluid className="landingpage-fl-cnt">
        <Fade>
          <div className="svg-cont">
            <Svg1 className="svg1" />
          </div>
        </Fade>
        <Row className="row-1">
          <div className="text-container">
            <Slide bottom>
              <h1>
                {user
                  ? `Welcome,  ${user.result.name}`
                  : 'Welcome to Blookify,'}
              </h1>
            </Slide>
            <Slide bottom>
              <p>
                Utilize over 7 million books and store the books you're
                currently reading and the books that youve finished into your
                own personal library.
              </p>
            </Slide>
            <Slide bottom cascade>
              <div className="button-cont">
                {user ? null : (
                  <Link to="/Login" className="btn-1 b-1">
                    Login
                  </Link>
                )}

                <Link to={user ? '/Addbook' : '/login'} className="btn-1 b-2">
                  Get started
                </Link>
              </div>
            </Slide>
          </div>
        </Row>
      </Container>
    </div>
  );
}

export default Home;
