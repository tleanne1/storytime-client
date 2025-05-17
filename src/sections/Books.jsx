import React from "react";
import book1 from "../assets/book1.jpg";
import book2 from "../assets/book2.jpg";
import book3 from "../assets/book3.jpg";

const books = [
  {
    title: "The Moonlight Bunny",
    desc: "A gentle bedtime tale about a bunny who brings sweet dreams to children.",
    image: book1,
  },
  {
    title: "The Curious Cloud",
    desc: "A playful cloud travels the world asking big questions and learning along the way.",
    image: book2,
  },
  {
    title: "The Garden Parade",
    desc: "An uplifting story of friendship and growth in a blooming garden of wonder.",
    image: book3,
  },
];

const Books = () => {
  return (
    <section id="books" className="bg-cream py-20 px-6 md:px-20">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-display font-bold text-darkblue mb-3">
          Books by Emma Joy
        </h2>
        <p className="text-darkblue text-base max-w-xl mx-auto">
          Wholesome reads that inspire wonder, kindness, and giggles — perfect for ages 3 to 7.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {books.map((book, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-md overflow-hidden"
          >
            <img
              src={book.image}
              alt={book.title}
              className="w-full h-60 object-cover"
            />
            <div className="p-4 text-left">
              <h3 className="font-semibold text-lg text-darkblue mb-2">
                {book.title}
              </h3>
              <p className="text-darkblue/80 text-sm">{book.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Books;
