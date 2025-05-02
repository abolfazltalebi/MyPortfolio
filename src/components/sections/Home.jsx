import React from "react";

export default function Home() {
  return (
    <section
      className="min-h-screen flex items-center justify-center relative"
      id="home"
    >
      <div className="text-center z-10 px-10">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent leading-right capitalize">
          hi, i'm abolfazl talebi
        </h1>
        <p className="text-gray-400 text-lg mb-8 mx-auto max-w-lg leading-normal">
          I'm a front-end developer who loves writing simple and complex code.
          Loves building and developing small and large projects full of
          challenges.
        </p>
        <div className="flex items-center justify-center space-x-4">
          <a
            href="#projects"
            className="bg-blue-500 text-white capitalize py-3 px-6 rounded transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]"
          >
            view projects
          </a>
          <a
            href="#projects"
            className="bg-blue-500 text-white capitalize py-3 px-6 rounded transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]"
          >
           contact me
          </a>
        </div>
      </div>
    </section>
  );
}
