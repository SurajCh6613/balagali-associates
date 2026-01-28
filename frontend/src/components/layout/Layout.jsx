import React from "react";
import Navbar from "./Navbar";
import Hero from "../../pages/Hero";
import About from "../../pages/About";
import PracticeAreas from "../../pages/PracticeAreas";
import Gallery from "../../pages/Gallery";
import Contact from "../../pages/Contact";

const Layout = () => {
  return (
    <div className="w-full h-full">
      <Navbar />
      <Hero />
      <About />
      <PracticeAreas />
      <Contact />
      <Gallery />
    </div>
  );
};

export default Layout;
