import React from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Header from "./components/Header";
import Projects from "./components/Projects";
import Resume from "./components/Resume";
import Footer from "./components/Footer";

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
