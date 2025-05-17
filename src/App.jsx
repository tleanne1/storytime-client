import React from "react";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Books from "./sections/Books";
import Contact from "./sections/Contact";


const App = () => {
  return (
    <main className="font-sans">
      <Hero />
      <About />
      <Books />
      <Contact />
    </main>
  );
};

export default App;
