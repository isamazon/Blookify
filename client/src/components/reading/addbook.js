import React, { useState, useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './profile.css';
import axios from 'axios';
import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';

// Redux

// API url

// components
import Search from './search';

import Booklist from './booklist';
import Sidebar from './sidebar';
// imgs
import book1 from '../../assets/successbook.png';
function Profile() {
  const [section, setSection] = useState([]);
  const [input, setInput] = useState('');
  const [error, setError] = useState();
  const changeInput = (e) => {
    setInput(e.target.value);
    // setInput2(e.target.value);
  };
  // API fetch request
  useEffect(() => {
    const request = () => {
      if (input.length >= 3) {
        axios
          .get(
            `https://www.googleapis.com/books/v1/volumes?q=intitle:${input}&key=AIzaSyDLVd6ZQY0u7IWA0fqW2U8lUhrZSBF2ZI4`
          )
          .then((book) => {
            setSection(book.data.items);
            // console.log(book.data.items);
          })
          .catch((error) => {
            setError(error);
          });
      } else {
        setSection([]);
      }
    };
    request();
  }, [input, setInput]);

  // Toggle the sucess modal
  const [modal, setModal] = useState('false');

  const toggleModal = () => {
    setModal(!modal);
  };

  if (error || !Array.isArray(section)) {
    window.location.reload(false);
  }
  return (
    <Container fluid className="main-container">
      <div className={modal ? 'empty' : 'added-modal'}>
        <Fade>
          <div className="added-inner-modal">
            <button className="exit-button" onClick={toggleModal}>
              X
            </button>
            <Zoom>
              <img src={book1} alt="" className="success-img" />
            </Zoom>
            <Slide bottom cascade>
              <h1 className="successful-h1">Successfully added book!</h1>
              <p className="successful-p">
                View your reading book section or add another book?
              </p>
              <div className="button-container">
                <button className="add-button" onClick={toggleModal}>
                  Add another book
                </button>
                <Link
                  className="link"
                  to="/currentlyreading"
                  className="reading-button"
                >
                  Go to reading page
                </Link>
              </div>
            </Slide>
          </div>
        </Fade>
      </div>

      <Row className="profile-row">
        <Sidebar />
        <Col xl={11} className="profile-cont">
          <Search
            inputvalue={input}
            //   author={input2}
            onChange={changeInput}
            placeholder="Search title here..."
            placeholder2="Author"
            //   submit={changeInput}
          />

          <div className="booklist-cont">
            {section.map((data) => (
              <Booklist
                key={data.id ? data.id : ' '}
                // handle function
                // img data/value
                imgurl={data.volumeInfo.imageLinks}
                alt={data.volumeInfo.title}
                // title data/value
                title={
                  data.volumeInfo.title
                    ? data.volumeInfo.title
                    : 'no title found'
                }
                author={
                  data.volumeInfo.authors ? data.volumeInfo.authors : 'N/A'
                }
                pgcount={data.volumeInfo.pageCount}
                description={
                  data.volumeInfo.description
                    ? data.volumeInfo.description
                    : 'no description'
                }
                link={data.selfLink}
                // Success modal
                Toggle={toggleModal}
              />
            ))}
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Profile;
