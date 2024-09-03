import { FaLinkedin, FaGithub } from "react-icons/fa";
import React from "react";

export default function Footer() {
  return (
    <footer className="mb-10 px-4 text-center text-gray-500">
      <div className="flex gap-6 justify-center mb-4 ">
        <a
          href="https://www.linkedin.com/in/nataliechc/"
          target="_blank"
          className="hover:text-gray-600 transition dark:hover:text-gray-200"
        >
          <FaLinkedin size={28} />
        </a>

        <a
          href="https://github.com/natccc"
          target="_blank"
          className="hover:text-gray-600 transition dark:hover:text-gray-200"
        >
          <FaGithub size={28} />
        </a>
      </div>
      <small className="mb-2 text-xs block">
        &copy; 2024 Natalie Chan. All rights reserved.
      </small>
    </footer>
  );
}
