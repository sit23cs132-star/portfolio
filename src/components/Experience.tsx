import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaBriefcase, FaCalendarAlt, FaMapMarkerAlt, FaChevronDown, FaChevronUp } from "react-icons/fa";
import { resumeData } from "../data/resumeData";

export default function Experience() {
  const experiences = resumeData.experience;
  const [activeStarIdx, setActiveStarIdx] = useState<number | null>(null);

  const toggleStar = (idx: number) => {
    setActiveStarIdx((prev) => (prev === idx ? null : idx));
  };

  return (
    <section id="experience" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-4xl font-bold font-display text-slate-900 dark:text-white"
          >
            Professional Experience
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-slate-500 dark:text-slate-400 mt-2"
          >
            My internship history. Click "Inspect STAR Case Study" to view the Situation, Task, Action, and Results (STAR) breakdown.
          </motion.p>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="h-1 bg-indigo-600 dark:bg-indigo-400 mx-auto mt-4 rounded-full"
          />
        </div>

        {/* Timeline container */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical line through center on desktop, left on mobile */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-slate-200 dark:bg-slate-800 -translate-x-1/2" />

          {/* Timeline Items */}
          <div className="space-y-12">
            {experiences.map((exp, idx) => {
              const isEven = idx % 2 === 0;
              const isStarExpanded = activeStarIdx === idx;

              return (
                <div
                  key={idx}
                  className={`relative flex flex-col md:flex-row items-start ${
                    isEven ? "md:flex-row-reverse" : ""
                  }`}
                >
                  {/* Timeline node/dot */}
                  <div className="absolute left-4 md:left-1/2 w-8 h-8 rounded-full border-4 border-white dark:border-slate-950 bg-indigo-500 flex items-center justify-center text-white -translate-x-1/2 z-10 shadow-sm">
                    <FaBriefcase size={12} />
                  </div>

                  {/* Left / Right spacer for alignment */}
                  <div className="hidden md:block w-1/2" />

                  {/* Card wrapper */}
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? 50 : -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ type: "spring", stiffness: 100, damping: 15 }}
                    className="w-full md:w-1/2 pl-12 md:pl-0 md:px-8 text-left"
                  >
                    <div className="glass-card p-6 sm:p-8 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 relative">
                      {/* Company & Date header */}
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-4">
                        <span className="inline-flex px-3 py-1 rounded-md text-xs font-semibold bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 self-start">
                          {exp.position}
                        </span>
                        <div className="flex items-center space-x-1.5 text-xs text-slate-500 dark:text-slate-400">
                          <FaCalendarAlt />
                          <span>{exp.duration}</span>
                        </div>
                      </div>

                      <h3 className="text-xl font-bold font-display text-slate-900 dark:text-white">
                        {exp.company}
                      </h3>

                      <div className="flex items-center space-x-1.5 text-xs text-slate-500 dark:text-slate-400 mt-1 mb-4">
                        <FaMapMarkerAlt />
                        <span>{exp.location}</span>
                      </div>

                      {/* Business Problem summary if exists */}
                      {exp.businessProblem && (
                        <div className="mb-4 p-3 bg-slate-100/50 dark:bg-slate-900/40 rounded-xl border border-slate-200/40 dark:border-slate-800/40">
                          <span className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">
                            Business Problem
                          </span>
                          <p className="text-xs text-slate-600 dark:text-slate-400 font-normal leading-relaxed">
                            {exp.businessProblem}
                          </p>
                        </div>
                      )}

                      {/* Responsibilities list */}
                      <ul className="space-y-2 mb-6">
                        {exp.responsibilities.map((resp, rIdx) => (
                          <li
                            key={rIdx}
                            className="text-sm text-slate-650 dark:text-slate-400 flex items-start space-x-2 font-normal leading-relaxed"
                          >
                            <span className="text-indigo-500 mt-1.5 select-none">•</span>
                            <span>{resp}</span>
                          </li>
                        ))}
                      </ul>

                      {/* STAR Toggle Button */}
                      {exp.situation && (
                        <button
                          onClick={() => toggleStar(idx)}
                          className="w-full py-2.5 px-4 mb-4 rounded-xl text-xs font-bold text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 bg-indigo-500/5 hover:bg-indigo-500/10 transition-colors flex items-center justify-center space-x-2 cursor-pointer border border-indigo-500/10"
                        >
                          <span>{isStarExpanded ? "Hide STAR Case Study" : "Inspect STAR Case Study"}</span>
                          {isStarExpanded ? <FaChevronUp size={10} /> : <FaChevronDown size={10} />}
                        </button>
                      )}

                      {/* Expanded STAR layout */}
                      <AnimatePresence initial={false}>
                        {isStarExpanded && exp.situation && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                            className="overflow-hidden space-y-4 pb-4 border-b border-slate-200/50 dark:border-slate-800/50 mb-4"
                          >
                            {/* STAR block */}
                            <div className="grid grid-cols-1 gap-3.5 text-xs text-slate-650 dark:text-slate-400">
                              <div>
                                <span className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-0.5">
                                  Situation
                                </span>
                                <p className="leading-relaxed font-normal">{exp.situation}</p>
                              </div>
                              <div>
                                <span className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-0.5">
                                  Task
                                </span>
                                <p className="leading-relaxed font-normal">{exp.task}</p>
                              </div>
                              <div>
                                <span className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-0.5">
                                  Action
                                </span>
                                <p className="leading-relaxed font-normal">{exp.action}</p>
                              </div>
                              <div>
                                <span className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-0.5">
                                  Result
                                </span>
                                <p className="leading-relaxed font-normal text-slate-800 dark:text-slate-200 font-semibold">{exp.result}</p>
                              </div>
                              {exp.lessonsLearned && (
                                <div className="mt-1 p-2.5 bg-indigo-500/5 rounded-lg border border-indigo-500/10">
                                  <span className="block text-[10px] font-bold text-slate-450 dark:text-slate-400 uppercase tracking-wider mb-0.5">
                                    Key Lessons
                                  </span>
                                  <p className="italic leading-relaxed font-normal text-slate-600 dark:text-slate-400">
                                    "{exp.lessonsLearned}"
                                  </p>
                                </div>
                              )}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>

                      {/* Tech badges */}
                      <div className="flex flex-wrap gap-1.5 pt-4 border-t border-slate-200/50 dark:border-slate-800/50">
                        {exp.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-2.5 py-1 rounded-md text-xs font-semibold bg-slate-100 dark:bg-slate-800 text-slate-650 dark:text-slate-350"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
