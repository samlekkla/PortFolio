"use client";

import React from "react";
import projectsConfig from "../config/projects.config";
import { FaGithub } from "react-icons/fa";

const ProjectsSection = () => {
	return (
		<section className="relative py-20 px-4 bg-gradient-to-br from-slate-100/80 to-blue-50/60 dark:from-slate-900/80 dark:to-blue-950/60">
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
					{projectsConfig.map((project, idx) => (
						<div
							key={project.title}
							className="relative bg-white/40 dark:bg-slate-900/40 rounded-2xl shadow-xl border border-blue-400/20 dark:border-violet-400/20 p-8 flex flex-col gap-4 transition-all duration-300 hover:scale-105 hover:bg-white/60 dark:hover:bg-slate-900/60 hover:shadow-2xl"
						>
							<h3 className="text-2xl font-bold tracking-wide text-blue-500 dark:text-violet-400 mb-2 font-sans">
								{project.title}
							</h3>
							<p className="text-base text-slate-700 dark:text-slate-200 font-light mb-4">
								{project.description}
							</p>
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
					))}
				</div>
				<div className="mt-16 text-center">
					<a
						href="https://github.com/samlekkla"
						target="_blank"
						rel="noopener noreferrer"
						className="inline-block text-base text-slate-400 dark:text-slate-500 font-medium px-6 py-3 rounded-lg hover:text-blue-500 dark:hover:text-violet-400 hover:bg-white/20 dark:hover:bg-slate-900/20 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400 dark:focus:ring-violet-400"
					>
						Visit my GitHub for more projects and ongoing work.
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
