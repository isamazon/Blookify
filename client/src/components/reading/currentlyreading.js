import React, { useState, useEffect } from 'react';
import { Container, Row } from 'react-bootstrap';
import Slide from 'react-reveal/Slide';
// Components

import Sidebar from './sidebar';
import BookPost from './bookpost';
import Emptybook from './emptybook';
// redux
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { getPosts } from '../../actions/posts';
// styles
import './profile.css';
import './bookpost.css';

const CurrentlyReading = () => {
  const [currentId, setCurrentId] = useState(null);
  const dispatch = useDispatch();

  // Retrieving post Data
  useEffect(() => {
    dispatch(getPosts());
  }, [currentId, dispatch]);

  const posts = useSelector((state) => state.posts);

  // Ternary operator keeping page blank if no posts are there
  return !posts.length ? (
    // Component that has an empty box since no books have been posted
    <Emptybook
      emptybookp="No Books has been uploaded here yet!"
      routeto="/Addbook"
      linktext="Add a book here!"
    />
  ) : (
    <Container fluid className="main-container">
      <Slide bottom cascade>
        <h1 className="currently-reading-h1">Currently reading</h1>
      </Slide>
      <Row className="profile-row">
        {/* <h1 className='currently-reading-h1'>Currently reading:</h1> */}
        <Sidebar />
        <div className="reading-container">
          {posts.map((post) => (
            <BookPost
              key={post._id}
              post={post}
              setCurrentId={setCurrentId}
              // This is only from edit form component
              currentId={currentId}
            />
          ))}
        </div>
      </Row>
    </Container>
  );
};

export default CurrentlyReading;
