import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import TopBar from "./components/TopBar";
import BookList from "./components/searceList";
import ReservationForm from "./components/ReservationForm";
// eslint-disable-next-line no-unused-vars
import React, { Component } from "react";
import { Col, Container, Row } from "react-bootstrap";
import books from "./data/horror.json";
import CommentList from "./components/CommentList";
class App extends Component {
  state = {
    books: books,
  };

  render() {
    return (
      <div className="App">
        <TopBar />
        <h1 className="text-center my-4">La Mia Collezione di Libri</h1>
        <Container>
          <Row className="justify-content-center">
            <Col xs={12} md={12}>
              <BookList books={this.state.books} />

              <CommentList />
              <ReservationForm />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
