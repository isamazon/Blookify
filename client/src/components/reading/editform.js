import React, { useState, useEffect } from 'react';
// Dependancies
import FileBase from 'react-file-base64';
// Redux
import { useSelector, useDispatch } from 'react-redux';
import { createPost, updatePost, deletePost } from '../../actions/posts';
import './bookpost.css';

const EditForm = ({ currentId, setCurrentId }) => {
  const [bookData, setBookData] = useState({
    title: '',
    author: '',
    pageLength: '',
    selectedFile: '',
    description: '',
  });
  ///////////////////////////////// UPDATING POSTS
  // Selecting posts from backend
  const post = useSelector((state) =>
    currentId ? state.posts.find((post) => post._id === currentId) : null
  );

  useEffect(() => {
    if (post) setBookData(post);
  }, [post]);
  ///////////////////////////////////////////////////
  // Redux
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(bookData);
    if (currentId === 0) {
      dispatch(createPost(bookData));
    } else {
      dispatch(updatePost(currentId, bookData));
    }
  };
  //
  return (
    <form className="update-form" onSubmit={handleSubmit}>
      <div className="filebase-container">
        <FileBase
          type="file"
          className="filebase"
          mutiple={false}
          onDone={({ base64 }) =>
            setBookData({ ...bookData, selectedFile: base64 })
          }
        />
      </div>
      <label className="update-title" type="text" name="title">
        Update title:
      </label>
      <input
        className="input"
        type="text"
        name="title "
        value={bookData.title}
        onChange={(e) => setBookData({ ...bookData, title: e.target.value })}
      />
      <label className="update-title" type="text" name="author">
        Update author:
      </label>
      <input
        className="input"
        type="text"
        name="author"
        value={bookData.author}
        onChange={(e) => setBookData({ ...bookData, author: e.target.value })}
      />
      <label className="update-title" type="text" name="pageLength">
        Update Pg count:
      </label>
      <input
        className="input"
        type="text"
        name="author"
        value={bookData.pageLength}
        onChange={(e) =>
          setBookData({ ...bookData, pageLength: e.target.value })
        }
      />
      <label className="update-title" type="text" name="pageLength">
        Update description:
      </label>
      <input
        className="input-description"
        type="text"
        name="author"
        value={bookData.description}
        onChange={(e) =>
          setBookData({ ...bookData, description: e.target.value })
        }
      />
      <button className="update-button" type="submit">
        Update book
      </button>
    </form>
  );
};

export default EditForm;
