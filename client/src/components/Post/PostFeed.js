import { useState, useEffect } from "react";
import PostCard from "./PostCard";
import './PostFeed.css'

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
      <ul>
        {posts.map((post) => (
          <li key={post._id}>
            <PostCard post={post} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PostFeed;
