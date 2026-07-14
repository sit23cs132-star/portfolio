import { motion } from "framer-motion";
import { FaGraduationCap, FaSchool, FaCalendarAlt, FaAward } from "react-icons/fa";
import { resumeData } from "../data/resumeData";

export default function Education() {
  const educationList = resumeData.education;

  return (
    <section id="education" className="py-20 bg-slate-50/50 dark:bg-slate-900/30">
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
            Education
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-slate-500 dark:text-slate-400 mt-2"
          >
            My academic journey and qualifications.
          </motion.p>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="h-1 bg-indigo-600 dark:bg-indigo-400 mx-auto mt-4 rounded-full"
          />
        </div>

        {/* Education Cards Grid */}
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          {educationList.map((edu, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.2 }}
              className="glass-card p-8 rounded-2xl shadow-sm text-left flex flex-col justify-between hover:shadow-md transition-shadow relative overflow-hidden group"
            >
              {/* Top Accent Gradient Border */}
              <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-indigo-500 to-purple-500 opacity-60 group-hover:opacity-100 transition-opacity" />

              <div className="space-y-4">
                {/* Header Icon */}
                <div className="w-12 h-12 rounded-xl bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 flex items-center justify-center">
                  {idx === 0 ? <FaGraduationCap size={24} /> : <FaSchool size={22} />}
                </div>

                <div className="space-y-1">
                  <div className="flex items-center space-x-2 text-xs text-slate-500 dark:text-slate-400">
                    <FaCalendarAlt />
                    <span>{edu.duration}</span>
                  </div>
                  <h3 className="text-xl font-bold font-display text-slate-900 dark:text-white leading-snug">
                    {edu.degree}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 font-medium text-sm">
                    {edu.institution}
                  </p>
                </div>
              </div>

              {/* Grade details */}
              <div className="mt-6 pt-4 border-t border-slate-200/50 dark:border-slate-800/50 flex items-center space-x-2">
                <FaAward className="text-indigo-500 dark:text-indigo-400" size={16} />
                <span className="text-sm font-semibold text-slate-800 dark:text-slate-200">
                  {edu.grade}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
