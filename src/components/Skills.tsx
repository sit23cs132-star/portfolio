import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaWrench, FaFolder } from "react-icons/fa";
import { resumeData } from "../data/resumeData";

export default function Skills() {
  const categories = resumeData.skills;
  const [activeTabIdx, setActiveTabIdx] = useState(0);

  const activeCategory = categories[activeTabIdx];

  const getStatusColor = (status?: string) => {
    switch (status) {
      case "mastered":
        return "bg-green-500/10 text-green-700 dark:text-green-400 border border-green-500/20";
      case "learning":
        return "bg-amber-500/10 text-amber-700 dark:text-amber-400 border border-amber-500/20";
      default:
        return "bg-indigo-500/10 text-indigo-700 dark:text-indigo-400 border border-indigo-500/20";
    }
  };

  return (
    <section id="skills" className="py-20 bg-slate-50/30 dark:bg-slate-900/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-4xl font-bold font-display text-slate-900 dark:text-white"
          >
            Technical Expertise
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-slate-500 dark:text-slate-400 mt-2 font-normal"
          >
            Select a category tab below to view my skills, experience, and related project history in a clean landscape dashboard.
          </motion.p>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="h-1 bg-indigo-600 dark:bg-indigo-400 mx-auto mt-4 rounded-full"
          />
        </div>

        {/* Tab Selection Row (Horizontal Scrollable) */}
        <div className="flex overflow-x-auto pb-4 mb-8 gap-2.5 no-scrollbar justify-start lg:justify-center border-b border-slate-200 dark:border-slate-800">
          {categories.map((cat, idx) => {
            const isActive = activeTabIdx === idx;
            return (
              <button
                key={cat.category}
                onClick={() => setActiveTabIdx(idx)}
                className={`px-5 py-3 rounded-full text-xs font-bold uppercase tracking-wider whitespace-nowrap transition-all cursor-pointer border ${
                  isActive
                    ? "bg-indigo-600 border-indigo-600 text-white shadow-md shadow-indigo-500/25"
                    : "bg-white dark:bg-slate-900 border-slate-250 dark:border-slate-800 text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
                }`}
              >
                {cat.category}
              </button>
            );
          })}
        </div>

        {/* Landscape Showcase Grid Container */}
        <div className="min-h-[320px] relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTabIdx}
              initial={{ opacity: 0, x: 15 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -15 }}
              transition={{ duration: 0.25 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {activeCategory.skills.map((skill) => (
                <div
                  key={skill.name}
                  className="glass-card p-6 rounded-2xl shadow-sm hover:shadow-md hover:border-indigo-500/25 transition-all duration-300 relative group overflow-hidden flex flex-col justify-between space-y-4 text-left"
                >
                  {/* Accent Highlight Ring */}
                  <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-indigo-500 to-purple-500 opacity-60 group-hover:opacity-100 transition-opacity" />

                  {/* Header info */}
                  <div className="space-y-1">
                    <div className="flex justify-between items-start">
                      <h3 className="text-sm font-bold text-slate-900 dark:text-white pr-2">
                        {skill.name}
                      </h3>
                      <span className="text-xs font-extrabold text-indigo-600 dark:text-indigo-400">
                        {skill.level}%
                      </span>
                    </div>

                    <div className="flex items-center space-x-2 text-[10px] text-slate-400 dark:text-slate-500 font-semibold uppercase tracking-wider">
                      <span>{skill.experience || "1 year"} experience</span>
                      <span>•</span>
                      <span className={`px-1.5 py-0.5 rounded text-[8px] ${getStatusColor(skill.learningStatus)}`}>
                        {skill.learningStatus || "mastered"}
                      </span>
                    </div>
                  </div>

                  {/* Progress Bar */}
                  <div className="w-full h-1.5 bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.level}%` }}
                      transition={{ duration: 0.8, ease: "easeOut" }}
                      className="h-full rounded-full bg-gradient-to-r from-indigo-500 to-purple-500"
                    />
                  </div>

                  {/* Meta Tags (Tools & Related Projects) */}
                  <div className="space-y-2 pt-2 border-t border-slate-200/50 dark:border-slate-800/50">
                    {/* Tools list */}
                    {skill.tools && skill.tools.length > 0 && (
                      <div className="flex items-start space-x-1.5">
                        <FaWrench size={10} className="text-slate-400 dark:text-slate-500 mt-1 flex-shrink-0" />
                        <div className="flex flex-wrap gap-1">
                          {skill.tools.map((t) => (
                            <span
                              key={t}
                              className="px-1.5 py-0.5 rounded text-[9px] font-semibold bg-slate-100 dark:bg-slate-800/80 text-slate-600 dark:text-slate-400"
                            >
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Related Projects */}
                    {skill.relatedProjects && skill.relatedProjects.length > 0 && (
                      <div className="flex items-start space-x-1.5">
                        <FaFolder size={10} className="text-indigo-400/80 dark:text-indigo-500 mt-1 flex-shrink-0" />
                        <div className="flex flex-wrap gap-1">
                          {skill.relatedProjects.map((p) => (
                            <span
                              key={p}
                              className="px-1.5 py-0.5 rounded text-[9px] font-semibold bg-indigo-500/5 dark:bg-indigo-950/30 text-indigo-650 dark:text-indigo-300"
                            >
                              {p}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
