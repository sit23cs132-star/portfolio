import { useEffect, useRef } from "react";
import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import { FaLaptopCode, FaBriefcase, FaDatabase, FaGithub, FaFileCode, FaCalendarAlt, FaAward, FaCodeBranch } from "react-icons/fa";
import { resumeData } from "../data/resumeData";

// Animated Counter Subcomponent
function AnimatedCounter({ value, suffix = "", prefix = "" }: { value: number; suffix?: string; prefix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { damping: 35, stiffness: 90 });
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);

  useEffect(() => {
    return springValue.on("change", (latest) => {
      if (ref.current) {
        let numVal = Math.floor(latest);
        let formatted = numVal.toLocaleString();
        ref.current.textContent = `${prefix}${formatted}${suffix}`;
      }
    });
  }, [springValue, prefix, suffix]);

  return <span ref={ref}>{prefix}0{suffix}</span>;
}

export default function Metrics() {
  const {
    projectsCompleted,
    internships,
    technologiesLearned,
    githubRepos,
    linesOfCode,
    yearsOfLearning,
    certifications,
    openSourceContributions
  } = resumeData.metricsDashboard;

  // Extract number from linesOfCode string (e.g. "12,000+" -> 12000)
  const locNum = parseInt(linesOfCode.replace(/[^\d]/g, ""), 10) || 12000;

  const dashboardItems = [
    { icon: <FaLaptopCode className="text-indigo-500" />, label: "Projects Completed", value: projectsCompleted, suffix: "" },
    { icon: <FaBriefcase className="text-purple-500" />, label: "Internships Completed", value: internships, suffix: "" },
    { icon: <FaDatabase className="text-emerald-500" />, label: "Technologies Mastered", value: technologiesLearned, suffix: "" },
    { icon: <FaGithub className="text-slate-700 dark:text-slate-350" />, label: "GitHub Repositories", value: githubRepos, suffix: "" },
    { icon: <FaFileCode className="text-indigo-400" />, label: "Lines of Code Written", value: locNum, suffix: "+" },
    { icon: <FaCalendarAlt className="text-amber-500" />, label: "Years of Learning", value: yearsOfLearning, suffix: "+" },
    { icon: <FaAward className="text-amber-400" />, label: "Certifications Earned", value: certifications, suffix: "" },
    { icon: <FaCodeBranch className="text-pink-500" />, label: "Git Commits / Open Source", value: openSourceContributions, suffix: "+" }
  ];

  return (
    <section id="metrics" className="py-20 bg-slate-50/20 dark:bg-slate-900/5">
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
            Telemetry & Metrics Dashboard
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-slate-500 dark:text-slate-400 mt-2 font-normal"
          >
            Quantifiable stats illustrating my code volume, credential certifications, and development experience.
          </motion.p>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="h-1 bg-indigo-600 dark:bg-indigo-400 mx-auto mt-4 rounded-full"
          />
        </div>

        {/* Dashboard Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {dashboardItems.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05, type: "spring", stiffness: 100 }}
              className="glass-card p-6 rounded-2xl flex flex-col items-center justify-center text-center hover:border-indigo-500/20 hover:-translate-y-1 transition-all duration-300 shadow-sm"
            >
              <div className="w-12 h-12 rounded-full bg-slate-100 dark:bg-slate-900/50 flex items-center justify-center text-lg mb-3">
                {item.icon}
              </div>
              <span className="text-3xl font-extrabold font-display text-slate-900 dark:text-white leading-tight">
                <AnimatedCounter value={item.value} suffix={item.suffix} />
              </span>
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mt-1.5 text-center leading-normal">
                {item.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
