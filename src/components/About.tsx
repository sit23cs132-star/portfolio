import { motion } from "framer-motion";
import { FaHistory, FaRocket, FaTerminal } from "react-icons/fa";
import { resumeData } from "../data/resumeData";

export default function About() {
  const { strengths, whyProgramming, devPhilosophy, softwareInterests, careerGoals } = resumeData.about;

  const cardVariants = {
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 15
      }
    }
  } as const;

  return (
    <section id="about" className="py-20 bg-slate-50/50 dark:bg-slate-900/30">
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
            About Me
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="h-1 bg-indigo-600 dark:bg-indigo-400 mx-auto mt-4 rounded-full"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: My Story & Metrics */}
          <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="lg:col-span-6 space-y-6 flex flex-col justify-between"
          >
            {/* Origin Story */}
            <div className="glass-card p-8 rounded-2xl shadow-sm text-left space-y-6 flex-grow flex flex-col justify-center">
              <div>
                <h3 className="text-lg font-bold font-display text-slate-900 dark:text-white mb-3 flex items-center space-x-2">
                  <FaHistory className="text-indigo-500" />
                  <span>How I Started Programming</span>
                </h3>
                <p className="text-sm text-slate-650 dark:text-slate-400 leading-relaxed font-normal">
                  {whyProgramming}
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-bold font-display text-slate-900 dark:text-white mb-3 flex items-center space-x-2">
                  <FaRocket className="text-purple-500" />
                  <span>Career Goals</span>
                </h3>
                <p className="text-sm text-slate-650 dark:text-slate-400 leading-relaxed font-normal">
                  {careerGoals}
                </p>
              </div>
            </div>

            {/* Quick Metrics */}
            <div className="grid grid-cols-2 gap-4">
              <div className="glass-card p-5 rounded-2xl text-center flex flex-col items-center justify-center">
                <span className="text-3xl font-bold font-display text-indigo-600 dark:text-indigo-400">3+</span>
                <span className="text-xs text-slate-500 dark:text-slate-400 mt-1 uppercase font-semibold tracking-wider">Internships Done</span>
              </div>
              <div className="glass-card p-5 rounded-2xl text-center flex flex-col items-center justify-center">
                <span className="text-3xl font-bold font-display text-purple-600 dark:text-purple-400">
                  {resumeData.education[0]?.grade.match(/[\d.]+/)?.[0] || "8.91"}
                </span>
                <span className="text-xs text-slate-500 dark:text-slate-400 mt-1 uppercase font-semibold tracking-wider">B.E. CGPA</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Philosophy & Strengths */}
          <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="lg:col-span-6 space-y-6 flex flex-col justify-between"
          >
            {/* Dev Philosophy */}
            <div className="glass-card p-6 rounded-2xl shadow-sm text-left flex-grow flex flex-col justify-center">
              <h3 className="text-base font-bold font-display text-slate-900 dark:text-white mb-3 flex items-center space-x-2">
                <FaTerminal className="text-indigo-500" />
                <span>Development Philosophy</span>
              </h3>
              <p className="text-sm text-slate-650 dark:text-slate-400 italic leading-relaxed border-l-2 border-indigo-500 pl-4 py-1">
                "{devPhilosophy}"
              </p>
            </div>

            {/* Strengths & Software Focus */}
            <div className="glass-card p-6 rounded-2xl shadow-sm text-left space-y-4 flex-grow flex flex-col justify-center">
              <div>
                <h4 className="text-xs font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-wider mb-2">
                  Software Focus & Interests
                </h4>
                <p className="text-sm text-slate-650 dark:text-slate-400 font-medium">
                  {softwareInterests}
                </p>
              </div>
              
              <div>
                <h4 className="text-xs font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-wider mb-2">
                  Personal Strengths
                </h4>
                <div className="flex flex-wrap gap-2">
                  {strengths.map((strength) => (
                    <span
                      key={strength}
                      className="px-2.5 py-1 rounded-md text-xs bg-indigo-500/10 text-indigo-700 dark:text-indigo-300 font-semibold"
                    >
                      {strength}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
