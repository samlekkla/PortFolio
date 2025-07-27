"use client";
import React from "react";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center bg-gradient-to-br from-slate-100/80 to-blue-50/60 dark:from-slate-900/80 dark:to-blue-950/60 overflow-hidden">
      {/* Futuristic background accents */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {/* Glowing gradient blobs */}
        <div className="absolute top-0 left-1/2 w-[600px] h-[400px] -translate-x-1/2 bg-gradient-to-br from-blue-400/40 via-violet-400/30 to-pink-400/20 rounded-full blur-3xl opacity-60" />
        <div className="absolute bottom-0 right-0 w-[300px] h-[200px] bg-gradient-to-tr from-violet-500/30 to-blue-400/20 rounded-full blur-2xl opacity-40" />
        {/* Faint grid overlay */}
        <svg
          className="absolute inset-0 w-full h-full"
          style={{ zIndex: 0 }}
        >
          <defs>
            <pattern
              id="grid"
              width="40"
              height="40"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 40 0 L 0 0 0 40"
                fill="none"
                stroke="#7f5af0"
                strokeWidth="0.5"
                opacity="0.08"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>
      {/* Main content */}
      <div className="relative z-10 w-full max-w-3xl mx-auto flex flex-col items-center justify-center text-center px-4 py-16 md:py-32">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-wide leading-tight text-slate-900 dark:text-white mb-6 font-sans drop-shadow-lg">
          Turning complex ideas into{" "}
          <span className="text-blue-500 dark:text-violet-400">
            simple, powerful
          </span>{" "}
          web applications.
        </h1>
        <p className="text-lg md:text-2xl font-medium text-slate-600 dark:text-slate-300 mb-10 max-w-2xl mx-auto">
          Open to new opportunities — let’s build something great together.
        </p>
        <Link
          href="#projects"
          className="inline-block px-8 py-4 rounded-xl font-bold text-lg bg-gradient-to-r from-blue-500 via-violet-500 to-pink-500 text-white shadow-lg border-2 border-blue-400 dark:border-violet-400 hover:scale-105 hover:shadow-neon focus:outline-none focus:ring-2 focus:ring-pink-400 focus:ring-offset-2 transition-all duration-300"
        >
          View Projects
        </Link>
      </div>
      {/* Optional glass panel accent */}
      <div className="absolute left-1/2 bottom-8 -translate-x-1/2 w-[80vw] h-24 bg-white/10 dark:bg-slate-900/20 rounded-3xl blur-xl opacity-40 pointer-events-none" />
    </section>
  );
};

export default HeroSection;

// Add to globals.css for animation:
// .animate-gradient-flow { background-size: 200% 200%; animation: gradientFlow 12s ease-in-out infinite alternate; }
// @keyframes gradientFlow { 0% { background-position: 0% 50%; } 100% { background-position: 100% 50%; } }
