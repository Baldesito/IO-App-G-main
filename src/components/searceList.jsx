// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import SingleBook from "./SingleBook";
import { Form } from "react-bootstrap";

function BookList({ books }) {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <Form.Group controlId="search">
        <Form.Label>Search Books</Form.Label>
        <Form.Control
          type="text"
          placeholder="Search by title"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </Form.Group>
      <div className="d-flex flex-wrap">
        {filteredBooks.map((book) => (
          <SingleBook key={book.asin} book={book} />
        ))}
      </div>
    </div>
  );
}

export default BookList;
