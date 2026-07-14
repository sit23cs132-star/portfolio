import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaDownload, FaChevronDown } from "react-icons/fa";
import { resumeData } from "../data/resumeData";

export default function Hero() {
  const { name, title, introduction, social, personalStory, motivation } = resumeData.personalInfo;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1
      }
    }
  } as const;

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 100 } }
  } as const;

  const handleContactClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.getElementById("contact");
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-[90vh] flex items-center justify-center pt-24 pb-12 overflow-hidden grid-bg-light dark:grid-bg-dark"
    >
      {/* Decorative blurred backgrounds */}
      <div className="absolute top-1/4 left-1/10 w-72 h-72 rounded-full bg-indigo-500/10 dark:bg-indigo-500/5 blur-3xl" />
      <div className="absolute bottom-1/4 right-1/10 w-96 h-96 rounded-full bg-purple-500/10 dark:bg-purple-500/5 blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="md:col-span-7 text-left space-y-6 flex flex-col justify-center"
          >
            <motion.div variants={itemVariants} className="inline-flex items-center space-x-2 bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider self-start">
              <span>Available for Roles</span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-display leading-tight text-slate-900 dark:text-white"
            >
              Hi, I'm{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-500 dark:from-indigo-400 dark:via-purple-400 dark:to-indigo-300 text-glow">
                {name}
              </span>
            </motion.h1>

            <motion.h2
              variants={itemVariants}
              className="text-xl sm:text-2xl font-semibold text-indigo-600 dark:text-indigo-400 font-sans"
            >
              {title}
            </motion.h2>

            <motion.p
              variants={itemVariants}
              className="text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-xl font-normal leading-relaxed"
            >
              {introduction}
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="border-l-4 border-indigo-500 pl-4 py-1.5 italic text-sm text-slate-500 dark:text-slate-400 max-w-xl"
            >
              "{motivation}"
            </motion.div>

            <motion.p
              variants={itemVariants}
              className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 max-w-xl font-normal leading-relaxed"
            >
              {personalStory}
            </motion.p>

            {/* Social Icons */}
            <motion.div variants={itemVariants} className="flex space-x-4">
              <a
                href={social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full glass-card hover:bg-indigo-500 hover:text-white dark:hover:bg-indigo-500 text-slate-700 dark:text-slate-300 hover:border-indigo-500 transition-all duration-300 shadow-sm cursor-pointer"
                aria-label="GitHub"
              >
                <FaGithub size={20} />
              </a>
              <a
                href={social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full glass-card hover:bg-indigo-500 hover:text-white dark:hover:bg-indigo-500 text-slate-700 dark:text-slate-300 hover:border-indigo-500 transition-all duration-300 shadow-sm cursor-pointer"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={20} />
              </a>
              <a
                href={`mailto:${social.email}`}
                className="p-3 rounded-full glass-card hover:bg-indigo-500 hover:text-white dark:hover:bg-indigo-500 text-slate-700 dark:text-slate-300 hover:border-indigo-500 transition-all duration-300 shadow-sm cursor-pointer"
                aria-label="Email"
              >
                <FaEnvelope size={20} />
              </a>
              <a
                href={`tel:${social.phone}`}
                className="p-3 rounded-full glass-card hover:bg-indigo-500 hover:text-white dark:hover:bg-indigo-500 text-slate-700 dark:text-slate-300 hover:border-indigo-500 transition-all duration-300 shadow-sm cursor-pointer"
                aria-label="Phone"
              >
                <FaPhone size={18} />
              </a>
            </motion.div>

            {/* Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 pt-4"
            >
              <a
                href="#contact"
                onClick={handleContactClick}
                className="px-8 py-3 rounded-full text-white font-medium bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 shadow-md shadow-indigo-500/20 hover:shadow-indigo-500/30 transition-all duration-300 text-center cursor-pointer"
              >
                Get In Touch
              </a>
              <a
                href="/Shabaz latest resume.pdf"
                download="Shabaz_Shaik_Resume.pdf"
                className="inline-flex items-center justify-center space-x-2 px-8 py-3 rounded-full font-medium glass-card hover:bg-slate-100 dark:hover:bg-slate-800 transition-all duration-300 cursor-pointer"
              >
                <span>Download CV</span>
                <FaDownload size={14} />
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring", stiffness: 80, delay: 0.3 }}
            className="md:col-span-5 flex justify-center md:justify-start md:pl-20 md:-mt-20 items-center"
          >
            <div className="relative group">
              {/* Outer decorative ring */}
              <div className="absolute -inset-0.5 rounded-full bg-gradient-to-r from-indigo-500 via-purple-600 to-indigo-500 opacity-60 blur-md group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt" />
              
              {/* Image wrapper */}
              <div className="relative w-64 h-64 md:w-[350px] md:h-[350px] lg:w-[380px] lg:h-[380px] rounded-full overflow-hidden border-4 border-white dark:border-slate-900 shadow-xl bg-slate-100 dark:bg-slate-800">
                <img
                  src="/avatar.png"
                  alt={name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 hidden sm:flex flex-col items-center cursor-pointer"
        onClick={() => {
          const element = document.getElementById("about");
          if (element) {
            window.scrollTo({
              top: element.offsetTop - 80,
              behavior: "smooth"
            });
          }
        }}
      >
        <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-1.5">
          Scroll Down
        </span>
        <FaChevronDown className="text-indigo-500 dark:text-indigo-400 animate-bounce" size={16} />
      </motion.div>
    </section>
  );
}
