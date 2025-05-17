import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="bg-paleblue py-20 px-6 md:px-20">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-display font-bold text-darkblue mb-4">
          Say Hello!
        </h2>
        <p className="text-darkblue mb-8">
          Whether you're a parent, a librarian, or just a fan of stories —
          I'd love to hear from you!
        </p>

        <form
          className="bg-white p-8 rounded-xl shadow-lg space-y-6 text-left"
          onSubmit={(e) => {
            e.preventDefault();
            alert("Thanks for your message! 📨");
          }}
        >
          <div>
            <label className="block text-sm text-darkblue font-medium mb-1">
              Your Name
            </label>
            <input
              type="text"
              required
              className="w-full px-4 py-2 border border-blue/30 rounded-md focus:outline-none focus:ring-2 focus:ring-blue"
            />
          </div>

          <div>
            <label className="block text-sm text-darkblue font-medium mb-1">
              Email
            </label>
            <input
              type="email"
              required
              className="w-full px-4 py-2 border border-blue/30 rounded-md focus:outline-none focus:ring-2 focus:ring-blue"
            />
          </div>

          <div>
            <label className="block text-sm text-darkblue font-medium mb-1">
              Message
            </label>
            <textarea
              rows="4"
              required
              className="w-full px-4 py-2 border border-blue/30 rounded-md focus:outline-none focus:ring-2 focus:ring-blue"
            />
          </div>

          <button
            type="submit"
            className="bg-blue text-white px-6 py-2 rounded-full hover:bg-darkblue transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
