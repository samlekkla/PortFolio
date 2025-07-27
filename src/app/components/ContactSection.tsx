"use client";
import React, { useState } from "react";
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
  const [submitted, setSubmitted] = useState(false);
  const [isSending, setIsSending] = useState(false);

  return (
    <section className="py-20 px-4 min-h-[60vh] flex items-center justify-center bg-gradient-to-br from-slate-100/80 to-blue-50/60 dark:from-slate-900/80 dark:to-blue-950/60">
      <div className="relative w-full max-w-3xl mx-auto rounded-3xl shadow-2xl p-8 md:p-12 flex flex-col md:flex-row gap-12 items-start bg-white/30 dark:bg-slate-900/40 backdrop-blur-2xl">
        {/* Contact Info Sidebar */}
        <div className="w-full md:w-1/3 flex flex-col gap-4 bg-white/60 dark:bg-slate-900/60 rounded-2xl shadow-lg p-6 mb-8 md:mb-0">
          <h2 className="text-2xl font-bold text-blue-500 dark:text-violet-400 mb-2 font-sans">
            Contact Info
          </h2>
          <div className="flex flex-col gap-2 text-base text-slate-700 dark:text-slate-200">
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
          <div className="flex gap-6 mt-4">
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="group"
                aria-label={label}
              >
                <Icon className="w-7 h-7 text-slate-700 dark:text-slate-200 hover:text-blue-500 dark:hover:text-violet-400 transition-colors duration-200" />
              </a>
            ))}
          </div>
        </div>

        {/* Contact Form */}
        <div className="w-full md:w-2/3">
          {!submitted ? (
            <form
              action="https://formspree.io/f/xkgzbgnd"
              method="POST"
              onSubmit={() => {
                setIsSending(true);
                setTimeout(() => {
                  setSubmitted(true);
                  setIsSending(false);
                }, 500);
              }}
              className="w-full flex flex-col gap-6"
            >
              <input
                type="text"
                name="name"
                required
                placeholder="Your Name"
                className="px-5 py-3 rounded-xl bg-white/20 dark:bg-slate-800/30 text-slate-900 dark:text-slate-100 font-medium shadow focus:outline-none focus:ring-2 focus:ring-blue-400 dark:focus:ring-purple-400 focus:ring-offset-2 border border-transparent focus:border-blue-400 dark:focus:border-purple-400 transition-all duration-200"
              />
              <input
                type="email"
                name="email"
                required
                placeholder="Your Email"
                className="px-5 py-3 rounded-xl bg-white/20 dark:bg-slate-800/30 text-slate-900 dark:text-slate-100 font-medium shadow focus:outline-none focus:ring-2 focus:ring-blue-400 dark:focus:ring-purple-400 focus:ring-offset-2 border border-transparent focus:border-blue-400 dark:focus:border-purple-400 transition-all duration-200"
              />
              <textarea
                name="message"
                required
                placeholder="Your Message"
                rows={4}
                className="px-5 py-3 rounded-xl bg-white/20 dark:bg-slate-800/30 text-slate-900 dark:text-slate-100 font-medium shadow focus:outline-none focus:ring-2 focus:ring-blue-400 dark:focus:ring-purple-400 focus:ring-offset-2 border border-transparent focus:border-blue-400 dark:focus:border-purple-400 transition-all duration-200"
              />
              {/* Honeypot */}
              <input
                type="text"
                name="_gotcha"
                className="hidden"
                tabIndex={-1}
                autoComplete="off"
              />
              <button
                type="submit"
                disabled={isSending}
                className={`w-full py-3 rounded-xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white font-bold text-lg shadow-lg border-none outline-none transition-all duration-300 ${
                  isSending ? "opacity-50 cursor-not-allowed" : "hover:scale-105 hover:bg-blue-600"
                } focus:ring-2 focus:ring-pink-400 focus:ring-offset-2`}
              >
                {isSending ? "Sending..." : "Send Message"}
              </button>
            </form>
          ) : (
            <div className="flex flex-col gap-4 items-center text-center text-lg text-slate-800 dark:text-slate-100 font-semibold p-6 bg-white/50 dark:bg-slate-800/50 rounded-xl shadow-md">
              🎉 Thank you for your message! I’ll get back to you as soon as possible.
              <button
                onClick={() => setSubmitted(false)}
                className="mt-2 px-5 py-2 bg-slate-200 dark:bg-slate-700 text-slate-900 dark:text-white rounded-xl hover:bg-slate-300 dark:hover:bg-slate-600 transition-all duration-200"
              >
                Go Back
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
