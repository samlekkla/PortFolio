"use client";

import React from "react";
import projectsConfig from "../config/projects.config";
import { FaGithub } from "react-icons/fa";

const ProjectsSection = () => {
  return (
	<section className="relative m-0 p-0">
	  {/* Background accents */}
	  <div className="absolute inset-0 pointer-events-none z-0">
		<div className="absolute top-0 left-0 w-[400px] h-[300px] bg-gradient-to-br from-blue-400/30 via-violet-400/20 to-pink-400/10 rounded-full blur-3xl opacity-40" />
		<div className="absolute bottom-0 right-0 w-[300px] h-[200px] bg-gradient-to-tr from-violet-500/20 to-blue-400/10 rounded-full blur-2xl opacity-30" />
		<svg
		  className="absolute inset-0 w-full h-full"
		  style={{ zIndex: 0 }}
		>
		  <defs>
			<pattern
			  id="projects-grid"
			  width="40"
			  height="40"
			  patternUnits="userSpaceOnUse"
			>
			  <path
				d="M 40 0 L 0 0 0 40"
				fill="none"
				stroke="#7f5af0"
				strokeWidth="0.5"
				opacity="0.06"
			  />
			</pattern>
		  </defs>
		  <rect
			width="100%"
			height="100%"
			fill="url(#projects-grid)"
		  />
		</svg>
	  </div>
	  <div className="relative z-10 max-w-6xl mx-auto">
		<h2 className="text-4xl font-extrabold text-center text-blue-500 dark:text-violet-400 mb-12 font-sans tracking-tight">
		  Projects
		</h2>
		<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
		  {projectsConfig.map((project, idx) => {
			// Extract emoji if present in title
			const emojiMatch = project.title.match(/^([\p{Emoji}\p{So}\p{Sk}\p{Sc}\p{Sm}])/u);
			const emoji = emojiMatch ? emojiMatch[1] : null;
			const cleanTitle = emoji ? project.title.replace(emoji, '').trim() : project.title;
			return (
			  <div
				key={project.title}
				className="relative bg-white/40 dark:bg-slate-900/40 rounded-2xl shadow-xl border border-blue-400/20 dark:border-violet-400/20 p-8 flex flex-col gap-4 transition-all duration-300 hover:scale-105 hover:bg-white/60 dark:hover:bg-slate-900/60 hover:shadow-2xl animate-fade-in"
				style={{ animationDelay: `${idx * 80}ms` }}
			  >
				<div className="flex items-center gap-2 mb-2">
				  {emoji && <span className="text-3xl drop-shadow-glow animate-bounce-slow">{emoji}</span>}
				  <h3 className="text-2xl font-bold tracking-wide text-blue-500 dark:text-violet-400 font-sans">
					{cleanTitle}
				  </h3>
				</div>
				<p className="text-base text-slate-700 dark:text-slate-200 font-light mb-2">
				  {project.description}
				</p>
				{project.tags && (
				  <div className="flex flex-wrap gap-2 mb-2">
					{project.tags.map((tag) => (
					  <span key={tag} className="px-2 py-1 rounded-full bg-gradient-to-r from-blue-100 via-violet-100 to-pink-100 dark:from-blue-900/30 dark:via-violet-900/30 dark:to-pink-900/30 text-xs font-semibold text-blue-700 dark:text-violet-200 shadow-sm animate-gradient-flow">
						{tag}
					  </span>
					))}
				  </div>
				)}
				<div className="flex gap-3 mt-auto">
				  <a
					href={project.github}
					target="_blank"
					rel="noopener noreferrer"
					className="inline-flex items-center gap-2 px-5 py-2 rounded-lg font-semibold text-white bg-gradient-to-r from-blue-500 via-violet-500 to-pink-500 shadow hover:scale-105 hover:bg-opacity-80 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400 dark:focus:ring-violet-400"
				  >
					<FaGithub className="w-5 h-5" />
					GitHub
				  </a>
				</div>
			  </div>
			);
		  })}
		</div>
		<div className="mt-16 text-center">
		  <a
			href="https://github.com/samlekkla"
			target="_blank"
			rel="noopener noreferrer"
			className="inline-flex items-center gap-2 text-base font-semibold px-7 py-3 rounded-xl bg-gradient-to-r from-blue-500 via-violet-500 to-pink-500 text-white shadow-lg hover:scale-105 hover:shadow-neon transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-pink-400 focus:ring-offset-2 animate-pulse"
		  >
			<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6 mr-1">
			  <path d="M12 0C5.37 0 0 5.373 0 12c0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.729.083-.729 1.205.085 1.84 1.237 1.84 1.237 1.07 1.834 2.807 1.304 3.492.997.108-.775.418-1.305.762-1.606-2.665-.305-5.466-1.334-5.466-5.931 0-1.31.468-2.381 1.236-3.221-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.3 1.23.957-.266 1.984-.399 3.003-.404 1.018.005 2.046.138 3.006.404 2.289-1.553 3.295-1.23 3.295-1.23.653 1.653.242 2.873.119 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.804 5.624-5.475 5.921.43.372.823 1.104.823 2.226 0 1.606-.014 2.898-.014 3.293 0 .322.216.694.825.576C20.565 21.796 24 17.299 24 12c0-6.627-5.373-12-12-12z"/>
			</svg>
			<span>Visit my <span className="underline underline-offset-4 decoration-pink-400">GitHub</span> for more projects and ongoing work!</span>
		  </a>
		</div>
	  </div>
	</section>
  );
};

export default ProjectsSection;

// Tailwind custom classes (add to globals.css):
// .drop-shadow-glow { filter: drop-shadow(0 0 12px #7f5af0); }
// .group-hover:shadow-neon { box-shadow: 0 0 24px 6px #7f5af0, 0 0 8px 2px #ff00cc; }
