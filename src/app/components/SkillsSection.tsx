import React from 'react';

const skills = [
  'React',
  'Next.js',
  'Tailwind',
  'Node.js',
  'Docker',
  'Prisma',
];

const SkillsSection = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-r from-blue-500/10 via-slate-900/40 to-slate-800/60 dark:from-blue-400/10 dark:via-slate-900/60 dark:to-slate-950/80">
      <h2 className="text-4xl font-extrabold text-center text-blue-400 dark:text-blue-500 mb-12 font-sans">Skills</h2>
      <div className="flex gap-4 overflow-x-auto py-2 scrollbar-thin scrollbar-thumb-blue-400 scrollbar-track-slate-800">
        {skills.map((skill, index) => (
          <span
            key={index}
            className="px-6 py-3 rounded-full bg-blue-500/20 text-blue-300 font-semibold shadow-lg hover:bg-blue-500/30 hover:scale-105 transition-all duration-200 cursor-pointer font-sans whitespace-nowrap"
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;
