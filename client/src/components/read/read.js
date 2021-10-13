import React from 'react';
//
import { Container, Row } from 'react-bootstrap';
import { useSelector } from 'react-redux';
// Components
import Nav from '../navbar';
import ReadPost from './readpost';
import Sidebar from '../reading/sidebar';
import Emptybook from '../reading/emptybook';
import Slide from 'react-reveal/Slide';
// CSS
import '../reading/profile.css';
import '../reading/bookpost.css';

const Read = () => {
  const readBooks = useSelector((state) => state.read);
  // console.log(readBooks);

  return !readBooks.length ? (
    <Emptybook
      emptybookp="You have no finished books here yet!"
      routeto="/currentlyreading"
      linktext="Go to reading page here"
    />
  ) : (
    <div className="main-container">
      <Nav menuicon="menu-link-hidden" />
      <Slide bottom cascade>
        <h1 className="currently-reading-h1">Read books</h1>
      </Slide>
      <Row className="profile-row">
        <Sidebar />
        <div className="reading-container">
          {readBooks.map((post) => (
            <ReadPost
              key={post._id}
              post={post}
              // setCurrentId={setCurrentId}
              // // This is only from edit form component
              // currentId={currentId}
            />
          ))}
        </div>
      </Row>
    </div>
  );
};

export default Read;
