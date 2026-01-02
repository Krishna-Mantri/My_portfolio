import React from "react";
import robo from "/robo.png";

export default function Contact() {
  return (
    <section
      id="contact"
      data-aos="fade-up"
      data-aos-delay="300"
      className="min-h-screen flex items-center justify-center
                 px-6 pt-36 pb-16 relative overflow-hidden"
    >
      <article
        className="relative max-w-5xl w-full
                   flex flex-col md:flex-row
                   bg-[#120018]/80 backdrop-blur-xl
                   border border-purple-500/20
                   rounded-3xl shadow-2xl overflow-hidden"
      >
        {/* IMAGE SIDE */}
        <aside className="w-full md:w-1/2 relative flex items-center justify-center">
          {/* Glow */}
          <div
            className="absolute z-0 w-72 h-72 sm:w-96 sm:h-96
                       bg-gradient-to-r from-[#6d2897] via-[#8e6cf5] to-[#bb61c5]
                       rounded-full blur-3xl opacity-60"
          />

          <img
            src={robo}
            alt="Contact illustration"
            className="relative z-10
                       w-64 sm:w-80 md:w-[420px]
                       object-contain"
          />
        </aside>

        {/* FORM SIDE */}
        <section className="w-full md:w-1/2 p-8 sm:p-10">
          <header className="mb-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              Get In <span className="text-purple-400">Touch</span>
            </h2>
            <p className="text-gray-400 mt-2 text-sm">
              Let’s build something amazing together
            </p>
          </header>

          <form className="space-y-6">
            {/* Name */}
            <div>
              <label className="block text-sm text-gray-300 mb-2">
                Name
              </label>
              <input
                type="text"
                placeholder="Your name"
                className="w-full px-4 py-3 rounded-xl
                           bg-gray-900/70 text-white
                           border border-purple-500/20
                           placeholder-gray-500
                           focus:outline-none focus:ring-2 focus:ring-purple-500
                           transition-all"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm text-gray-300 mb-2">
                Email
              </label>
              <input
                type="email"
                placeholder="Your email"
                className="w-full px-4 py-3 rounded-xl
                           bg-gray-900/70 text-white
                           border border-purple-500/20
                           placeholder-gray-500
                           focus:outline-none focus:ring-2 focus:ring-purple-500
                           transition-all"
              />
            </div>

            {/* Message */}
            <div>
              <label className="block text-sm text-gray-300 mb-2">
                Message
              </label>
              <textarea
                rows="4"
                placeholder="Your message"
                className="w-full px-4 py-3 rounded-xl
                           bg-gray-900/70 text-white
                           border border-purple-500/20
                           placeholder-gray-500 resize-none
                           focus:outline-none focus:ring-2 focus:ring-purple-500
                           transition-all"
              />
            </div>

            {/* Button */}
            <button
              className="w-full py-3 rounded-full text-lg font-semibold
                         text-white border border-purple-500
                         hover:bg-purple-800
                         hover:shadow-[0_0_30px_rgba(168,85,247,0.8)]
                         transition-all duration-300"
            >
              Send Message
            </button>
          </form>
        </section>
      </article>
    </section>
  );
}
