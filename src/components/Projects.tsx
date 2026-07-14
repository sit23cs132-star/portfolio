import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaTimes, FaCheckCircle, FaExclamationTriangle, FaAward, FaSitemap, FaWrench, FaBookOpen } from "react-icons/fa";
import { resumeData } from "../data/resumeData";

const projectImages = ["/project1.png", "/project2.png", "/project3.png"];

export default function Projects() {
  const { projects } = resumeData;
  const [activeModalIdx, setActiveModalIdx] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState<"overview" | "architecture" | "casestudy">("overview");

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const cardVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  } as const;

  const handleOpenModal = (idx: number) => {
    setActiveModalIdx(idx);
    setActiveTab("overview");
  };

  return (
    <section id="projects" className="py-20 bg-slate-50/50 dark:bg-slate-900/30">
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
            Featured Projects
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-slate-500 dark:text-slate-400 mt-2"
          >
            A selection of production-level solutions, presented as comprehensive engineering case studies.
          </motion.p>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="h-1 bg-indigo-600 dark:bg-indigo-400 mx-auto mt-4 rounded-full"
          />
        </div>

        {/* Project Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, idx) => (
            <motion.div
              key={project.title}
              variants={cardVariants}
              className="glass-card rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col h-full group"
            >
              {/* Image Container */}
              <div className="relative h-48 w-full overflow-hidden bg-slate-100 dark:bg-slate-800">
                <img
                  src={projectImages[idx]}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 to-transparent opacity-60" />
                <div className="absolute bottom-4 left-4 right-4 text-left">
                  <span className="px-2.5 py-1 rounded-md text-xs font-semibold bg-indigo-600/90 text-white backdrop-blur-sm">
                    {project.technologies[0]}
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex flex-col flex-1 text-left justify-between space-y-4">
                <div className="space-y-2">
                  <h3 className="text-xl font-bold font-display text-slate-900 dark:text-white leading-snug">
                    {project.title}
                  </h3>
                  <p className="text-slate-650 dark:text-slate-400 text-sm line-clamp-3 leading-relaxed font-normal">
                    {project.description}
                  </p>
                </div>

                <div className="space-y-4 pt-2">
                  {/* Tech Badges */}
                  <div className="flex flex-wrap gap-1.5">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 rounded text-xs bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-2 py-0.5 rounded text-xs bg-indigo-50 dark:bg-indigo-950/40 text-indigo-600 dark:text-indigo-400 font-semibold">
                        +{project.technologies.length - 3} more
                      </span>
                    )}
                  </div>

                  {/* Buttons */}
                  <div className="flex items-center justify-between pt-2 border-t border-slate-200/50 dark:border-slate-800/50">
                    <button
                      onClick={() => handleOpenModal(idx)}
                      className="text-sm font-semibold text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors cursor-pointer"
                    >
                      Inspect Case Study &rarr;
                    </button>
                    <div className="flex space-x-2">
                      <a
                        href={project.github}
                        className="p-2 text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors cursor-pointer"
                        title="GitHub Code"
                      >
                        <FaGithub size={18} />
                      </a>
                      <a
                        href={project.liveDemo}
                        className="p-2 text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors cursor-pointer"
                        title="Live Demo"
                      >
                        <FaExternalLinkAlt size={16} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Modal Overlay */}
        <AnimatePresence>
          {activeModalIdx !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-55 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md overflow-y-auto"
              onClick={() => setActiveModalIdx(null)}
            >
              {/* Modal Box */}
              <motion.div
                initial={{ scale: 0.95, y: 20, opacity: 0 }}
                animate={{ scale: 1, y: 0, opacity: 1 }}
                exit={{ scale: 0.95, y: 20, opacity: 0 }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
                className="bg-white dark:bg-slate-900 w-full max-w-4xl rounded-2xl shadow-xl overflow-hidden border border-slate-200 dark:border-slate-800 text-left my-8"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Modal Header Image */}
                <div className="relative h-48 sm:h-56 bg-slate-100 dark:bg-slate-800">
                  <img
                    src={projectImages[activeModalIdx]}
                    alt={projects[activeModalIdx].title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent" />
                  <button
                    onClick={() => setActiveModalIdx(null)}
                    className="absolute top-4 right-4 p-2 bg-slate-950/60 hover:bg-slate-950 text-white rounded-full transition-colors cursor-pointer"
                    aria-label="Close modal"
                  >
                    <FaTimes size={18} />
                  </button>

                  <div className="absolute bottom-4 left-6 right-6">
                    <h3 className="text-xl sm:text-2xl font-extrabold font-display text-white mb-2">
                      {projects[activeModalIdx].title}
                    </h3>
                    <p className="text-xs text-indigo-300 font-semibold mb-2">
                      Role: {projects[activeModalIdx].role} | Timeline: {projects[activeModalIdx].caseStudy?.timeline || "N/A"}
                    </p>
                  </div>
                </div>

                {/* Tab Navigation */}
                <div className="flex border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50">
                  <button
                    onClick={() => setActiveTab("overview")}
                    className={`flex-1 py-3 text-center text-xs sm:text-sm font-semibold border-b-2 transition-all flex items-center justify-center space-x-1.5 cursor-pointer ${
                      activeTab === "overview"
                        ? "border-indigo-500 text-indigo-600 dark:text-indigo-400 bg-white dark:bg-slate-900"
                        : "border-transparent text-slate-500 hover:text-slate-700 dark:hover:text-slate-350"
                    }`}
                  >
                    <FaBookOpen size={14} />
                    <span>Overview</span>
                  </button>
                  <button
                    onClick={() => setActiveTab("architecture")}
                    className={`flex-1 py-3 text-center text-xs sm:text-sm font-semibold border-b-2 transition-all flex items-center justify-center space-x-1.5 cursor-pointer ${
                      activeTab === "architecture"
                        ? "border-indigo-500 text-indigo-600 dark:text-indigo-400 bg-white dark:bg-slate-900"
                        : "border-transparent text-slate-500 hover:text-slate-700 dark:hover:text-slate-350"
                    }`}
                  >
                    <FaSitemap size={14} />
                    <span>System Design</span>
                  </button>
                  <button
                    onClick={() => setActiveTab("casestudy")}
                    className={`flex-1 py-3 text-center text-xs sm:text-sm font-semibold border-b-2 transition-all flex items-center justify-center space-x-1.5 cursor-pointer ${
                      activeTab === "casestudy"
                        ? "border-indigo-500 text-indigo-600 dark:text-indigo-400 bg-white dark:bg-slate-900"
                        : "border-transparent text-slate-500 hover:text-slate-700 dark:hover:text-slate-350"
                    }`}
                  >
                    <FaWrench size={14} />
                    <span>Case Study</span>
                  </button>
                </div>

                {/* Modal Content */}
                <div className="p-6 sm:p-8 max-h-[50vh] overflow-y-auto bg-white dark:bg-slate-900">
                  <AnimatePresence mode="wait">
                    {activeTab === "overview" && (
                      <motion.div
                        key="overview"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                        className="space-y-6 text-left"
                      >
                        <div>
                          <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">
                            Problem Statement
                          </h4>
                          <p className="text-sm text-slate-650 dark:text-slate-300 leading-relaxed font-normal">
                            {projects[activeModalIdx].problemSolved}
                          </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-slate-200/50 dark:border-slate-800/50">
                          <div className="space-y-4">
                            <div>
                              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 flex items-center space-x-1">
                                <FaExclamationTriangle className="text-red-500" />
                                <span>Challenges Faced</span>
                              </span>
                              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed font-normal mt-1">
                                {projects[activeModalIdx].challengesFaced}
                              </p>
                            </div>
                          </div>

                          <div className="space-y-4">
                            <div>
                              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 flex items-center space-x-1">
                                <FaCheckCircle className="text-green-500" />
                                <span>Key Features</span>
                              </span>
                              <ul className="space-y-1 mt-1 text-xs text-slate-600 dark:text-slate-400 font-normal">
                                {projects[activeModalIdx].keyFeatures.map((feat, fidx) => (
                                  <li key={fidx} className="flex items-start space-x-1.5">
                                    <span className="text-indigo-500 select-none">•</span>
                                    <span>{feat}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </div>

                        <div className="pt-4 border-t border-slate-200/50 dark:border-slate-800/50">
                          <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">
                            Outcome / Project Result
                          </h4>
                          <p className="text-sm text-slate-850 dark:text-slate-250 leading-relaxed font-medium">
                            {projects[activeModalIdx].outcome}
                          </p>
                        </div>
                      </motion.div>
                    )}

                    {activeTab === "architecture" && (
                      <motion.div
                        key="architecture"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                        className="space-y-6 text-left"
                      >
                        {/* Tech Stack justification */}
                        <div>
                          <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                            Technologies & Justification
                          </h4>
                          <div className="flex flex-wrap gap-1.5 mb-4">
                            {projects[activeModalIdx].technologies.map((tech) => (
                              <span
                                key={tech}
                                className="px-2.5 py-1 rounded text-xs font-semibold bg-indigo-500/10 text-indigo-700 dark:text-indigo-300"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* System Flow Diagram */}
                        {projects[activeModalIdx].caseStudy?.architectureDiagramText && (
                          <div>
                            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2 flex items-center space-x-1.5">
                              <FaSitemap className="text-indigo-500" />
                              <span>System Architecture Diagram</span>
                            </h4>
                            <div className="p-4 bg-slate-950 text-emerald-400 font-mono rounded-xl text-xs overflow-x-auto shadow-inner border border-slate-800/80">
                              {projects[activeModalIdx].caseStudy?.architectureDiagramText}
                            </div>
                          </div>
                        )}

                        {/* Performance metrics dashboard */}
                        {projects[activeModalIdx].caseStudy?.metrics && (
                          <div className="pt-4 border-t border-slate-200/50 dark:border-slate-800/50">
                            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                              Engineering Metrics
                            </h4>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                              {projects[activeModalIdx].caseStudy?.metrics.map((m, midx) => (
                                <div
                                  key={midx}
                                  className="p-3 bg-indigo-500/5 dark:bg-indigo-950/20 border border-indigo-500/10 rounded-xl flex items-center space-x-2"
                                >
                                  <FaAward className="text-indigo-500" size={16} />
                                  <span className="text-xs font-semibold text-slate-800 dark:text-slate-200">
                                    {m}
                                  </span>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}
                      </motion.div>
                    )}

                    {activeTab === "casestudy" && (
                      <motion.div
                        key="casestudy"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                        className="space-y-6 text-left"
                      >
                        {projects[activeModalIdx].caseStudy ? (
                          <div className="space-y-5 text-sm">
                            <div>
                              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">
                                Why This Problem Matters
                              </h4>
                              <p className="text-slate-650 dark:text-slate-350 leading-relaxed font-normal">
                                {projects[activeModalIdx].caseStudy?.whyItMatters}
                              </p>
                            </div>

                            <div>
                              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">
                                Approach & Implementation
                              </h4>
                              <p className="text-slate-650 dark:text-slate-350 leading-relaxed font-normal">
                                {projects[activeModalIdx].caseStudy?.approach}
                              </p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-slate-200/50 dark:border-slate-800/50">
                              <div>
                                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">
                                  Trade-offs Considered
                                </h4>
                                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed font-normal">
                                  {projects[activeModalIdx].caseStudy?.tradeoffs}
                                </p>
                              </div>
                              <div>
                                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">
                                  Key Lessons Learned
                                </h4>
                                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed font-normal">
                                  {projects[activeModalIdx].caseStudy?.lessonsLearned}
                                </p>
                              </div>
                            </div>

                            <div className="pt-4 border-t border-slate-200/50 dark:border-slate-800/50">
                              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">
                                Future Improvements
                              </h4>
                              <p className="text-slate-650 dark:text-slate-350 leading-relaxed font-normal">
                                {projects[activeModalIdx].caseStudy?.futureImprovements}
                              </p>
                            </div>
                          </div>
                        ) : (
                          <div className="text-center py-8 text-slate-500">
                            Case study details are being compiled for this project.
                          </div>
                        )}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Modal Footer Links */}
                <div className="p-6 bg-slate-50 dark:bg-slate-900/50 border-t border-slate-200/50 dark:border-slate-800/50 flex flex-wrap justify-between items-center gap-4">
                  <div className="flex space-x-4">
                    <a
                      href={projects[activeModalIdx].github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium bg-slate-200 hover:bg-slate-300 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-850 dark:text-slate-200 transition-colors cursor-pointer"
                    >
                      <FaGithub size={16} />
                      <span>View Code</span>
                    </a>
                    <a
                      href={projects[activeModalIdx].liveDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium bg-indigo-600 hover:bg-indigo-700 text-white transition-colors cursor-pointer"
                    >
                      <FaExternalLinkAlt size={14} />
                      <span>Live Demo</span>
                    </a>
                  </div>
                  <button
                    onClick={() => setActiveModalIdx(null)}
                    className="px-4 py-2 text-sm font-semibold text-slate-600 dark:text-slate-400 hover:text-slate-800 dark:hover:text-white transition-colors cursor-pointer"
                  >
                    Close Case Study
                  </button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
