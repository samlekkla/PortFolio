"use client";

import React from "react";
import {
  SiHtml5, SiCss3, SiJavascript, SiTypescript, SiTailwindcss,
  SiReact, SiNextdotjs, SiAngular, SiBootstrap, SiDotnet,
  SiNodedotjs, SiNestjs, SiGithub, SiGit, SiPostgresql,
  SiMysql, SiMongodb, SiPostman
} from "react-icons/si";
import { FaCloud, FaVuejs, FaDatabase } from "react-icons/fa";
import { Icon } from "@iconify/react";

const ICON_MAP: Record<string, { icon?: React.ComponentType<any>; iconifyIcon?: string; color: string } | null> = {
  // Frontend
  HTML: { icon: SiHtml5, color: "#E34F26" },
  CSS: { icon: SiCss3, color: "#1572B6" },
  JavaScript: { icon: SiJavascript, color: "#F7DF1E" },
  TypeScript: { icon: SiTypescript, color: "#3178C6" },
  React: { icon: SiReact, color: "#61DAFB" },
  "Tailwind CSS": { icon: SiTailwindcss, color: "#38BDF8" },
  "Next.js": { icon: SiNextdotjs, color: "#e2dbdb" },
  Vue: { icon: FaVuejs, color: "#4FC08D" },
  Bootstrap: { icon: SiBootstrap, color: "#7952B3" },
  Angular: { icon: SiAngular, color: "#DD0031" },

  // Backend
  ".NET": { icon: SiDotnet, color: "#512BD4" },
  "C#": { iconifyIcon: "devicon:csharp", color: "#9B4F96" },
  "Nest.js": { icon: SiNestjs, color: "#E0234E" },
  "Node.js": { icon: SiNodedotjs, color: "#339933" },
  Prisma: { iconifyIcon: "logos:prisma", color: "#ffffff" },
  MSSQL: { icon: FaDatabase, color: "#CC2927" },
  PostgreSQL: { icon: SiPostgresql, color: "#336791" },
  MySQL: { icon: SiMysql, color: "#00758F" },
  MongoDB: { icon: SiMongodb, color: "#47A248" },

  // Tools
  Azure: { iconifyIcon: "logos:microsoft-azure", color: "#0078D7" },
  GitHub: { icon: SiGithub, color: "#e2dbdb" },
  Git: { icon: SiGit, color: "#F05032" },
  Postman: { icon: SiPostman, color: "#FF6C37" },
  "Visual Studio": { iconifyIcon: "devicon:visualstudio", color: "#5C2D91" },
  "Visual Studio Code": { iconifyIcon: "devicon:vscode", color: "#007ACC" },
};

