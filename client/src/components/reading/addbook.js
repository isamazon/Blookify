import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import "./profile.css";
import axios from "axios";
// Redux
import { useDispatch } from "react-redux";
import noimg from "../../assets/Capture.PNG";
import { getPosts } from "../../actions/posts.js";
// API url

// components
import Search from "./search";
import Nav from "../navbar";
import Bookrow from "./bookrow";
import Booklist from "./booklist";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

function Profile(props) {
  const [section, setSection] = useState([]);
  const [input, setInput] = useState("");
  const [bookContainer, setBook] = useState([]);

  const changeInput = (e) => {
    setInput(e.target.value);
    // setInput2(e.target.value);
  };

  useEffect(() => {
    const request = () => {
      if (input.length >= 3) {
        axios
          .get(
            `https://www.googleapis.com/books/v1/volumes?q=intitle:${input}&key=AIzaSyDLVd6ZQY0u7IWA0fqW2U8lUhrZSBF2ZI4`
          )
          .then((book) => {
            setSection(book.data.items);
          })
          .catch((error) => console.log(error));
      } else {
        setSection([]);
      }
    };
    request();
  }, [input, setInput]);

  // Function to send the book to another component
  const moveBook = (data) => {
    data.preventDefault();
    console.log("button clicked");
    const newBook = {
      books: "data",
    };
    axios.put();
    setBook({});
    console.log(setBook);
  };

  return (
    <div>
      <Nav />
      <Link to="/" className="left">
        <FaArrowLeft size="30px" className="arrow-left" />
        <h1>Home</h1>
      </Link>
      <Link to="/Currently" className="right">
        <h1>Currently reading</h1>
        <FaArrowRight size="30px" className="arrow-right" />
      </Link>
      <Container fluid className="profile-cont">
        <Search
          inputvalue={input}
          //   author={input2}
          onChange={changeInput}
          placeholder="Book title"
          placeholder2="Author"
          //   submit={changeInput}
        />

        <div className="booklist-cont">
          {section.map((data) => (
            <Booklist
              key={data.id ? data.id : ""}
              // handle function
              onclick2={moveBook}
              imgurl={data.volumeInfo.imageLinks}
              alt={data.volumeInfo.title}
              title={
                data.volumeInfo.title ? data.volumeInfo.title : "no title found"
              }
              author={
                data.volumeInfo.authors
                  ? data.volumeInfo.authors
                  : "No author found"
              }
              pgcount={data.volumeInfo.pageCount}
              link={data.selfLink}
            />
          ))}
        </div>
      </Container>
    </div>
  );
}

export default Profile;
