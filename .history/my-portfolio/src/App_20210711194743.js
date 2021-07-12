import React, { useState } from "react";
import Header from "./components/Header/Navigation";
import Footer from "./components/Footer";
import About from "./components/About";
import Projects from "./components/Projects";
// import Contact from './components/Contact';
// import Blog from './components/Blog';
// import Calendar from './components/Calendar';

function App() {
  const [currentPage] = useState("Home");
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
        return <App />;
    }
  };
  return (
    <div>
      <Header />
      <main>
        <div>{renderPage(currentPage)}</div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
