import "./PostCard.css";

function PostCard(props) {
  const post = props.post;
  return (
    <div className="postcard-wrapper">
      <div className="postcard-header">
        <p className="post-category">{post.category}</p>
        <p>by {post.user}</p>
      </div>
      <div className="postcard-title">
        <p>{post.title}</p>
      </div>
      <div className="postcard-description">
        <p>{post.description}</p>
      </div>

      <div className="postcard-votes">
        <p>Upvotes: {post.upvotes}</p>
        <p>Downvotes: {post.downvotes}</p>
      </div>
    </div>
  );
}

export default PostCard;
