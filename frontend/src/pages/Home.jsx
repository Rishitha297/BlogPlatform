import { useEffect, useState } from "react";

function Home() {
  const [posts, setPosts] = useState([]);
  const [comments, setComments] = useState({});
  const [commentText, setCommentText] = useState({});

  useEffect(() => {
    fetch("http://localhost:5000/api/posts")
      .then((res) => res.json())
      .then((data) => {
        setPosts(data);

        data.forEach((post) => {
          fetch(`http://localhost:5000/api/comments/${post._id}`)
            .then((res) => res.json())
            .then((commentsData) => {
              setComments((prev) => ({
                ...prev,
                [post._id]: commentsData,
              }));
            });
        });
      });
  }, []);

  const addComment = async (postId) => {
    const res = await fetch("http://localhost:5000/api/comments", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        text: commentText[postId],
        postId,
        userId: "6a3b786a7e226851b926b6d6",
      }),
    });

    const newComment = await res.json();

    setComments((prev) => ({
      ...prev,
      [postId]: [...(prev[postId] || []), newComment],
    }));

    setCommentText((prev) => ({
      ...prev,
      [postId]: "",
    }));
  };

  return (
    <div>
      <h1>Blog Platform</h1>

      {posts.map((post) => (
        <div
          key={post._id}
          style={{
            border: "1px solid black",
            padding: "10px",
            margin: "10px",
          }}
        >
          <h3>{post.title}</h3>
          <p>{post.content}</p>

          <h4>Comments</h4>

          {(comments[post._id] || []).map((comment) => (
            <p key={comment._id}>• {comment.text}</p>
          ))}

          <input
            type="text"
            placeholder="Write a comment"
            value={commentText[post._id] || ""}
            onChange={(e) =>
              setCommentText({
                ...commentText,
                [post._id]: e.target.value,
              })
            }
          />

          <button onClick={() => addComment(post._id)}>
            Add Comment
          </button>
        </div>
      ))}
    </div>
  );
}

export default Home;