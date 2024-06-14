import React, { useEffect, useState } from "react";

function App() {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Data fetching failed");
        }
        return response.json();
      })
      .then((data) => setPosts(data))
      .catch((error) => setError(error.message));
  }, []);

  return (
    <div className="App">
      <h1>Blog Posts</h1>
      {error ? (
        <div style={{ color: "black" }}>Error: {error}</div>
      ) : (
        <ul style={{ listStyleType: "none", padding: 0 }}>
          {posts.map((post, index) => (
            <li key={post.id}>
              <h2>
                {index + 1}.{post.title}
              </h2>
              <p>{post.body}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;
