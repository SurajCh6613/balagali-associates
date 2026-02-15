import React from "react";

import { Routes, Route } from "react-router-dom";
import Layout from "../components/layout/Layout";
import AllBlogs from "../pages/Allblogs";

const RoutePath = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />} />
      <Route path="/all-blogs" element={<AllBlogs />} />
     
    </Routes>
  );
};

export default RoutePath;
