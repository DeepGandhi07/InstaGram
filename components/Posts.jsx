import React from "react";
import Post from "./Post";

const posts = [
  {
    id: "123",
    username: "deepgandhi.08",
    userImg:
      "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1148&q=80",
    img: "https://images.unsplash.com/photo-1611068813580-b07ef920964b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8d2FsbHBhcGVyJTIwZm9yJTIwbW9iaWxlfGVufDB8fDB8fA%3D%3D&w=1000&q=80",
    caption: "LIKE AND DESTROY THE LIKE BUTTON",
  },
  {
    id: "123",
    username: "deepgandhi.08",
    userImg:
      "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1148&q=80",
    img: "https://images.unsplash.com/photo-1677517661310-3558e5b2e059?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDF8RnpvM3p1T0hONnd8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=60",
    caption: "LIKE AND DESTROY THE LIKE BUTTON",
  },
];
const Posts = () => {
  return (
    <div>
      {posts.map((post) => (
        <Post
          key={post.id}
          id={post.id}
          username={post.username}
          userImg={post.userImg}
          caption={post.caption}
        />
      ))}
    </div>
  );
};

export default Posts;
