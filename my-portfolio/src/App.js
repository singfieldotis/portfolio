import React from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Header from "./components/Navbar";
import Projects from "./components/Projects";
import Resume from "./components/Skills";
import Footer from "./components/Testimonials";

export default function App() {
  return (
    <main>
      <Header />
      <About />
      <Projects />
      <Resume />
      <Contact />
      <Footer />
    </main>
  );
}
