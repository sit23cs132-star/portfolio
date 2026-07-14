import { motion } from "framer-motion";
import { FaCode, FaBookReader, FaHeartbeat, FaSync, FaShieldAlt, FaCompress, FaCheckDouble, FaRocket, FaTools } from "react-icons/fa";

const items = [
  { icon: <FaCode />, title: "Clean Code", desc: "Write self-documenting, formatted code with clear encapsulation so others can read and edit it easily." },
  { icon: <FaCheckDouble />, title: "Readability", desc: "Prioritize clear function naming and concise logic structures over clever, complex code." },
  { icon: <FaSync />, title: "Reusability", desc: "Extract shared routines into modular helper functions, keeping components DRY." },
  { icon: <FaHeartbeat />, title: "Performance", desc: "Optimize CPU overhead, manage state updates cleanly to avoid redundant renders, and compress web assets." },
  { icon: <FaTools className="hidden" />, title: "Maintainability", desc: "Build decopled files, configure clear TS type definitions, and follow strict linting rules." },
  { icon: <FaRocket />, title: "Scalability", desc: "Design interfaces and API gateways assuming they will handle 10x workloads." },
  { icon: <FaCompress className="hidden" />, title: "User Experience", desc: "Develop responsive grid layouts, design interactive hover effects, and add subtle animations." },
  { icon: <FaBookReader />, title: "Continuous Learning", desc: "Audit new framework specifications, build core experiments, and publish articles to grow." }
];

export default function Philosophy() {
  return (
    <section id="philosophy" className="py-20 bg-slate-50/50 dark:bg-slate-900/30 border-t border-slate-200/40 dark:border-slate-800/40">
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
            My Engineering Philosophy
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-slate-500 dark:text-slate-400 mt-2 font-normal"
          >
            Core principles guiding my decisions when architecting applications and writing code.
          </motion.p>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="h-1 bg-indigo-600 dark:bg-indigo-400 mx-auto mt-4 rounded-full"
          />
        </div>

        {/* Philosophy Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
          {items.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className="glass-card p-6 rounded-2xl flex flex-col justify-between hover:shadow-md transition-all duration-300 relative group"
            >
              <div className="space-y-4">
                <div className="w-10 h-10 rounded-xl bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 flex items-center justify-center text-lg">
                  {item.icon.props.className?.includes("hidden") ? <FaShieldAlt /> : item.icon}
                </div>
                <div className="space-y-1.5">
                  <h3 className="text-base font-bold text-slate-900 dark:text-white leading-tight">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed font-normal">
                    {item.desc}
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
