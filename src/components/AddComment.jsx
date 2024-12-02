// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

function AddComment({ bookId }) {
  const [comment, setComment] = useState("");
  const [rating, setRating] = useState(1);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newComment = { text: comment, rating, bookId };
    fetch("https://striveschool-api.herokuapp.com/api/comments", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzQ4ODE0ZjA2ZmM4YzAwMTU2Yjg3NGMiLCJpYXQiOjE3MzI4MDQ5NDMsImV4cCI6MTczNDAxNDU0M30.ALB3YCI6DSsFHOzvR7IdWxgJhj7KfckhhhPRlKYx3YY",
      },
      body: JSON.stringify(newComment),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Comment added:", data);
        setComment("");
        setRating(1);
      })
      .catch((error) => console.error("Error adding comment:", error));
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="commentText">
        <Form.Label>Comment</Form.Label>
        <Form.Control
          type="text"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          required
        />
      </Form.Group>
      <Form.Group controlId="commentRating">
        <Form.Label>Rating</Form.Label>
        <Form.Control
          as="select"
          value={rating}
          onChange={(e) => setRating(parseInt(e.target.value))}
        >
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </Form.Control>
      </Form.Group>
      <Button variant="primary" type="submit">
        Add Comment
      </Button>
    </Form>
  );
}

export default AddComment;
