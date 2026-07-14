import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaSun, FaMoon } from "react-icons/fa";
import { playUiBlip } from "../utils/audio";

export default function ThemeToggle() {
  const [theme, setTheme] = useState<"light" | "dark">(
    () => (localStorage.getItem("theme") as "light" | "dark") || "dark"
  );

  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
    playUiBlip(theme === "dark" ? 600 : 800, 0.06);
  };

  return (
    <button
      onClick={toggleTheme}
      className="p-2.5 rounded-full border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/70 hover:bg-slate-100 dark:hover:bg-slate-800 text-indigo-500 dark:text-amber-400 transition-colors shadow-sm focus:outline-none cursor-pointer"
      aria-label="Toggle dark mode"
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={theme}
          initial={{ y: -20, opacity: 0, rotate: -90 }}
          animate={{ y: 0, opacity: 1, rotate: 0 }}
          exit={{ y: 20, opacity: 0, rotate: 90 }}
          transition={{ duration: 0.2 }}
          className="flex items-center justify-center w-5 h-5"
        >
          {theme === "dark" ? <FaSun size={18} /> : <FaMoon size={18} />}
        </motion.div>
      </AnimatePresence>
    </button>
  );
}
