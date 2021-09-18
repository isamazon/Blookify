import React, { useState, useEffect } from 'react';
// Dependancies
import FileBase from 'react-file-base64';
// Redux
import { useSelector, useDispatch } from 'react-redux';
import { createPost, updatePost } from '../../actions/posts';
import './bookpost.css';

const EditForm = ({ currentId }) => {
  const [bookData, setBookData] = useState({
    title: '',
    author: '',
    pageLength: '',
    selectedFile: '',
  });
  ///////////////////////////////// UPDATING POSTS
  // Selecting posts from backend
  const post = useSelector((state) =>
    currentId ? state.posts.find((p) => p._id === currentId) : null
  );

  useEffect(() => {
    if (post) setBookData(post);
  }, [post]);
  ///////////////////////////////////////////////////
  // Redux
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (currentId) {
      dispatch(updatePost(currentId, bookData));
    } else {
      dispatch(createPost(bookData));
    }
  };
  //
  return (
    <form className="update-form" onSubmit={handleSubmit}>
      <FileBase
        type="file"
        mutiple={false}
        onDone={({ base64 }) =>
          setBookData({ ...bookData, selectedFile: base64 })
        }
      />
      <label
        className="update-title"
        type="text"
        name="title"
        value={bookData.title}
        onChange={(e) => setBookData({ ...bookData, title: e.target.value })}
      >
        Update title:
      </label>
      <input className="input" type="text" name="title" />
      <label
        className="update-title"
        type="text"
        name="author"
        value={bookData.author}
        onChange={(e) => setBookData({ ...bookData, author: e.target.value })}
      >
        Update author:
      </label>
      <input className="input" type="text" name="author" />
      <label
        className="update-title"
        type="text"
        name="pageLength"
        value={bookData.pageLength}
        onChange={(e) =>
          setBookData({ ...bookData, pageLength: e.target.value })
        }
      >
        Update Pg count:
      </label>
      <input className="input" type="text" name="author" />
      <button className="update-button" type="submit">
        Submit
      </button>
    </form>
  );
};

export default EditForm;
