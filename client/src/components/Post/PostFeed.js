import { useState, useEffect } from "react";

function PostFeed() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/posts")
      .then((response) => response.json())
      .then((data) => setPosts(data))
      .catch((error) => console.error(error));
  }, []);
  return (
    <div className="postfeed-wrapper">
    {/* TO DO: POST CARD */}

      <h2>Posts:</h2>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <h3>{post.title}</h3>
            <p>Category: {post.category}</p>
            <p>Description: {post.description}</p>
            <p>{post.body}</p>
            <p>User: {post.user}</p>
            <p>Upvotes: {post.upvotes}</p>
            <p>Downvotes: {post.downvotes}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PostFeed;