import { motion } from "framer-motion";
import { FaLaptopCode, FaJava, FaGlobe, FaReact, FaDatabase, FaBrain, FaCloud, FaSpinner } from "react-icons/fa";
import { resumeData } from "../data/resumeData";

export default function LearningTimeline() {
  const journey = resumeData.learningJourney;

  const getJourneyIcon = (iconName: string) => {
    switch (iconName) {
      case "python":
        return <FaLaptopCode size={20} className="text-indigo-500" />;
      case "java":
        return <FaJava size={20} className="text-amber-600" />;
      case "web":
        return <FaGlobe size={20} className="text-blue-500" />;
      case "react":
        return <FaReact size={20} className="text-sky-500" />;
      case "database":
        return <FaDatabase size={20} className="text-emerald-500" />;
      case "ai":
        return <FaBrain size={20} className="text-purple-500" />;
      case "cloud":
        return <FaCloud size={20} className="text-sky-400" />;
      default:
        return <FaSpinner size={20} className="text-indigo-500 animate-spin" />;
    }
  };

  return (
    <section id="journey" className="py-20">
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
            My Learning Journey
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-slate-500 dark:text-slate-400 mt-2 font-normal"
          >
            Chronological growth timeline illustrating my continuous path of skills development.
          </motion.p>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="h-1 bg-indigo-600 dark:bg-indigo-400 mx-auto mt-4 rounded-full"
          />
        </div>

        {/* Horizontal Scroll / Grid timeline */}
        <div className="relative max-w-5xl mx-auto">
          {/* Connecting Line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-slate-200 dark:bg-slate-800 -translate-x-1/2" />

          <div className="space-y-8">
            {journey.map((item, idx) => {
              const isEven = idx % 2 === 0;

              return (
                <div
                  key={idx}
                  className={`relative flex flex-col md:flex-row items-start ${
                    isEven ? "md:flex-row-reverse" : ""
                  }`}
                >
                  {/* Circle Node */}
                  <div className="absolute left-6 md:left-1/2 w-6 h-6 rounded-full border-4 border-white dark:border-slate-950 bg-indigo-600 -translate-x-1/2 z-10 flex items-center justify-center text-white" />

                  {/* Spacer */}
                  <div className="hidden md:block w-1/2" />

                  {/* Card content */}
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? 30 : -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", stiffness: 100 }}
                    className="w-full md:w-1/2 pl-12 md:pl-0 md:px-8 text-left"
                  >
                    <div className="glass-card p-5 rounded-2xl flex items-start space-x-4 shadow-sm hover:shadow-md transition-shadow">
                      <div className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center flex-shrink-0">
                        {getJourneyIcon(item.icon)}
                      </div>
                      <div className="space-y-1">
                        <div className="flex items-center space-x-2">
                          <span className="text-[10px] font-bold text-slate-400 dark:text-slate-500 bg-slate-100 dark:bg-slate-800/80 px-2 py-0.5 rounded uppercase tracking-wider">
                            {item.year}
                          </span>
                        </div>
                        <h3 className="text-base font-bold text-slate-900 dark:text-white leading-tight">
                          {item.milestone}
                        </h3>
                        <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed font-normal">
                          {item.description}
                        </p>
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
