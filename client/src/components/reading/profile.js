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

  //   const [input2, setInput2] = useState("");

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
  }, [input, setInput]);

  return (
    <div>
      <Nav />
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
              imgurl={data.thumbnail}
              title={data.volumeInfo.title}
              link={data.selfLink}
            />
          ))}
        </div>

        <div className="profile-container">
          <Bookrow />
        </div>
      </Container>
    </div>
  );
}

export default Profile;
