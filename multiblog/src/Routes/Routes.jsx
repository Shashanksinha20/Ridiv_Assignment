import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home } from '../Pages/Home/Home'
import { About } from '../Pages/About/About'
import { Blog } from '../Pages/Blog/Blog'

export const AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/post/:id" element={<Blog />} />
      </Routes>
    </>
  );
};
