import React from "react";
import { FaPython, FaReact, FaGithub } from "react-icons/fa";
import { DiDjango } from "react-icons/di";
import { SiFastapi, SiMysql, SiTableau } from "react-icons/si";
import { BiLogoFlask, BiLogoTailwindCss } from "react-icons/bi";
import { LuBrainCircuit } from "react-icons/lu";
import { AiOutlineApi } from "react-icons/ai";
import robo from "/robo.png";

/* ================= ICON CONFIG ================= */
// Centralized icon styling (ONLY ICON IMPROVEMENT)
const iconStyle = "text-purple-400 text-4xl";

/* ================= SKILLS DATA ================= */
const skills = [
  {
    id: 1,
    Icon: FaReact,
    title: "React",
    description: "Building dynamic and responsive web applications.",
  },
  {
    id: 2,
    Icon: FaPython,
    title: "Python",
    description: "Backend development, scripting, and data handling.",
  },
  {
    id: 3,
    Icon: DiDjango,
    title: "Django",
    description: "Robust backend systems and REST APIs.",
  },
  {
    id: 4,
    Icon: BiLogoFlask,
    title: "Flask",
    description: "Lightweight backend services and APIs.",
  },
  {
    id: 5,
    Icon: SiFastapi,
    title: "FastAPI",
    description: "High-performance and scalable APIs.",
  },
  {
    id: 6,
    Icon: BiLogoTailwindCss,
    title: "Tailwind CSS",
    description: "Modern, responsive UI design.",
  },
  {
    id: 7,
    Icon: SiTableau,
    title: "Tableau",
    description: "Data visualization and dashboards.",
  },
  {
    id: 8,
    Icon: SiMysql,
    title: "SQL",
    description: "Database design and query optimization.",
  },
  {
    id: 9,
    Icon: FaGithub,
    title: "GitHub",
    description: "Version control and collaboration.",
  },
  {
    id: 10,
    Icon: AiOutlineApi,
    title: "REST API",
    description: "Designing scalable RESTful services.",
  },
  {
    id: 11,
    Icon: LuBrainCircuit,
    title: "Machine Learning",
    description: "ML concepts, models, and integrations.",
  },
];

/* ================= SKILL CARD ================= */
const SkillBox = ({ Icon, title, description }) => {
  return (
    <article
      className="bg-[#1a0b2e] p-5 rounded-xl text-center
                 border border-purple-500/20
                 hover:bg-purple-900/40 hover:shadow-[0_0_30px_rgba(168,85,247,0.6)]
                 transition-all duration-300"
    >
      {/* Icon */}
      <div className="flex justify-center mb-4">
        <Icon className={iconStyle} />
      </div>

      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-sm text-gray-400">{description}</p>
    </article>
  );
};

/* ================= MAIN COMPONENT ================= */
export default function Skills() {
  return (
    <section
  id="skills"
  className="relative min-h-screen
             flex justify-center
             text-white px-4
             pt-36 pb-16
             overflow-hidden
             scroll-mt-28"
>

      {/* Glow Background */}
      <div className="absolute  z-0 w-96 h-44 bg-purple-600 rounded-full blur-3xl opacity-40 top-24 left-1/2 -translate-x-1/2"></div>

      {/* Decorative Robots */}
      <img
        src={robo}
        alt="robot left"
        className="absolute z-10 left-4 top-20 sm:left-16 sm:top-32 -rotate-12 w-24 sm:w-32 opacity-70"
      />

      <img
        src={robo}
        alt="robot right"
        className="absolute z-10 right-4 top-20 sm:right-16 sm:top-32 rotate-12 w-24 sm:w-32 opacity-70"
      />

      {/* Content */}
      <div
        data-aos="fade-up"
        data-aos-delay="300"
        className="relative  z-10 max-w-6xl text-center "
      >
        <h1 className="text-3xl sm:text-4xl font-bold mb-4">
          My Expertise <br />
          and <span className="text-purple-400">Skills</span>
        </h1>

        <p className="text-gray-400 mb-10">
          Technologies and tools I have worked with
        </p>

        <div
          data-aos="fade-up"
          data-aos-delay="500"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mt-4 "
        >
          {skills.map((skill) => (
            <SkillBox
              key={skill.id}
              Icon={skill.Icon}
              title={skill.title}
              description={skill.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
