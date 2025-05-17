import React from "react";
import authorImg from "../assets/author.jpg";

const About = () => {
  return (
    <section id="about" className="bg-paleblue py-20 px-6 md:px-20">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        <div className="overflow-hidden rounded-xl shadow-lg">
          <img
            src={authorImg}
            alt="Author"
            className="w-full h-full object-cover"
          />
        </div>

        <div>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-darkblue mb-4">
            Meet the Author
          </h2>
          <p className="text-darkblue text-base leading-relaxed mb-4">
            Hi, I’m Edmond Joy — a children’s author who believes stories shape how we see the world. Through colorful characters and cozy adventures, I write to spark imagination, kindness, and giggles.
          </p>
          <p className="text-darkblue text-base leading-relaxed">
            Whether it’s bedtime or playtime, my books are meant to be a friend your little ones return to again and again.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
