import React from "react";

const testimonials = [
  {
    name: "Lila (Age 6)",
    quote:
      "I love the bunny book! I read it every night and tell it to my stuffed animals.",
  },
  {
    name: "James’ Mom",
    quote:
      "These books helped my son fall in love with reading. The stories are sweet and the illustrations are beautiful.",
  },
  {
    name: "Mr. Thomas – Librarian",
    quote:
      "I always recommend these books to parents looking for meaningful stories with strong values and creativity.",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="bg-cream py-20 px-6 md:px-20">
      <div className="max-w-5xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-display font-bold text-darkblue mb-3">
          What Little Readers Say
        </h2>
        <p className="text-darkblue text-base max-w-xl mx-auto">
          Kind words from the families, kids, and educators who love these stories.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {testimonials.map((t, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-md p-6 text-left"
          >
            <p className="text-darkblue italic mb-4">“{t.quote}”</p>
            <p className="font-semibold text-blue">{t.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
