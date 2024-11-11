import React from "react";
import blogData from "../data/blog"; // Assuming you're still using the blog data
import Header from "./Header"; // Import the Header component
import About from "./About"; // Import the About component
import ArticleList from "./ArticleList"; // Import the ArticleList component

function App() {
  return (
    <div className="App">
      {/* Header Section */}
      <Header name="Underreacted" />

      {/* Aside Section */}
      <About>
        <h2>About This Blog</h2>
        <p>{blogData.about}</p>
      </About>

      {/* Main Content Section */}
      <main>
        <h2>Latest Posts</h2>
        {/* Render the ArticleList component to list the posts */}
        <ArticleList posts={blogData.posts} />
      </main>
    </div>
  );
}

export default App;
