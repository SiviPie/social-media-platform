import { useParams } from "react-router-dom";

function PostPage() {
  const { id } = useParams();
  // fetch post data using the ID parameter
  return (
    <div>
      <h1>Post {id}</h1>
      {/* render post content */}
    </div>
  );
}

export default PostPage;
