import React from "react";
//import Layout from "./components/layout/Layout";
import { Toaster } from "react-hot-toast";
import RoutePath from "./routes/RoutePath";

const App = () => {
  return (
    <>
      <Toaster position="top-right" reverseOrder={false} />
      {/* <Layout /> */}
      <RoutePath />
    </>
  );
};

export default App;
