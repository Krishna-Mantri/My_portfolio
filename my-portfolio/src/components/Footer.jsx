import React from "react";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaTelegram,
} from "react-icons/fa";
import { SiGmail } from "react-icons/si";

export default function Footer() {
  return (
    <footer className="relative bg-[#0d0014] text-white overflow-hidden">
      
      {/* Glow Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2
                        w-125 h-50
                        bg-purple-600/40
                        rounded-full blur-3xl opacity-40">
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center md:text-left">

          {/* Brand */}
          <div>
            <h2 className="text-3xl font-bold italic text-white">
              Portfolio
            </h2>
            <p className="mt-3 text-gray-400 text-sm max-w-xs">
              My personal portfolio website showcasing my projects and skills.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-purple-400">
              Quick Links
            </h3>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#home" className="hover:text-purple-400 transition">Home</a></li>
              <li><a href="#about" className="hover:text-purple-400 transition">About</a></li>
              <li><a href="#skills" className="hover:text-purple-400 transition">Skills</a></li>
              <li><a href="#projects" className="hover:text-purple-400 transition">Projects</a></li>
              <li><a href="#contact" className="hover:text-purple-400 transition">Contact</a></li>
            </ul>
          </div>

          {/* Socials */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-purple-400">
              Connect With Me
            </h3>
            <div className="flex justify-center md:justify-start gap-5 text-2xl">
              <a
                href="https://github.com/Krishna-Mantri"
                target="_blank"
                className="hover:text-purple-400
                           hover:shadow-[0_0_20px_rgba(168,85,247,0.8)]
                           transition"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/krishna-mantri-41165628a/"
                target="_blank"
                className="hover:text-purple-400 transition"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://www.instagram.com/krishna.mantri2927/"
                target="_blank"
                className="hover:text-purple-400 transition"
              >
                <FaInstagram />
              </a>
              <a
                href="https://t.me/Krishna_mantri"
                target="_blank"
                className="hover:text-purple-400 transition"
              >
                <FaTelegram />
              </a>
              <a
                href="https://mail.google.com/mail/u/0/?view=cm&to=krishnamantri950@gmail.com&su=Portfolio%20Inquiry&body=Tell%20me%20about%20your%20project"
                target="_blank"
                className="hover:text-purple-400 transition"
              >
                <SiGmail />
              </a>

            </div>
          </div>

        </div>

        {/* Divider */}
        <div className="border-t border-purple-500/20 mt-12 pt-6 text-center">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} Krishna Mantri. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
