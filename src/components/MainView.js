import React, { useEffect, useState } from "react";
import Card from "./Card";
import "../style/MainView.css";

function MainView() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch(
      "https://my-json-server.typicode.com/Codeinwp/front-end-internship-api/posts"
    )
      .then((resp) => resp.json())
      .then((data) => setPosts(data))
      .catch((error) => {
        console.log("error while fetching the data : ", error);
      });
  }, []);
  return (
    <div className="main-view">
      {posts.map((post) => (
        <Card key={post.id} post={post} />
      ))}
    </div>
  );
}

export default MainView;
