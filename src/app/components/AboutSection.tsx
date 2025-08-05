"use client";
import React from "react";
import Image from "next/image";

const skills = [
  "C#",
  "ASP.NET Core",
  "Entity Framework Core",
  "Azure",
  "GitHub Actions",
  "JavaScript",
  "React",
  "Node.js"
];

const highlight = (text: string) => (
  <span className="inline-block px-2 py-1 rounded bg-gradient-to-r from-blue-500 via-violet-500 to-pink-500 text-white text-xs font-semibold mx-1 shadow-sm">
    {text}
  </span>
);

const AboutSection = () => {
  return (
    <section className="relative m-0 p-0">
      {/* Background accents */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-0 left-0 w-[400px] h-[300px] bg-gradient-to-br from-blue-400/30 via-violet-400/20 to-pink-400/10 rounded-full blur-3xl opacity-40" />
        <div className="absolute bottom-0 right-0 w-[300px] h-[200px] bg-gradient-to-tr from-violet-500/20 to-blue-400/10 rounded-full blur-2xl opacity-30" />
        {/* Optional grid lines */}
        <svg className="absolute inset-0 w-full h-full" style={{ zIndex: 0 }}>
          <defs>
            <pattern id="about-grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#7f5af0" strokeWidth="0.5" opacity="0.06" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#about-grid)" />
        </svg>
      </div>
      <div className="relative z-10 max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center bg-white/30 dark:bg-slate-900/30 rounded-3xl shadow-2xl p-8 md:p-16">
        {/* Profile image */}
        <div className="flex justify-center items-center">
          <div className="flex flex-col items-center gap-4">
            <div className="rounded-2xl bg-white/40 dark:bg-slate-900/40 shadow-xl p-2 md:p-4 backdrop-blur-xl">
              <Image
                src="/profile.jpg"
                alt="Sam Lekkla profile"
                width={180}
                height={180}
                className="rounded-full object-cover shadow-lg border-4 border-blue-400 dark:border-violet-400"
                priority
              />
            </div>
            <div className="flex flex-wrap gap-2 mt-2 justify-center">
              {skills.map((tag) => (
                <span key={tag} className="px-3 py-1 rounded-full bg-gradient-to-r from-blue-500 via-violet-500 to-pink-500 text-white text-xs font-semibold shadow-sm">
                  {tag}
                </span>
              ))}
            </div>
            <a
              href="/Resume.pdf"
              download
              className="inline-block w-fit mt-2 px-6 py-3 rounded-xl font-bold text-base bg-gradient-to-r from-blue-500 via-violet-500 to-pink-500 text-white shadow-lg border-2 border-blue-400 dark:border-violet-400 hover:scale-105 hover:shadow-neon focus:outline-none focus:ring-2 focus:ring-pink-400 focus:ring-offset-2 transition-all duration-300"
            >
              Download my resume
            </a>
          </div>
        </div>
        {/* About text */}
        <div className="flex flex-col gap-6 text-slate-700 dark:text-slate-200 font-sans">
          <div className="flex items-center gap-2 mb-1">
            <span className="text-2xl md:text-3xl">🚀</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-blue-500 dark:text-violet-400 relative inline-block">
              About Me
              <span className="block w-16 h-1 bg-gradient-to-r from-blue-500 via-violet-500 to-pink-500 rounded-full absolute left-0 -bottom-2 animate-gradient-flow" />
            </h2>
          </div>
          <p className="text-lg font-semibold text-slate-800 dark:text-slate-100">
            Hi! I’m Sam — a <span className="text-blue-500 dark:text-violet-400 font-bold">fullstack developer</span> who loves turning ideas into reality with code.
          </p>
          <div className="flex flex-wrap gap-4 mb-2">
            <span className="flex items-center gap-1 px-3 py-1 rounded-full bg-violet-100 dark:bg-violet-900/40 text-violet-700 dark:text-violet-200 text-xs font-semibold shadow-sm">
              <span className="text-lg">🌐</span> Cloud & Web
            </span>
            <span className="flex items-center gap-1 px-3 py-1 rounded-full bg-gradient-to-r from-blue-500 via-violet-500 to-pink-500 text-white text-xs font-semibold shadow-sm">
              <span className="text-lg">🛠️</span> C# / React / Azure
            </span>
          </div>
          <p className="text-base font-normal">
            I specialize in {highlight("C#")}, {highlight("ASP.NET Core")}, and {highlight("Entity Framework Core")}, and also enjoy working with {highlight("JavaScript")}, {highlight("React")}, and {highlight("Node.js")}. I build secure RESTful APIs, implement clean architecture, and work with relational databases using code-first principles. I also deploy to the cloud using {highlight("Azure")}, manage secrets with Key Vault, and use {highlight("GitHub Actions")} for automation.
          </p>
          <p className="text-base font-normal">
            I’m always eager to learn, experiment, and collaborate with passionate teams. I value <span className="font-semibold text-blue-500 dark:text-violet-400">clean code</span>, <span className="font-semibold text-blue-500 dark:text-violet-400">performance</span>, and <span className="font-semibold text-blue-500 dark:text-violet-400">continuous growth</span>.
          </p>
          <div className="mt-4 text-xl font-semibold italic text-blue-500 dark:text-violet-400 border-l-4 border-blue-400 dark:border-violet-400 pl-4">
            Let’s build something meaningful together.
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
