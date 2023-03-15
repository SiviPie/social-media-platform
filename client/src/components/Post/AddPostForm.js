import "./AddPostForm.css";

import { useState } from "react";

// TO DO: CHECK INPUT

function AddPostForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [user, setUser] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const newPost = { title, description, category, user };

    fetch("http://localhost:3001/post", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newPost),
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.error(error));

    // clear the form inputs
    setTitle("");
    setDescription("");
    setCategory("");
    setUser("");
  };

  return (
    <form className="add-post-form" onSubmit={handleSubmit}>
      <div>
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
      </div>
      <div>
        <label htmlFor="description">Description:</label>
        <textarea
          id="description"
          value={description}
          onChange={(event) => setDescription(event.target.value)}
        />
      </div>
      <div>
        <label htmlFor="category">Category:</label>
        <input
          type="text"
          id="category"
          value={category}
          onChange={(event) => setCategory(event.target.value)}
        />
      </div>
      <div>
        <label htmlFor="user">User:</label>
        <input
          type="text"
          id="user"
          value={user}
          onChange={(event) => setUser(event.target.value)}
        />
      </div>

      <button type="submit">Submit</button>
    </form>
  );
}

export default AddPostForm;
