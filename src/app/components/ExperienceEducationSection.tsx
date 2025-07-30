import React from "react";
import experienceEducationConfig from "../config/experienceEducation.config";

const icons = {
  experience: (
    <span className="inline-block text-2xl mr-2 align-middle" role="img" aria-label="work">💼</span>
  ),
  education: (
    <span className="inline-block text-2xl mr-2 align-middle" role="img" aria-label="education">🎓</span>
  ),
  certificate: (
    <span className="inline-block text-2xl mr-2 align-middle" role="img" aria-label="certificate">📜</span>
  ),
};

const highlight = (text: string) => (
  <span className="text-violet-500 dark:text-blue-400 font-semibold">{text}</span>
);

const renderTags = (tags?: string[]) => {
  if (!tags || tags.length === 0) return null;
  return (
    <div className="flex flex-wrap gap-2 mt-2">
      {tags.map((tag, i) => (
        <span
          key={i}
          className="px-2 py-1 text-xs font-medium bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-300 rounded-full"
        >
          {tag}
        </span>
      ))}
    </div>
  );
};



const ExperienceEducationSection = () => {
  const experiences = experienceEducationConfig.filter((item) => item.type === "experience");
  const education = experienceEducationConfig.filter((item) => item.type === "education");
  const certificates = experienceEducationConfig.filter((item) => item.type === "certificate");

  // Removed unused getAnimationClass to fix lint error

  return (
    <section id="career" className="m-0 p-0">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col items-center mb-4">
          <span className="text-2xl md:text-3xl mb-2">📚</span>
          <span className="text-lg md:text-xl font-semibold text-slate-700 dark:text-slate-200 text-center">Every step is a lesson. Here’s my journey so far!</span>
        </div>
        <h2 className="text-4xl font-extrabold text-center text-blue-500 dark:text-violet-400 mb-4 font-sans tracking-tight relative inline-block w-full">
          Experience & Education
          <span className="block w-24 mx-auto mt-2 h-1 bg-gradient-to-r from-blue-500 via-violet-500 to-pink-500 rounded-full animate-gradient-flow absolute left-1/2 -translate-x-1/2" />
        </h2>
        <div className="w-24 mx-auto border-b-2 border-blue-400 dark:border-violet-500 mb-12 opacity-60" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Experience */}
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
                    className={`relative p-6 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-md transition-transform transform hover:-translate-y-1 hover:shadow-xl hover:border-blue-400 dark:hover:border-violet-400 flex flex-col gap-2 animate-fade-in-up`}
                    style={{ animationDelay: `${idx * 120}ms` }}
                  >
                    <div className="absolute -left-7 top-6 w-6 h-6 bg-blue-400 dark:bg-violet-500 rounded-full shadow-lg border-4 border-white dark:border-slate-900 flex items-center justify-center animate-pulse" style={{ animationDelay: `${idx * 120}ms` }}>
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
                    {renderTags(exp.tags)}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Education */}
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
                    className={`relative p-6 rounded-xl bg-white/80 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-700 shadow-md transition-transform transform hover:-translate-y-1 hover:shadow-xl hover:border-blue-400 dark:hover:border-violet-400 flex flex-col gap-2 animate-fade-in-up`}
                    style={{ animationDelay: `${idx * 120}ms` }}
                  >
                    <div className="absolute -left-7 top-6 w-6 h-6 bg-violet-400 dark:bg-blue-500 rounded-full shadow-lg border-4 border-white dark:border-slate-900 flex items-center justify-center animate-pulse" style={{ animationDelay: `${idx * 120}ms` }}>
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
                    {renderTags(edu.tags)}
                  </li>
                ))}
              </ul>
            </div>

            {/* Certificates Section */}
            {certificates.length > 0 && (
              <div className="mt-14">
                <h4 className="text-xl font-bold text-violet-400 dark:text-blue-400 mb-6 flex items-center gap-2">
                  {icons.certificate} Certificates
                </h4>
                <div className="relative pl-6">
                  <div className="absolute left-2 top-0 w-1 h-full bg-gradient-to-b from-yellow-300/40 to-yellow-500/20 rounded-full" />
                  <ul className="space-y-10">
                    {certificates.map((cert, idx) => (
                      <li
                        key={idx}
                        className={`relative p-6 rounded-xl bg-white/80 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-md transition-transform transform hover:-translate-y-1 hover:shadow-xl hover:border-yellow-400 dark:hover:border-yellow-500 flex flex-col gap-2 animate-fade-in-up`}
                        style={{ animationDelay: `${idx * 120}ms` }}
                      >
                        <div className="absolute -left-7 top-6 w-6 h-6 bg-yellow-400 dark:bg-yellow-500 rounded-full shadow-lg border-4 border-white dark:border-slate-900 flex items-center justify-center animate-pulse" style={{ animationDelay: `${idx * 120}ms` }}>
                          {icons.certificate}
                        </div>
                        <h5 className="text-lg font-bold text-yellow-600 dark:text-yellow-300 font-sans">
                          {cert.title}
                        </h5>
                        <p className="text-base text-slate-700 dark:text-slate-200 font-semibold">
                          {highlight(cert.organization)}
                        </p>
                        <p className="text-sm text-slate-400 dark:text-slate-400 mb-2">
                          {cert.start}{cert.end ? `–${cert.end}` : ""}
                        </p>
                        {cert.description && (
                          <p className="text-base text-slate-600 dark:text-slate-300 font-light">
                            {cert.description}
                          </p>
                        )}
                        {renderTags(cert.tags)}
                        {cert.url && (
                          <a
                            href={cert.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-2 inline-block text-sm font-medium text-blue-600 dark:text-blue-400 hover:underline"
                          >
                            🔗 View
                          </a>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="mt-10 text-center text-base italic text-slate-600 dark:text-slate-300">
          <span className="text-lg mr-1">🌱</span>Every experience is a step forward. I’m always learning and growing!
        </div>
      </div>
    </section>
  );
};

export default ExperienceEducationSection;
