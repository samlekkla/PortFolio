import React from "react";
import experienceEducationConfig from "../config/experienceEducation.config";

const icons = {
  experience: (
    <span className="inline-block text-2xl mr-2 align-middle" role="img" aria-label="work">💼</span>
  ),
  education: (
    <span className="inline-block text-2xl mr-2 align-middle" role="img" aria-label="education">🎓</span>
  ),
};

const highlight = (text: string) => (
  <span className="text-violet-500 dark:text-blue-400 font-semibold">{text}</span>
);

const ExperienceEducationSection = () => {
  const experiences = experienceEducationConfig.filter((item) => item.type === "experience");
  const education = experienceEducationConfig.filter((item) => item.type === "education");

  // Helper for scroll animation
  const getAnimationClass = (idx: number) =>
    `opacity-0 translate-y-8 animate-fade-in-up animation-delay-${idx * 100}`;

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-slate-100/80 to-blue-50/60 dark:from-slate-900/80 dark:to-blue-950/60">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-extrabold text-center text-blue-500 dark:text-violet-400 mb-2 font-sans tracking-tight">
          Experience & Education
        </h2>
        <div className="w-24 mx-auto border-b-2 border-blue-400 dark:border-violet-500 mb-12 opacity-60" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Experience Timeline */}
          <div>
            <h3 className="text-2xl font-bold text-blue-400 dark:text-violet-400 mb-8 font-sans border-b border-blue-500/30 pb-2 flex items-center gap-2">
              {icons.experience} Experience
            </h3>
            <div className="relative pl-6">
              <div className="absolute left-2 top-0 w-1 h-full bg-gradient-to-b from-blue-400/40 to-violet-400/20 rounded-full" />
              <ul className="space-y-10">
                {experiences.map((exp, idx) => (
                  <li
                    key={idx}
                    className={`relative p-6 rounded-xl shadow-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex flex-col gap-2 transition-all duration-700 ease-out ${getAnimationClass(idx)}`}
                  >
                    <div className="absolute -left-7 top-6 w-6 h-6 bg-blue-400 dark:bg-violet-500 rounded-full shadow-lg border-4 border-white dark:border-slate-900 flex items-center justify-center">
                      {icons.experience}
                    </div>
                    <h4 className="text-lg font-bold text-blue-500 dark:text-violet-400 mb-1 font-sans">
                      {exp.title}
                    </h4>
                    <p className="text-base text-slate-700 dark:text-slate-200 font-semibold">
                      {highlight(exp.organization)}
                    </p>
                    <p className="text-sm text-slate-400 dark:text-slate-400 mb-2">
                      {exp.start}{exp.end ? `–${exp.end}` : ""}
                    </p>
                    {exp.description && (
                      <p className="text-base text-slate-600 dark:text-slate-300 font-light">
                        {exp.description}
                      </p>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          {/* Education Timeline */}
          <div>
            <h3 className="text-2xl font-bold text-blue-400 dark:text-violet-400 mb-8 font-sans border-b border-blue-500/30 pb-2 flex items-center gap-2">
              {icons.education} Education
            </h3>
            <div className="relative pl-6">
              <div className="absolute left-2 top-0 w-1 h-full bg-gradient-to-b from-violet-400/40 to-blue-400/20 rounded-full" />
              <ul className="space-y-10">
                {education.map((edu, idx) => (
                  <li
                    key={idx}
                    className={`relative p-6 rounded-xl shadow-lg bg-white/80 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-700 flex flex-col gap-2 transition-all duration-700 ease-out ${getAnimationClass(idx)}`}
                  >
                    <div className="absolute -left-7 top-6 w-6 h-6 bg-violet-400 dark:bg-blue-500 rounded-full shadow-lg border-4 border-white dark:border-slate-900 flex items-center justify-center">
                      {icons.education}
                    </div>
                    <h4 className="text-lg font-bold text-violet-500 dark:text-blue-400 mb-1 font-sans">
                      {edu.title}
                    </h4>
                    <p className="text-base text-slate-700 dark:text-slate-200 font-semibold">
                      {highlight(edu.organization)}
                    </p>
                    <p className="text-sm text-slate-400 dark:text-slate-400 mb-2">
                      {edu.start}{edu.end ? `–${edu.end}` : ""}
                    </p>
                    {edu.description && (
                      <p className="text-base text-slate-600 dark:text-slate-300 font-light">
                        {edu.description}
                      </p>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceEducationSection;
