import React, { useEffect, useState } from 'react';
// dependencies
import FileBase from 'react-file-base64';
// Redux dispatch
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
// CSS
import './profile.css';
//
import { createPost } from '../../actions/posts';
function Form() {
  const [bookData, setBookData] = useState({
    title: '',
    author: '',
    pageLength: '',
    selectedFile: '',
    description: '',
  });
  const dispatch = useDispatch();
  const history = useHistory();

  // This handle submit function will be able to handle the dispatch actions
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createPost(bookData));
    history.push('/currentlyreading');
  };

  return (
    <div className="book-form-cont">
      <form className="form" onSubmit={handleSubmit}>
        <h1 className="main-header">Upload your own book!</h1>
        <div className="file-base-cnt">
          <FileBase
            type="file"
            mutiple={false}
            onDone={({ base64 }) =>
              setBookData({ ...bookData, selectedFile: base64 })
            }
          />
        </div>
        {/* Book title */}
        <label className="label-cnt">
          Book title:
          <input
            className="input"
            type="text"
            name="title"
            value={bookData.title}
            onChange={(e) =>
              setBookData({ ...bookData, title: e.target.value })
            }
          />
        </label>
        {/* author name */}
        <label className="label-cnt">
          Authors name:
          <input
            className="input"
            type="text"
            name="author"
            value={bookData.author}
            onChange={(e) =>
              setBookData({ ...bookData, author: e.target.value })
            }
          />
        </label>
        {/* Page length */}
        <label className="label-cnt">
          Page length:
          <input
            className="input"
            type="text"
            name="pageLength"
            value={bookData.pageLength}
            onChange={(e) =>
              setBookData({ ...bookData, pageLength: e.target.value })
            }
          />
        </label>
        <label className="label-cnt">
          Description
          <input
            className="input"
            type="text"
            name="description"
            value={bookData.description}
            onChange={(e) =>
              setBookData({ ...bookData, description: e.target.value })
            }
          />
        </label>
        <button className="submit-button" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Form;