const TechStackSection = () => {
  const categories = [
    {
      label: "Frontend",
      items: [
        "HTML", "CSS", "JavaScript", "TypeScript", "React", "Tailwind CSS", "Next.js", "Vue", "Bootstrap", "Angular"
      ],
    },
    {
      label: "Backend",
      items: [
        ".NET", "C#", "Nest.js", "Node.js", "Prisma",
        "MSSQL", "PostgreSQL", "MySQL", "MongoDB"
      ],
    },
    {
      label: "Tools",
      items: [
        "Azure", "GitHub", "Git", "Postman", "Visual Studio", "Visual Studio Code"
      ],
    },
  ];

  const others = [
    "CI/CD",
    "GitHub Actions",
    "Azure DevOps",
    "Cloud Services",
    "Cloud Databases",
    "Agile Methods",
    "Unit Tests",
    "Self-leadership",
  ];

  // Featured/favorite techs (customize as you wish)
  const featured = ["C#", "React", "Azure", "JavaScript", "Node.js"];

  return (
    <section className="relative m-0 p-0">
      {/* Background accents */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-0 left-0 w-[400px] h-[300px] bg-gradient-to-br from-blue-400/30 via-violet-400/20 to-pink-400/10 rounded-full blur-3xl opacity-40" />
        <div className="absolute bottom-0 right-0 w-[300px] h-[200px] bg-gradient-to-tr from-violet-500/20 to-blue-400/10 rounded-full blur-2xl opacity-30" />
        <svg className="absolute inset-0 w-full h-full" style={{ zIndex: 0 }}>
          <defs>
            <pattern id="techstack-grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#7f5af0" strokeWidth="0.5" opacity="0.06" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#techstack-grid)" />
        </svg>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="flex flex-col items-center mb-4">
          <span className="text-2xl md:text-3xl mb-2">🧑‍💻</span>
          <span className="text-lg md:text-xl font-semibold text-slate-700 dark:text-slate-200 text-center">I love building with these tools and always exploring new tech!</span>
        </div>
        <h2 className="text-4xl font-extrabold text-center text-blue-500 dark:text-violet-400 mb-8 font-sans tracking-tight relative inline-block w-full">
          Tech Stack
          <span className="block w-24 mx-auto mt-2 h-1 bg-gradient-to-r from-blue-500 via-violet-500 to-pink-500 rounded-full animate-gradient-flow absolute left-1/2 -translate-x-1/2" />
        </h2>
        {/* Featured row */}
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          {featured.map((tech, i) => {
            const iconData = ICON_MAP[tech];
            return iconData ? (
              <div
                key={tech}
                className="group flex flex-col items-center justify-center animate-fade-in"
                style={{ animationDelay: `${i * 80}ms` }}
                title={tech}
              >
                <div className="w-14 h-14 flex items-center justify-center rounded-xl shadow-lg bg-gradient-to-br from-blue-100 via-violet-100 to-pink-100 dark:from-blue-900/30 dark:via-violet-900/30 dark:to-pink-900/30 border-2 border-blue-400 dark:border-violet-400 group-hover:scale-110 transition-transform">
                  {iconData.icon ? (
                    React.createElement(iconData.icon, {
                      style: { color: iconData.color },
                      className: "w-8 h-8",
                    })
                  ) : iconData.iconifyIcon ? (
                    <Icon icon={iconData.iconifyIcon} width="28" height="28" color={iconData.color} aria-label={tech} role="img" />
                  ) : null}
                </div>
                <span className="mt-2 text-xs font-bold text-blue-500 dark:text-violet-400 animate-fade-in" style={{ animationDelay: `${i * 100 + 200}ms` }}>{tech}</span>
              </div>
            ) : null;
          })}
        </div>
        <div className="flex flex-col gap-12">
          {categories.map((cat, catIdx) => (
            <div key={cat.label}>
              <h3 className="text-2xl font-bold text-blue-400 dark:text-purple-400 mb-6 font-sans border-b border-blue-500/30 pb-2">
                {cat.label}
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-8">
                {cat.items.map((tech, i) => {
                  const iconData = ICON_MAP[tech];
                  return iconData ? (
                    <div
                      key={tech}
                      className="group relative flex flex-col items-center justify-center hover:scale-105 hover:shadow-lg transition-all duration-200 animate-fade-in"
                      style={{ animationDelay: `${i * 60 + catIdx * 200}ms` }}
                      title={tech}
                    >
                      <div className="w-14 h-14 flex items-center justify-center rounded-xl shadow-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 group-hover:border-blue-500 dark:group-hover:border-violet-400">
                        {iconData.icon ? (
                          React.createElement(iconData.icon, {
                            style: { color: iconData.color },
                            className: "w-8 h-8",
                          })
                        ) : iconData.iconifyIcon ? (
                          <Icon icon={iconData.iconifyIcon} width="28" height="28" color={iconData.color} aria-label={tech} role="img" />
                        ) : null}
                      </div>
                      <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1 rounded bg-slate-900 text-white text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap z-10">
                        {tech}
                      </div>
                    </div>
                  ) : null;
                })}
              </div>
            </div>
          ))}

          {/* Others as Badges */}
          <div className="mt-12">
            <h3 className="text-2xl font-bold text-blue-400 dark:text-purple-400 mb-6 font-sans border-b border-blue-500/30 pb-2">
              Others
            </h3>
            <div className="flex flex-wrap gap-3">
              {others.map((item) => (
                <span
                  key={item}
                  className="inline-block px-3 py-1 bg-gradient-to-br from-blue-100/60 to-purple-100/40 dark:from-blue-800/30 dark:to-purple-700/30 text-sm font-medium text-blue-700 dark:text-purple-200 rounded-full border border-blue-300/40 dark:border-violet-400/30 shadow-sm hover:scale-105 transition-transform"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-10 text-center text-base italic text-slate-600 dark:text-slate-300">
          <span className="text-lg mr-1">✨</span>Always learning, always building. My stack is always growing!
        </div>
      </div>
    </section>
  );
};

export default TechStackSection;
