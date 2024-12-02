// eslint-disable-next-line no-unused-vars
import React, { Component } from "react";
import { Card } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import CommentArea from "./CommentArea";

class SingleBook extends Component {
  state = {
    selected: false,
  };

  toggleSelect = () => {
    this.setState((prevState) => ({
      selected: !prevState.selected,
    }));
  };

  render() {
    const { book } = this.props;
    return (
      <div>
        <Card
          className={`m-2 ${this.state.selected ? "border-danger" : ""}`}
          style={{ width: "15rem" }}
          onClick={this.toggleSelect}
        >
          <Card.Img variant="top" src={book.img} />
          <Card.Body>
            <Card.Title className="title">{book.title}</Card.Title>
            <Card.Text>
              <div>{book.price}</div>
            </Card.Text>

            <Button className="m-2 btn-success" variant="primary">
              Prenota
            </Button>
            <Button className="m-2" variant="primary">
              Leggi
            </Button>
          </Card.Body>
        </Card>

        {this.state.selected && <CommentArea bookId={book.asin} />}
      </div>
    );
  }
}

export default SingleBook;
