import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaTimes, FaCalendarAlt, FaTag } from "react-icons/fa";
import { resumeData } from "../data/resumeData";
import type { BlogArticle } from "../data/resumeData";

export default function Blog() {
  const articles = resumeData.blogArticles;
  const [selectedArticle, setSelectedArticle] = useState<BlogArticle | null>(null);

  return (
    <section id="blog" className="py-20 bg-slate-50/50 dark:bg-slate-900/30 border-t border-slate-200/40 dark:border-slate-800/40">
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
            Technical Blog & Learning Notes
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-slate-500 dark:text-slate-400 mt-2 font-normal"
          >
            A compilation of articles and notes exploring system architecture, clean coding practices, and security studies.
          </motion.p>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="h-1 bg-indigo-600 dark:bg-indigo-400 mx-auto mt-4 rounded-full"
          />
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map((article) => (
            <motion.div
              key={article.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.3 }}
              className="glass-card p-6 rounded-2xl shadow-sm flex flex-col justify-between items-start text-left cursor-pointer group"
              onClick={() => setSelectedArticle(article)}
            >
              <div className="space-y-4 w-full">
                <div className="flex justify-between items-center text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                  <span className="flex items-center space-x-1.5">
                    <FaTag className="text-indigo-500" />
                    <span>{article.category}</span>
                  </span>
                  <span className="flex items-center space-x-1">
                    <FaCalendarAlt />
                    <span>{article.date}</span>
                  </span>
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors leading-snug line-clamp-2">
                  {article.title}
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-450 leading-relaxed line-clamp-3 font-normal">
                  {article.summary}
                </p>
              </div>
              
              <button className="mt-6 text-xs font-bold text-indigo-600 dark:text-indigo-400 group-hover:underline flex items-center space-x-1 cursor-pointer">
                <span>Read Full Article</span>
                <span>&rarr;</span>
              </button>
            </motion.div>
          ))}
        </div>

        {/* Article Reader Modal */}
        <AnimatePresence>
          {selectedArticle !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-55 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md overflow-y-auto"
              onClick={() => setSelectedArticle(null)}
            >
              {/* Modal Box */}
              <motion.div
                initial={{ scale: 0.95, y: 20, opacity: 0 }}
                animate={{ scale: 1, y: 0, opacity: 1 }}
                exit={{ scale: 0.95, y: 20, opacity: 0 }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
                className="bg-white dark:bg-slate-900 w-full max-w-2xl rounded-2xl shadow-xl overflow-hidden border border-slate-200 dark:border-slate-800 text-left my-8"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Header */}
                <div className="p-6 bg-slate-50 dark:bg-slate-900/50 border-b border-slate-200/50 dark:border-slate-800/50 flex justify-between items-start gap-4">
                  <div className="space-y-1.5">
                    <div className="flex items-center space-x-3 text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                      <span className="flex items-center space-x-1">
                        <FaTag className="text-indigo-500" />
                        <span>{selectedArticle.category}</span>
                      </span>
                      <span>•</span>
                      <span>{selectedArticle.date}</span>
                    </div>
                    <h3 className="text-xl font-extrabold text-slate-900 dark:text-white leading-tight">
                      {selectedArticle.title}
                    </h3>
                  </div>
                  <button
                    onClick={() => setSelectedArticle(null)}
                    className="p-1.5 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-500 hover:text-slate-850 dark:text-slate-450 dark:hover:text-white rounded-full transition-colors cursor-pointer"
                    aria-label="Close reader"
                  >
                    <FaTimes size={16} />
                  </button>
                </div>

                {/* Article Body */}
                <div className="p-6 sm:p-8 max-h-[60vh] overflow-y-auto bg-white dark:bg-slate-900">
                  <div className="text-sm text-slate-650 dark:text-slate-350 leading-relaxed font-normal space-y-4 whitespace-pre-line">
                    {selectedArticle.content}
                  </div>
                </div>

                {/* Footer close */}
                <div className="p-4 bg-slate-50 dark:bg-slate-900/50 border-t border-slate-200/50 dark:border-slate-800/50 flex justify-end">
                  <button
                    onClick={() => setSelectedArticle(null)}
                    className="px-4 py-2 text-xs font-semibold bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg transition-colors cursor-pointer"
                  >
                    Close Article
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
