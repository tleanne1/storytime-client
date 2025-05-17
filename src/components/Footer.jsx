import React from "react";

const Footer = () => {
  return (
    <footer className="bg-darkblue text-white py-10 px-6 md:px-20">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">
        <div>
          <h3 className="text-xl font-bold mb-1">StoryTime Kids</h3>
          <p className="text-sm text-blue-100">
            © {new Date().getFullYear()} StoryTime Kids by Tracey Buentello. All rights reserved.
          </p>
        </div>

        <div className="space-x-6 text-sm">
          <a href="#books" className="hover:underline">
            Books
          </a>
          <a href="#testimonials" className="hover:underline">
            Testimonials
          </a>
          <a href="#contact" className="hover:underline">
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
