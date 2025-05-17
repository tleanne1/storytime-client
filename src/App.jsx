import React from "react";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Books from "./sections/Books";
import Contact from "./sections/Contact";
import Testimonials from "./sections/Testimonials";
import Footer from "./components/Footer";


const App = () => {
  return (
    <main className="font-sans">
      <Hero />
      <About />
      <Books />
      <Contact />
      <Testimonials />
      <Footer />
    </main>
  );
};

export default App;
