import React from "react";
import footerConfig from "../config/footer.config";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full py-8 px-4 bg-slate-100 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 text-center">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400 text-base">
          <span className="font-bold text-blue-500 dark:text-violet-400">{footerConfig.name}</span>
          <span className="hidden md:inline">|</span>
          <span className="text-sm">{footerConfig.copyright}</span>
          {footerConfig.extra && (
            <span className="hidden md:inline text-xs text-slate-400 ml-2">{footerConfig.extra}</span>
          )}
        </div>
        <div className="flex gap-6 items-center justify-center mt-2 md:mt-0">
          <a href={footerConfig.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <FaGithub className="w-6 h-6 text-slate-700 dark:text-slate-200 hover:shadow-footer hover:text-blue-500 dark:hover:text-violet-400 transition-colors duration-200" />
          </a>
          <a href={footerConfig.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <FaLinkedin className="w-6 h-6 text-blue-400 dark:text-purple-400 hover:text-pink-400 hover:shadow-footer transition-colors duration-200" />
          </a>
          <a href={`mailto:${footerConfig.email}`} aria-label="Email">
            <FaEnvelope className="w-6 h-6 text-blue-400 dark:text-purple-400 hover:text-pink-400 hover:shadow-footer transition-colors duration-200" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
