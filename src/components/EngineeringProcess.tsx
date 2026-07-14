import { motion } from "framer-motion";
import { FaLightbulb, FaSearch, FaClipboardList, FaPaintBrush, FaSitemap, FaCode, FaTools, FaCloudUploadAlt, FaSync } from "react-icons/fa";

const steps = [
  { icon: <FaLightbulb />, label: "Idea", desc: "Identify a clear business problem or user friction point to solve." },
  { icon: <FaSearch />, label: "Research", desc: "Audit state of the art, read documentations, and study existing solutions." },
  { icon: <FaClipboardList />, label: "Planning", desc: "Draft user stories, prioritize specifications, and map sprints." },
  { icon: <FaPaintBrush />, label: "UI Design", desc: "Sketch layout wireframes, plan responsive behaviors, and choose typography." },
  { icon: <FaSitemap />, label: "Architecture", desc: "Select tech stack, design database relationships, and sketch API gateways." },
  { icon: <FaCode />, label: "Development", desc: "Write clean, modular code following linting rules and SOLID principles." },
  { icon: <FaTools />, label: "Testing", desc: "Run code checkers, unit tests, and cross-browser responsiveness checks." },
  { icon: <FaCloudUploadAlt />, label: "Deployment", desc: "Configure CI/CD webhooks, trigger edge CDN builds, and verify security keys." },
  { icon: <FaSync />, label: "Maintenance", desc: "Monitor telemetry, capture bug logs, and iterate features." }
];

export default function EngineeringProcess() {
  const getCardLayoutClass = (idx: number) => {
    // Card 1 to 5 (Index 0 to 4)
    if (idx < 5) {
      return "col-span-1 lg:col-span-2";
    }
    // Card 6 (Index 5)
    if (idx === 5) {
      return "col-span-1 lg:col-span-2 xl:col-start-2";
    }
    // Card 7 & 8 (Index 6 & 7)
    if (idx === 6 || idx === 7) {
      return "col-span-1 lg:col-span-2 xl:col-start-auto";
    }
    // Card 9 (Index 8)
    return "col-span-1 lg:col-span-2 lg:col-start-4 xl:col-start-auto";
  };

  return (
    <section id="process" className="py-20 bg-slate-50/50 dark:bg-slate-900/30 border-t border-slate-200/40 dark:border-slate-800/40">
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
            My Development Process
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-slate-500 dark:text-slate-400 mt-2 font-normal"
          >
            How I approach building software—from initial friction points to live production deployments.
          </motion.p>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="h-1 bg-indigo-600 dark:bg-indigo-400 mx-auto mt-4 rounded-full"
          />
        </div>

        {/* Steps Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-8 xl:grid-cols-10 gap-6 items-stretch">
          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: idx * 0.05, type: "spring", stiffness: 80, damping: 12 }}
              className={`glass-card p-6 rounded-2xl flex flex-col justify-between hover:-translate-y-1.5 hover:shadow-lg hover:shadow-indigo-500/5 hover:border-indigo-500/30 transition-all duration-300 relative group border border-slate-200 dark:border-slate-800 ${getCardLayoutClass(idx)}`}
            >
              {/* Step number badge */}
              <div className="absolute top-4 right-4 text-xs font-bold text-slate-400 dark:text-slate-600 bg-slate-100 dark:bg-slate-800/80 w-6 h-6 rounded-full flex items-center justify-center border border-slate-200/50 dark:border-slate-800/30 shadow-sm select-none">
                {idx + 1}
              </div>

              <div className="space-y-4 text-left">
                {/* Icon wrapper with glow effect */}
                <div className="w-12 h-12 rounded-xl bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 flex items-center justify-center text-xl group-hover:scale-110 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-300 shadow-inner">
                  {step.icon}
                </div>
                <div className="space-y-2">
                  <h3 className="text-base font-bold text-slate-900 dark:text-white leading-tight group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                    {step.label}
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed font-normal">
                    {step.desc}
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
