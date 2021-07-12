import React, { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./components/About";
import Projects from "./components/Projects";
// import Contact from './components/Contact';
// import Blog from './components/Blog';
// import Calendar from './components/Calendar';

function App() {
  const renderPage = () => {
    switch (currentPage) {
      case "About":
        return <About />;
      case "Projects":
        return <Projects />;
      // case 'Blog':
      //   return <Blog />;
      // case 'Contact':
      //   return <Contact />;
      // case 'Calendar':
      //   return <Calendar />;
      default:
        return <Home />;
    }
  };
  return (
    <div>
      <Header />
      <main></main>
      <Footer />
    </div>
  );
}

export default App;
