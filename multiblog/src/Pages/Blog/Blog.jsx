import React from "react";
import { Link, useParams, useLocation } from "react-router-dom";
import "./Blog.css";

export const Blog = () => {
  const { id } = useParams();
  const { state } = useLocation();

  console.log(id, state);

  return (
    <>
      {id && state ? (
        <div className="blog_container">
          <h1>Blog Post</h1>
          <h2>{state.header}</h2>
          <img src = {state.image}/>
          <p>{state.content}</p>
          <div className="blog_back_button">
            <Link to = {"/"}>
              <button>Go back</button>
            </Link>
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};
