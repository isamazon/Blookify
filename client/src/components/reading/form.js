import React, { useEffect, useState } from "react";
// CSS
import "./profile.css";
function Form() {
  const [bookData, setBookData] = useState({
    title: "",
    author: "",
  });
  return (
    <div>
      <form className="form">
        <label>
          Book title:
          <input
            type="text"
            name="title"
            value={bookData.title}
            onChange={(e) =>
              setBookData({
                ...bookData,
                title: e.target.value,
              })
            }
          />
        </label>
        <label>
          Authors name:
          <input
            type="text"
            name="author"
            value={bookData.author}
            onChange={(e) =>
              setBookData({
                ...bookData,
                author: e.target.value,
              })
            }
          />
        </label>
      </form>
    </div>
  );
}

export default Form;
