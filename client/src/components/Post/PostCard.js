import { useState } from "react";
import "./PostCard.css";

function PostCard(props) {
  const [upvotes, setUpvotes] = useState(props.post.upvotes);
  const [downvotes, setDownvotes] = useState(props.post.downvotes);

  const handleUpvote = () => {
    setUpvotes(upvotes + 1);
    fetch(`http://localhost:3001/post`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        _id: props.post._id,
        action: "upvote",
      }),
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.error(error));
  };

  const handleDownvote = () => {
    setDownvotes(downvotes + 1);
    fetch(`http://localhost:3001/post`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        _id: props.post._id,
        action: "downvote",
      }),
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.error(error));
  };

  const handleDelete = () => {
    const postdiv = document.getElementById(`${props.post._id}`);
    console.log(postdiv);
    postdiv.style.display = 'none';

    fetch(`http://localhost:3001/post`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        _id: props.post._id,
        action: "delete",
      }),
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.error(error));
  };

  return (
    <div className="postcard-wrapper" id={props.post._id}>
      <div className="postcard-header">
        <p className="post-category">{props.post.category}</p>
        <p>by {props.post.user}</p>
      </div>
      <div className="postcard-title">
        <p>{props.post.title}</p>
      </div>
      <div className="postcard-description">
        <p>{props.post.description}</p>
      </div>

      <div className="postcard-votes">
        <p>Upvotes: {upvotes}</p>
        <button onClick={handleUpvote}>Upvote</button>
        <p>Downvotes: {downvotes}</p>
        <button onClick={handleDownvote}>Downvote</button>
        <button onClick={handleDelete}>Delete</button>
      </div>
    </div>
  );
}

export default PostCard;
