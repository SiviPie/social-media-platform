function PostCard(props) {
    const post = props.post;
    return (
      <div className="postcard">
        <h3>{post.title}</h3>
        <p>Category: {post.category}</p>
        <p>Description: {post.description}</p>
        <p>{post.body}</p>
        <p>User: {post.user}</p>
        <p>Upvotes: {post.upvotes}</p>
        <p>Downvotes: {post.downvotes}</p>
      </div>
    );
  }
  
  export default PostCard;