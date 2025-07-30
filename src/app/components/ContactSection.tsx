"use client";
import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const contactInfo = {
  name: "Sam Lekkla",
  email: "sam.lekkla@gmail.com",
  address: "Askersundsgatan 4, 124 67 Bandhagen, Sweden",
  phone: "+46 705739222",
  github: "https://github.com/samlekkla",
  linkedin: "https://www.linkedin.com/in/sam-lekkla-5545622a2/",
};

const socialLinks = [
  { icon: FaGithub, href: contactInfo.github, label: "GitHub" },
  { icon: FaLinkedin, href: contactInfo.linkedin, label: "LinkedIn" },
];

const ContactSection = () => {
  const [form, setForm] = React.useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = React.useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    // Let browser submit to Formspree, then clear textarea
    setTimeout(() => {
      setForm({ name: '', email: '', message: '' });
      setSubmitted(true);
    }, 100);
  };

  return (
    <section id="contact" className="min-h-[60vh] flex items-center justify-center m-0 p-0">
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-0 left-0 w-[300px] h-[200px] bg-gradient-to-br from-blue-400/20 via-violet-400/10 to-pink-400/10 rounded-full blur-2xl opacity-30" />
        <div className="absolute bottom-0 right-0 w-[200px] h-[120px] bg-gradient-to-tr from-violet-500/10 to-blue-400/10 rounded-full blur-xl opacity-20" />
      </div>
      <div className="relative w-full max-w-3xl mx-auto rounded-3xl shadow-2xl p-8 md:p-12 flex flex-col md:flex-row gap-12 items-start bg-white/30 dark:bg-slate-900/40 backdrop-blur-2xl animate-fade-in">
        {/* Left: Friendly intro and contact info */}
        <div className="w-full md:w-1/3 flex flex-col gap-4 bg-white/60 dark:bg-slate-900/60 rounded-2xl shadow-lg p-6 mb-8 md:mb-0 animate-fade-in" style={{ animationDelay: '100ms' }}>
          <div className="flex flex-col items-center mb-2">
            <span className="text-2xl md:text-3xl mb-1">✉️</span>
            <span className="text-lg md:text-xl font-semibold text-slate-700 dark:text-slate-200 text-center">Let’s connect! I’d love to hear from you.</span>
          </div>
          <h2 className="text-2xl font-bold text-blue-500 dark:text-violet-400 mb-2 font-sans text-center">
            Contact Info
            <span className="block w-12 mx-auto mt-1 h-1 bg-gradient-to-r from-blue-500 via-violet-500 to-pink-500 rounded-full animate-gradient-flow" />
          </h2>
          <div className="flex flex-col gap-2 text-base text-slate-700 dark:text-slate-200 text-center">
            <span className="font-semibold text-lg text-blue-500 dark:text-violet-400">
              {contactInfo.name}
            </span>
            <a
              href={`mailto:${contactInfo.email}`}
              className="hover:text-blue-500 dark:hover:text-violet-400 underline"
            >
              {contactInfo.email}
            </a>
            <span>{contactInfo.address}</span>
            <a
              href={`tel:${contactInfo.phone.replace(/\s+/g, "")}`}
              className="hover:text-blue-500 dark:hover:text-violet-400 underline"
            >
              {contactInfo.phone}
            </a>
          </div>
          <div className="flex gap-6 mt-4 justify-center">
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="group"
                aria-label={label}
              >
                <Icon className="w-7 h-7 text-slate-700 dark:text-slate-200 group-hover:text-blue-500 group-hover:drop-shadow-glow dark:group-hover:text-violet-400 transition-all duration-200" />
              </a>
            ))}
          </div>
          <div className="mt-4 text-xs text-slate-500 dark:text-slate-400 italic text-center">
            <span className="text-base mr-1">⏱️</span> I usually reply within 24 hours!
          </div>
        </div>
        {/* Right: Contact Form */}
        <div className="w-full md:w-2/3 animate-fade-in" style={{ animationDelay: '200ms' }}>
          <form 
            className="w-full flex flex-col gap-6"
            action="https://formspree.io/f/xkgzbgnd"
            method="POST"
            target="_blank"
            onSubmit={handleSubmit}
          >
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              value={form.name}
              onChange={handleChange}
              className="px-5 py-3 rounded-xl bg-white/20 dark:bg-slate-800/30 text-slate-900 dark:text-slate-100 font-medium shadow focus:outline-none focus:ring-2 focus:ring-blue-400 dark:focus:ring-purple-400 focus:ring-offset-2 border border-transparent focus:border-blue-400 dark:focus:border-purple-400 transition-all duration-200"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              value={form.email}
              onChange={handleChange}
              className="px-5 py-3 rounded-xl bg-white/20 dark:bg-slate-800/30 text-slate-900 dark:text-slate-100 font-medium shadow focus:outline-none focus:ring-2 focus:ring-blue-400 dark:focus:ring-purple-400 focus:ring-offset-2 border border-transparent focus:border-blue-400 dark:focus:border-purple-400 transition-all duration-200"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows={4}
              required
              value={form.message}
              onChange={handleChange}
              className="px-5 py-3 rounded-xl bg-white/20 dark:bg-slate-800/30 text-slate-900 dark:text-slate-100 font-medium shadow focus:outline-none focus:ring-2 focus:ring-blue-400 dark:focus:ring-purple-400 focus:ring-offset-2 border border-transparent focus:border-blue-400 dark:focus:border-purple-400 transition-all duration-200"
            />
            <button
              type="submit"
              className="w-full py-3 rounded-xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white font-bold text-lg shadow-lg border-none outline-none transition-all duration-300 hover:scale-105 hover:shadow-neon focus:ring-2 focus:ring-pink-400 focus:ring-offset-2 animate-fade-in"
              style={{ animationDelay: '300ms' }}
            >
              🚀 Send Message
            </button>
          </form>
          <div className="mt-6 text-center text-sm text-slate-500 dark:text-slate-400 italic">
            <span className="text-base mr-1">💡</span>Prefer email or LinkedIn? Reach out anytime!
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

// Tailwind custom classes (add to globals.css):
// .hover:shadow-neon { box-shadow: 0 0 24px 6px #7f5af0, 0 0 8px 2px #ff00cc; }
// .group-hover:drop-shadow-glow { filter: drop-shadow(0 0 12px #7f5af0); }
