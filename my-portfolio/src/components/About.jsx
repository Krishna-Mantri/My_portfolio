import React, { useState } from "react";
import img_about2 from "/robo.png";
import img_about1 from "/about1.png";
import img_about from "/about.png";
export default function About() {
  const [showInfo, setShowInfo] = useState(false);

  return (
    <section
      id="about"
      className="min-h-screen overflow-hidden flex items-center justify-center text-white px-4 sm:px-6"
    >
      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
        <figure
          data-aos="fade-right"
          data-aos-delay="500"
          className="flex flex-wrap justify-center gap-4 relative"
        >
          {/* <div
            className="h-50 sm:h-75 w-75 sm:w-100 lg:h-75 lg:w-125
                    bg-linear-to-l from-[#6d2897] via-[#6c95f5] to-[#bb61c5]
                    absolute transform rotate-12 z-0 right-5 -top-2 md:top-10 rounded-full"
          /> */}

          <div className="relative w-full flex justify-center items-center">
            {/* Left floating image */}
            <img
              src={img_about}
              alt="about picture 1"
              className="absolute -top-6 left-6 sm:left-10 z-20
               w-24 h-24 sm:w-32 sm:h-32
               rounded-3xl shadow-lg"
            />

            {/* Main image (center) */}
            <img
              src={img_about1}
              alt="about picture 2"
              className="relative z-10
               w-40 h-52 sm:w-48 sm:h-64 md:w-72 md:h-96
               rounded-lg"
            />

            {/* Right floating image */}
            <img
              src={img_about2}
              alt="about picture 3"
              className="absolute -bottom-6 right-6 sm:right-10 z-20
               w-20 h-20 sm:w-32 sm:h-32
               rounded-3xl shadow-2xl"
            />
          </div>
        </figure>
        <article
          data-aos="fade-left"
          data-aos-delay="500"
          className="text-center lg:text-left relative"
        >
          <div
            className="absolute z-0 w-40 h-40 sm:w-60 sm:h-60 bg-[#cd3cf5]
    rounded-full blur-3xl opacity-50 -top-5 left-10"
          />

          <header>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
              About Me
            </h1>
          </header>

          <p className="text-base text-justify sm:text-lg md:text-xl text-gray-300 mb-6 sm:mb-8 leading-relaxed">
            Motivated and detail-oriented 4th-year B.E student with a strong
            foundation in backend and full-stack web development. Skilled in
            Python, Django, FastAPI and REST API design; with ongoing experience
            in building scalable applications and learning modern frontend
            frameworks like React.
          </p>

          <footer className="flex flex-col items-center gap-4">
            <button
              onClick={() => setShowInfo(!showInfo)}
              className="inline-flex text-white border-2 py-2 px-4 sm:px-6
      focus:outline-none hover:bg-[#801b9c]
      hover:shadow-[0_0_40px_rgba(128,0,128,0.7)]
      rounded-full text-sm sm:text-lg"
            >
              {showInfo ? "Show Less" : "Learn More"}
            </button>

            {/* Info Section */}
            {showInfo && (
              <div
                className=" mb-4 max-w-xl  text-justify text-gray-300
                    bg-white/10 backdrop-blur-md
                    p-4 rounded-2xl border border-white/20"
              >
                <p>
                    Completed multiple impactful projects, including an e-commerce platform, a machine learning-based insurance premium predictor, and a task management application built using React.js. Gained valuable industry exposure through an internship at City Service Link and active participation in the Smart India Hackathon (SIH). Passionate about backend engineering, AI/ML integration, and building user-centric solutions. A quick learner and effective problem solver with strong communication skills, teamwork capabilities, and the ability to perform calmly under pressure. Open to opportunities in backend, full-stack, AI-driven, and analytical roles, including internships and remote positions.
                </p>
              </div>
            )}
          </footer>
        </article>
      </div>
    </section>
  );
}
