// eslint-disable-next-line no-unused-vars
import React, { Component } from "react";
import { Card } from "react-bootstrap";
import AddComment from "./AddComment";

class CommentArea extends Component {
  state = {
    comments: [],
  };

  componentDidUpdate(prevProps) {
    if (this.props.asin && this.props.asin !== prevProps.asin) {
      this.fetchComments(this.props.asin);
    }
  }

  fetchComments = (asin) => {
    fetch(`https://striveschool-api.herokuapp.com/api/comments/${asin}`)
      .then((response) => response.json())
      .then((data) => this.setState({ comments: data }))
      .catch((error) =>
        console.error("Errore nel recupero dei commenti:", error)
      );
  };

  render() {
    const { comments } = this.state;
    const { asin } = this.props;
    return (
      <Card>
        <Card.Body>
          {asin ? (
            <>
              <AddComment bookId={asin} />
              {comments.length > 0 ? (
                <>
                  <Card.Title>Commenti</Card.Title>
                  <ul>
                    {comments.map((comment, index) => (
                      <li key={index}>{comment.comment}</li>
                    ))}
                  </ul>
                </>
              ) : (
                <Card.Text>Nessun commento trovato.</Card.Text>
              )}
            </>
          ) : (
            <Card.Text>Seleziona un libro per vedere i commenti.</Card.Text>
          )}
        </Card.Body>
      </Card>
    );
  }
}

export default CommentArea;
