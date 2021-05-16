import React, { useRef, useState, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import axios from "axios";

function Test() {
  const [results, setResults] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/books").then((response) => {
      setResults(response.data);
    });
  }, []);

  const tempTitle = useRef("");

  const createEntry = () => {
    axios.post("http://localhost:5000/addBook", {
      title: tempTitle,
      finished: false,
    });
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();
    createEntry();
  };

  return (
    <Container>
      <div>
        {results.map((x) => (
          <div>{x.title}</div>
        ))}
      </div>
      <form onSubmit={handleSubmitForm}>
        <input ref={tempTitle} type="text" />
        <input type="submit" />
      </form>
    </Container>
  );
}

export default Test;
