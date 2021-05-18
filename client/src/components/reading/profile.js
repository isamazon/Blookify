import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./profile.css";
import axios from "axios";
// API url

// components
import Search from "./search";
import Nav from "../navbar";
import Bookrow from "../reading/bookrow";
import Booklist from "../reading/booklist";

function Profile() {
  const [section, setSection] = useState([]);
  const [input, setInput] = useState("");
  const [input2, setInput2] = useState("");

  const changeInput = (e) => {
    setInput(e.target.value);
    setInput(e.target.value);
  };

  useEffect(() => {
    const request = () => {
      if (input.length && input2.length >= 3) {
        axios
          .get(
            `https://www.googleapis.com/books/v1/volumes?q=${input}+inauthor:${input2}&key= AIzaSyDLVd6ZQY0u7IWA0fqW2U8lUhrZSBF2ZI4`
          )
          .then((res) => {
            setSection(res.data.items);
          })
          .catch((err) => {
            setSection([]);
          });
      } else {
        setSection([]);
      }
    };
    request();
  }, [input, setInput, input2, setInput2]);

  return (
    <div>
      <Nav />
      <Container fluid className="profile-cont">
        <Search
          title={input}
          author={input2}
          placeholder="Book title"
          placeholder2="Author"
          submit={changeInput}
        />
        {section.map((data) => (
          <Booklist imgurl={data.thumbnail} title={data.title} />
        ))}
        <div className="profile-container">
          <Bookrow />
        </div>
      </Container>
    </div>
  );
}

export default Profile;
