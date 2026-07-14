import { motion } from "framer-motion";
import { FaTrophy, FaLaptopCode } from "react-icons/fa";
import { resumeData } from "../data/resumeData";

export default function Achievements() {
  const achievements = resumeData.achievements;

  const getIcon = (idx: number) => {
    if (idx === 0) return <FaTrophy size={26} className="text-amber-500" />;
    return <FaLaptopCode size={26} className="text-indigo-500" />;
  };

  return (
    <section id="achievements" className="py-20 bg-slate-50/50 dark:bg-slate-900/30">
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
            Achievements & Co-curriculars
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-slate-500 dark:text-slate-400 mt-2"
          >
            Key milestones demonstrating leadership, communication, and technical presentation skills.
          </motion.p>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="h-1 bg-indigo-600 dark:bg-indigo-400 mx-auto mt-4 rounded-full"
          />
        </div>

        {/* Achievements Cards */}
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          {achievements.map((ach, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="glass-card p-8 rounded-2xl shadow-sm text-left flex flex-col justify-between hover:shadow-md transition-shadow relative overflow-hidden group cursor-default"
            >
              {/* Highlight corner gradient */}
              <div className="absolute -top-10 -right-10 w-24 h-24 bg-indigo-500/10 dark:bg-indigo-500/5 rounded-full blur-xl group-hover:scale-150 transition-transform duration-500" />
              
              <div className="space-y-4 relative z-10">
                {/* Header Icon */}
                <div className="w-14 h-14 rounded-2xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center group-hover:rotate-6 transition-transform">
                  {getIcon(idx)}
                </div>

                <div className="space-y-2">
                  <h3 className="text-xl font-bold font-display text-slate-900 dark:text-white leading-snug">
                    {ach.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed font-normal">
                    {ach.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
