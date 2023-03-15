import { useState, useEffect } from "react";
import PostCard from "./PostCard";

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

      <h2>Posts:</h2>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <PostCard post={post}/>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PostFeed;