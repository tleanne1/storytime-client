import React from "react";
import heroImg from "../assets/hero-books.jpg"; // Replace with your image

const Hero = () => {
  return (
    <section
      id="home"
      className="relative bg-cover bg-center bg-no-repeat h-[90vh] flex items-center justify-center px-6"
      style={{ backgroundImage: `url(${heroImg})` }}
    >
      <div className="absolute inset-0 bg-sky/70 z-0 backdrop-blur-sm" />
      <div className="relative z-10 text-center text-night max-w-2xl">
        <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
          StoryTime Kids
        </h1>
        <p className="text-lg md:text-xl mb-6">
          Whimsical tales for bright little readers. Explore books, meet the author, and spark imagination.
        </p>
        <a
          href="#books"
          className="inline-block bg-night text-white px-6 py-3 rounded-full font-semibold hover:bg-coral transition"
        >
          View Books
        </a>
      </div>
    </section>
  );
};

export default Hero;
