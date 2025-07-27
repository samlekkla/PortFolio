"use client";
import React, { useState } from "react";
import Link from "next/link";

const navLinks = [
	{ name: "Home", href: "#home" },
	{ name: "About", href: "#about" },
	{ name: "Projects", href: "#projects" },
	{ name: "Contact", href: "#contact" },
];

const Navbar = () => {
	const [menuOpen, setMenuOpen] = useState(false);
	const [dark, setDark] = useState(false);

	// Dark mode toggle
	React.useEffect(() => {
		if (dark) {
			document.documentElement.classList.add("dark");
		} else {
			document.documentElement.classList.remove("dark");
		}
	}, [dark]);

	return (
		<nav className="fixed top-0 left-0 w-full z-50 bg-gradient-to-r from-blue-500 via-purple-500 to-blue-600 dark:from-slate-900 dark:via-slate-800 dark:to-slate-950 shadow-lg backdrop-blur-md border-b border-blue-400 dark:border-slate-700">
			<div className="flex items-center justify-between px-6 py-4 max-w-6xl mx-auto">
				{/* Logo / Brand */}
				<Link
					href="#home"
					className="flex items-center gap-2 text-xl font-bold text-white dark:text-blue-400"
				>
					<span className="inline-block w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 via-sky-400 to-slate-300 dark:from-blue-400 dark:via-blue-600 dark:to-white shadow-lg"></span>
					<span>Sam</span>
				</Link>
				{/* Desktop Nav */}
				<div className="hidden md:flex gap-6 items-center">
					{navLinks.map((link) => (
						<Link
							key={link.name}
							href={link.href}
							className="relative text-lg font-medium text-white dark:text-slate-200 px-2 py-1 rounded-lg transition-colors duration-200 hover:text-yellow-300 dark:hover:text-yellow-400 group"
						>
							<span>{link.name}</span>
							<span className="absolute left-0 -bottom-1 w-full h-0.5 bg-yellow-300 dark:bg-yellow-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-full"></span>
						</Link>
					))}
					{/* Dark mode toggle */}
					<button
						className="ml-4 w-10 h-10 flex items-center justify-center rounded-full bg-white/40 dark:bg-slate-800/60 shadow hover:bg-yellow-100 dark:hover:bg-yellow-900 transition-colors duration-200"
						onClick={() => setDark((d) => !d)}
						aria-label="Toggle dark mode"
					>
						{dark ? (
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
								className="w-6 h-6 text-yellow-400"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M21 12.79A9 9 0 1111.21 3a7 7 0 109.79 9.79z"
								/>
							</svg>
						) : (
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
								className="w-6 h-6 text-yellow-400"
							>
								<circle cx="12" cy="12" r="5" fill="currentColor" />
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M12 1v2m0 18v2m11-11h-2M3 12H1m16.95 6.95l-1.41-1.41M6.46 6.46L5.05 5.05m12.02 0l-1.41 1.41M6.46 17.54l-1.41 1.41"
								/>
							</svg>
						)}
					</button>
				</div>
				{/* Mobile Hamburger */}
				<button
					className="md:hidden flex items-center justify-center w-10 h-10 rounded-full bg-white/40 dark:bg-slate-800/60 shadow focus:outline-none focus:ring-2 focus:ring-yellow-400"
					onClick={() => setMenuOpen((open) => !open)}
					aria-label="Toggle menu"
				>
					<span
						className={`block w-6 h-0.5 bg-white dark:bg-slate-200 mb-1 transition-all duration-300 ${
							menuOpen ? "rotate-45 translate-y-2" : ""
						}`}
					/>
					<span
						className={`block w-6 h-0.5 bg-white dark:bg-slate-200 mb-1 transition-all duration-300 ${
							menuOpen ? "opacity-0" : ""
						}`}
					/>
					<span
						className={`block w-6 h-0.5 bg-white dark:bg-slate-200 transition-all duration-300 ${
							menuOpen ? "-rotate-45 -translate-y-2" : ""
						}`}
					/>
				</button>
			</div>
			{/* Mobile Slide-in Panel */}
			<div
				className={`fixed top-0 left-0 w-full h-full bg-gradient-to-br from-blue-500 via-purple-500 to-blue-600 dark:from-slate-900 dark:via-slate-800 dark:to-slate-950 backdrop-blur-xl z-40 transition-transform duration-300 ${
					menuOpen ? "translate-x-0" : "-translate-x-full"
				}`}
				style={{ pointerEvents: menuOpen ? "auto" : "none" }}
			>
				<div className="flex flex-col items-center justify-center h-full gap-10">
					{navLinks.map((link) => (
						<Link
							key={link.name}
							href={link.href}
							className="text-2xl font-bold text-white dark:text-slate-200 hover:text-yellow-300 dark:hover:text-yellow-400 transition-colors duration-200 px-4 py-2 rounded-lg"
							onClick={() => setMenuOpen(false)}
						>
							{link.name}
						</Link>
					))}
					{/* Dark mode toggle in mobile */}
					<button
						className="w-12 h-12 flex items-center justify-center rounded-full bg-white/40 dark:bg-slate-800/60 shadow hover:bg-yellow-100 dark:hover:bg-yellow-900 transition-colors duration-200"
						onClick={() => setDark((d) => !d)}
						aria-label="Toggle dark mode"
					>
						{dark ? (
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
								className="w-7 h-7 text-yellow-400"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M21 12.79A9 9 0 1111.21 3a7 7 0 109.79 9.79z"
								/>
							</svg>
						) : (
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
								className="w-7 h-7 text-yellow-400"
							>
								<circle cx="12" cy="12" r="5" fill="currentColor" />
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M12 1v2m0 18v2m11-11h-2M3 12H1m16.95 6.95l-1.41-1.41M6.46 6.46L5.05 5.05m12.02 0l-1.41 1.41M6.46 17.54l-1.41 1.41"
								/>
							</svg>
						)}
					</button>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
