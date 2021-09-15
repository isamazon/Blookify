import React from "react";
import { Col } from "react-bootstrap";
import { Button } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import moment from "moment";
// CSS
import "./bookpost.css";
const BookPost = ({ post }) => {
  return (
    <Col xl={4} className="book-card">
      <div className="inner-card">
        <div className="top-info">
          <h4>testing title</h4>
          <img src="" alt="" />
        </div>
        <div className="bottom-info">
          <h3>Written by: Brandon Sanderson</h3>
          <p className="pagecount-p">Page count: 300</p>
          <Button className="delete-button">
            <DeleteIcon fontSize="large" />
          </Button>
          <p className="date-added">Book added on:</p>
        </div>
      </div>
    </Col>
  );
};

export default BookPost;
