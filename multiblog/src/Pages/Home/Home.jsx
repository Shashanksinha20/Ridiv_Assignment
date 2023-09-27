import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

export const Home = () => {
  const blogs = [
    {
      id : "travel",
      header: "Travel",
      image:
        "https://content.api.news/v3/images/bin/ded3be00f6965dcfa60d91c42563592d",
      content:
        "Hawaii is known for its beautiful beaches—some of them with unusual colors. Many beaches are filled with white sand, but other Hawaiian shores are covered with green, red, pink, and even black sand. Whether you like hiking, biking, kayaking, sailing, swimming, or just sitting on the beach, Hawaii is the state for you.",
    },

    {
      id : "books",
      header: "Books - Fiction",
      image:
        "https://media.npr.org/assets/img/2012/03/21/wonder-cover_sq-0ab501850ff592d1b022e2704dbec4f6365aa11f-s800-c85.jpg",
      content:
        "Wonder is a contemporary children's novel written by R. J. Palacio, published on 14 February 2012. Wonder was, in part, inspired by an incident where the author's son started to cry after noticing a girl with a severe facial deformity. Inspiration was also pulled from Natalie Merchant's song of the same name.",
    },

    {
      id : "gadgets",
      header: "Gadgets",
      image:
        "https://www.91-cdn.com/hub/wp-content/uploads/2023/08/iphone-15-pro-dummy.jpg",
      content:
        "iPhone is a line of smartphones produced by Apple Inc. that use Apple's own iOS mobile operating system. The first-generation iPhone was announced by then-Apple CEO Steve Jobs on January 9, 2007. Since then, Apple has annually released new iPhone models and iOS updates. As of November 1, 2018, more than 2.2 billion iPhones had been sold. As of 2022, the iPhone accounts for 15.6% of global smartphone market share.",
    },

    {
      id : "health",
      header: "Fitness - Cardio",
      image:
        "https://youfit.com/wp-content/uploads/2022/09/cardio-workouts-at-the-gym.png",
      content:
        "Aerobic exercise (also known as endurance activities, cardio or cardio-respiratory exercise) is physical exercise of low to high intensity that depends primarily on the aerobic energy-generating process.",
    },
  ];

  return (
    <div className="home_container">
      <h1>Home Page</h1>
      <div className="blog_list_container">
        {blogs.map((el) => {
          return (
          <Link to = {`/post/${el.id}`} state = {el}>
            <div>
              <img src={el.image} />
              <h2>{el.header}</h2>
            </div>
          </Link>
          )
        })}
      </div>
    </div>
  );
};
