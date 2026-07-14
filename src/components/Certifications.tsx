import { motion } from "framer-motion";
import { FaAward, FaCloud, FaShieldAlt, FaCode, FaNetworkWired } from "react-icons/fa";
import { resumeData } from "../data/resumeData";

export default function Certifications() {
  const certs = resumeData.certifications;

  const getCertIcon = (name: string) => {
    const lowerName = name.toLowerCase();
    if (lowerName.includes("aws")) return <FaCloud size={24} className="text-sky-500" />;
    if (lowerName.includes("deloitte")) return <FaShieldAlt size={24} className="text-green-500" />;
    if (lowerName.includes("jpmorgan") || lowerName.includes("jp morgan")) return <FaCode size={24} className="text-amber-500" />;
    if (lowerName.includes("cisco") || lowerName.includes("ccna")) return <FaNetworkWired size={24} className="text-blue-500" />;
    return <FaAward size={24} className="text-indigo-500" />;
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { y: 20, opacity: 0 },
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

  return (
    <section id="certifications" className="py-20">
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
            Certifications
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-slate-500 dark:text-slate-400 mt-2"
          >
            Professional credentials and training validating my technical capabilities.
          </motion.p>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="h-1 bg-indigo-600 dark:bg-indigo-400 mx-auto mt-4 rounded-full"
          />
        </div>

        {/* Certifications Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {certs.map((cert) => (
            <motion.div
              key={cert.name}
              variants={cardVariants}
              className="glass-card p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow text-left flex flex-col justify-between hover:border-indigo-500/30 dark:hover:border-indigo-500/25 duration-300 relative group cursor-pointer"
            >
              <div className="space-y-4">
                {/* Cert Icon */}
                <div className="w-12 h-12 rounded-xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center">
                  {getCertIcon(cert.name)}
                </div>

                <div className="space-y-1">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                    {cert.organization}
                  </span>
                  <h3 className="text-base font-bold font-display text-slate-900 dark:text-white leading-tight line-clamp-2">
                    {cert.name}
                  </h3>
                </div>
              </div>

              {/* Date & Credential Link */}
              <div className="mt-6 pt-4 border-t border-slate-200/50 dark:border-slate-800/50 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
                <span>Issued {cert.date}</span>
                <a
                  href={cert.credentialLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-indigo-600 dark:text-indigo-400 hover:text-indigo-750 transition-colors"
                >
                  Verify &rarr;
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
