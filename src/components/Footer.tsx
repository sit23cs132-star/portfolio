import { useEffect, useState } from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { resumeData } from "../data/resumeData";

const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Certifications", href: "#certifications" },
  { label: "Contact", href: "#contact" }
];

export default function Footer() {
  const { name, social } = resumeData.personalInfo;
  const currentYear = new Date().getFullYear();
  const [time, setTime] = useState("");

  // Live IST (India Standard Time) Running Clock
  useEffect(() => {
    const updateTime = () => {
      const options: Intl.DateTimeFormatOptions = {
        timeZone: "Asia/Kolkata",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true
      };
      setTime(new Date().toLocaleTimeString("en-US", options));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const id = href.replace("#", "");
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <footer className="bg-slate-100 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 transition-colors py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-200/50 dark:border-slate-800/50">
          {/* Logo & Name */}
          <div className="text-center md:text-left">
            <a
              href="#home"
              onClick={(e) => handleLinkClick(e, "#home")}
              className="text-xl font-bold font-display tracking-tight text-slate-850 dark:text-white"
            >
              {name}
            </a>
            <span className="block text-xs text-slate-500 dark:text-slate-400 mt-1 font-normal">
              Software Engineer
            </span>
          </div>

          {/* Quick Navigation Links */}
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
            {quickLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="text-sm font-medium text-slate-650 hover:text-indigo-600 dark:text-slate-400 dark:hover:text-indigo-400 transition-colors cursor-pointer"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Social Links */}
          <div className="flex space-x-4">
            <a
              href={social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors cursor-pointer"
              aria-label="GitHub"
            >
              <FaGithub size={20} />
            </a>
            <a
              href={social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors cursor-pointer"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={20} />
            </a>
            <a
              href={`mailto:${social.email}`}
              className="text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors cursor-pointer"
              aria-label="Email"
            >
              <FaEnvelope size={20} />
            </a>
          </div>
        </div>

        {/* Live System Status Widget */}
        <div className="flex flex-wrap items-center justify-between text-xs text-slate-500 dark:text-slate-400 gap-4 bg-slate-200/20 dark:bg-slate-950/20 p-4 rounded-xl border border-slate-200/50 dark:border-slate-800/40">
          <div className="flex items-center space-x-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="font-semibold uppercase tracking-wider text-[10px]">
              Available for Full-Time Roles
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-4 sm:gap-6 font-medium">
            {time && (
              <div className="flex items-center space-x-1.5">
                <span>🕒</span>
                <span>Developer Time (IST): <span className="font-mono font-bold text-slate-850 dark:text-slate-350">{time}</span></span>
              </div>
            )}
            <div className="flex items-center space-x-1.5">
              <span>📅</span>
              <span>Last Updated: <span className="font-bold text-slate-850 dark:text-slate-350">July 2026</span></span>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 dark:text-slate-400">
          <span>&copy; {currentYear} {name}. All rights reserved.</span>
          <span className="mt-2 sm:mt-0 font-normal">
            Designed & Built with React, Tailwind & Framer Motion
          </span>
        </div>
      </div>
    </footer>
  );
}
