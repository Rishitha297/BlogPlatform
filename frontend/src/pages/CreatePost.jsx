import { useState } from "react";

function CreatePost() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = async () => {
    const res = await fetch("http://localhost:5000/api/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title,
        content,
      }),
    });

    const data = await res.json();

    alert("Post Created");
    console.log(data);
  };

  return (
    <div>
      <h2>Create Post</h2>

      <input
        type="text"
        placeholder="Title"
        onChange={(e) => setTitle(e.target.value)}
      />

      <br />
      <br />

      <textarea
        placeholder="Content"
        onChange={(e) => setContent(e.target.value)}
      />

      <br />
      <br />

      <button onClick={handleSubmit}>Create</button>
    </div>
  );
}

export default CreatePost;