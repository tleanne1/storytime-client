import React, { useState } from "react";
import { Link } from "react-scroll";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: "Home", to: "home" },
    { label: "About", to: "about" },
    { label: "Books", to: "books" },
    { label: "Testimonials", to: "testimonials" },
    { label: "Contact", to: "contact" },
  ];

  return (
    <header className="bg-white/90 backdrop-blur-sm shadow-md fixed top-0 left-0 w-full z-50">
      <nav className="max-w-6xl mx-auto px-6 md:px-10 py-4 flex justify-between items-center">
        <h1 className="text-xl font-display font-bold text-darkblue">StoryTime Kids</h1>

        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-darkblue focus:outline-none"
          >
            {isOpen ? "✖" : "☰"}
          </button>
        </div>

        <ul className="hidden md:flex space-x-6 font-semibold text-darkblue">
          {navItems.map((item, index) => (
            <li key={index}>
              <Link
                to={item.to}
                smooth={true}
                duration={500}
                offset={-80}
                className="cursor-pointer hover:text-blue transition"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden px-6 pb-4 space-y-3 font-semibold text-darkblue">
          {navItems.map((item, index) => (
            <li key={index}>
              <Link
                to={item.to}
                smooth={true}
                duration={600}
                offset={-80} // Adjust if your navbar height is different
                className="cursor-pointer hover:text-blue transition"
              >
  {item.label}
</Link>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
};

export default Navbar;
