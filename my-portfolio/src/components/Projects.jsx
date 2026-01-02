import React, { useState } from "react";
import cardio from "/cardio1.png";
import ecommerce from "/ecom1.png";
import todo from "/todoreact.png";
import crop from "/crop1.png";

const ProjectCard = ({ image, title, description, link }) => {
  return (
    <article
      className="group relative flex flex-col h-full rounded-3xl bg-white/5
                 border border-white/10 shadow-lg overflow-hidden
                 backdrop-blur-md transition-transform duration-300
                 hover:-translate-y-2 hover:shadow-[0_0_40px_rgba(124,58,237,0.6)]"
    >
      <div className="pointer-events-none absolute -top-10 right-0 h-32 w-32 rounded-full bg-purple-500/40 blur-3xl" />

      <figure className="relative overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-84 object-contain transition-transform duration-500 group-hover:scale-110"
        />

        <div
          className="absolute inset-0 flex items-end justify-center
                     bg-linear-to-t from-black/70 via-black/40 to-transparent
                     opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        >
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="mb-4"
          >
            <button
              className="relative inline-flex items-center gap-2 px-5 py-2.5
                         rounded-full text-sm font-semibold
                         bg-linear-to-r from-purple-500 via-fuchsia-500 to-indigo-500
                         text-white shadow-lg shadow-purple-800/40
                         hover:shadow-purple-500/60 transition-all duration-300"
            >
              Live Preview
              {/* <span className="text-xs opacity-80 group-hover:translate-x-0.5 transition-transform">
                ↗
              </span> */}
            </button>
          </a>
        </div>
      </figure>

      <div className="flex flex-col gap-2 px-5 py-4 pb-5">
        <h3 className="text-lg font-semibold text-white tracking-tight">
          {title}
        </h3>
        <p className="text-sm text-gray-300 text-justify leading-relaxed line-clamp-4">
          {description}
        </p>
      </div>
    </article>
  );
};

export default function Projects() {
  const listProjects = [
    {
      image: cardio,
      title: "CardioLink",
      description:
        "CardioLink is a cutting-edge web application designed for the detection of cardiovascular disease anomalies using advanced Artificial Intelligence (AI) and Machine Learning (ML) technologies. It collects real-time patient data via IoT devices, securely stores this data using Supabase, and generates comprehensive AI-driven reports to assist healthcare providers in early diagnosis and ongoing cardiac health monitoring.",
      link: "https://github.com/Krishna-Mantri/Cardio_link",
    },
    {
      image: ecommerce,
      title: "Ecommerce Platform",
      description:
        "Ecom is a modern, feature-rich e-commerce website built with a robust tech stack including Django for the backend, Tailwind CSS for frontend styling, and integrated payment processing via the Razorpay API.",
      link: "https://github.com/Krishna-Mantri/Ecom",
    },
    {
      image: todo,
      title: "Todo App",
      description:
        "A simple and efficient everyday To-do app built using React.js and Vite, designed to help with planning and scheduling daily tasks in a minimal, fast-refresh environment.",
      link: "https://github.com/Krishna-Mantri/Todo-react",
    },
    {
      image: crop,
      title: "Crop recommendation System",
      description:
        "This project is a Crop Recommendation System that uses machine learning to recommend the most suitable crop to cultivate based on environmental and soil parameters such as nitrogen, phosphorus, potassium levels, temperature, humidity, pH value, and rainfall.",
      link: "https://github.com/Krishna-Mantri/Crop_recommendation_system",
    },
  ];

  const [current, setCurrent] = useState(0);
  const length = listProjects.length;

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === length - 1 ? 0 : prev + 1));
  };

  return (
    <main id="projects" className="p-4 sm:p-6 lg:p-10">
      <section
        data-aos="fade-up"
        data-aos-delay="300"
        className="max-w-5xl mx-auto"
      >
        <header className="text-center relative mb-8 sm:mb-10">
          <div className="pointer-events-none absolute -z-10 left-1/2 -translate-x-1/2 -top-10 h-40 w-40 sm:h-56 sm:w-56 rounded-full bg-[#cd3cf5]/40 blur-3xl opacity-60" />
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 text-white">
            My{" "}
            <span className="bg-linear-to-r from-purple-400 via-pink-400 to-indigo-400 bg-clip-text text-transparent">
              Projects
            </span>
          </h1>
          <p className="max-w-2xl mx-auto text-sm sm:text-base text-gray-300 leading-relaxed">
            A selection of my recent work showcasing my skills and experience in
            various domains.
          </p>
        </header>

        {/* Carousel wrapper */}
        <div className="relative">
          {/* Slider */}
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{
                transform: `translateX(-${current * 100}%)`,
              }}
            >
              {listProjects.map((project, index) => (
                <div key={index} className="min-w-full px-1 sm:px-4">
                  <ProjectCard {...project} />
                </div>
              ))}
            </div>
          </div>

          {/* Controls */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2
                       h-10 w-10 rounded-full flex items-center justify-center
                       bg-black/40 text-white border border-white/20
                       hover:bg-purple-600/70 hover:border-purple-300
                       transition-colors"
          >
            ‹
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2
                       h-10 w-10 rounded-full flex items-center justify-center
                       bg-black/40 text-white border border-white/20
                       hover:bg-purple-600/70 hover:border-purple-300
                       transition-colors"
          >
            ›
          </button>

          {/* Dots */}
          <div className="mt-4 flex justify-center gap-2">
            {listProjects.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`h-2.5 rounded-full transition-all ${
                  current === index
                    ? "w-6 bg-linear-to-r from-purple-400 to-fuchsia-400"
                    : "w-2.5 bg-gray-500/60 hover:bg-gray-300"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
