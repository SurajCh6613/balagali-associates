import React, { useEffect } from "react";
import Navbar from "./Navbar";
import Hero from "../../pages/Hero";
import About from "../../pages/About";
import PracticeAreas from "../../pages/PracticeAreas";
import Gallery from "../../pages/Gallery";
import Contact from "../../pages/Contact";
import FAQ from "../../pages/FAQ";
import Footer from "./Footer";

const Layout = () => {
  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    
    const handleScroll = () => {
      const scrollY = window.scrollY;
      
      sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100; // Offset for navbar
        const sectionId = section.getAttribute("id");
        
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          window.history.replaceState(null, null, `#${sectionId}`);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="w-full h-full">
      <Navbar />
      <section id="home">
        <Hero />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="practice-areas">
        <PracticeAreas />
      </section>
      <section id="contact">
        <Contact />
      </section>
      <section id="faq">
        <FAQ />
      </section>
      <section id="gallery">
        <Gallery />
      </section>
      <Footer />
    </div>
  );
};

export default Layout;