import React from "react";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Books from "./sections/Books";



const App = () => {
  return (
    <main className="font-sans">
      <Hero />
      <About />
      <Books />
    </main>
  );
};

export default App;
