import React from "react";
import Layout from "./components/layout/Layout";
import { Toaster } from "react-hot-toast";

const App = () => {
  return (
    <>
      <Toaster position="top-right" reverseOrder={false} />
      <Layout />
    </>
  );
};

export default App;
