// eslint-disable-next-line no-unused-vars
import React from "react";

function SingleComment({ comment }) {
  return (
    <div className="mb-2">
      <p>{comment.text}</p>
      <small>Rating: {comment.rating}</small>
    </div>
  );
}

export default SingleComment;
