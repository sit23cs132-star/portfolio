import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub, FaPaperPlane, FaCheckCircle } from "react-icons/fa";
import { resumeData } from "../data/resumeData";

// Enter your free Web3Forms Access Key below to receive emails.
// You can get a free key instantly by visiting: https://web3forms.com
const WEB3FORMS_ACCESS_KEY: string = "6ec09839-c8f8-41f2-9e4d-1917a7e821be";

export default function Contact() {
  const { social } = resumeData.personalInfo;

  const [formState, setFormState] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Basic validation
    if (!formState.name || !formState.email || !formState.message) {
      setErrorMsg("Please fill out all required fields.");
      setStatus("error");
      return;
    }

    if (WEB3FORMS_ACCESS_KEY === "YOUR_WEB3FORMS_ACCESS_KEY") {
      setErrorMsg("Form integration is ready! To start receiving emails, request a free key from https://web3forms.com and add it to WEB3FORMS_ACCESS_KEY in src/components/Contact.tsx.");
      setStatus("error");
      return;
    }

    setStatus("sending");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          name: formState.name,
          email: formState.email,
          subject: formState.subject || "New Portfolio Contact Submission",
          message: formState.message,
          from_name: `${formState.name} (Portfolio Inquiry)`
        })
      });

      const data = await response.json();
      if (data.success) {
        setStatus("success");
        setFormState({ name: "", email: "", subject: "", message: "" });
        setErrorMsg("");

        setTimeout(() => {
          setStatus("idle");
        }, 5000);
      } else {
        setErrorMsg(data.message || "Failed to send message. Please try again.");
        setStatus("error");
      }
    } catch (err) {
      setErrorMsg("Failed to connect to the server. Please check your internet connection.");
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="py-20">
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
            Get In Touch
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-slate-500 dark:text-slate-400 mt-2"
          >
            Feel free to contact me for internship opportunities, project collaborations, or tech talks.
          </motion.p>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="h-1 bg-indigo-600 dark:bg-indigo-400 mx-auto mt-4 rounded-full"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-6xl mx-auto items-stretch">
          {/* Contact Details Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 flex flex-col justify-between space-y-8 text-left"
          >
            <div className="glass-card p-8 rounded-2xl shadow-sm space-y-6 flex-1 flex flex-col justify-center">
              <h3 className="text-xl font-bold font-display text-slate-900 dark:text-white mb-2">
                Contact Information
              </h3>
              <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed mb-6 font-normal">
                Have a question or want to work together? Drop me a line or connect through my social handles.
              </p>

              {/* Direct Info */}
              <div className="space-y-4">
                <a
                  href={`mailto:${social.email}`}
                  className="flex items-center space-x-4 p-3 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors group cursor-pointer"
                >
                  <div className="w-10 h-10 rounded-lg bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 flex items-center justify-center group-hover:scale-105 transition-transform">
                    <FaEnvelope size={18} />
                  </div>
                  <div>
                    <span className="block text-xs font-semibold text-slate-400 uppercase tracking-wider">Email</span>
                    <span className="text-sm font-semibold text-slate-800 dark:text-slate-200">{social.email}</span>
                  </div>
                </a>

                <a
                  href={`tel:${social.phone.replace(/\s+/g, "")}`}
                  className="flex items-center space-x-4 p-3 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors group cursor-pointer"
                >
                  <div className="w-10 h-10 rounded-lg bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 flex items-center justify-center group-hover:scale-105 transition-transform">
                    <FaPhone size={18} />
                  </div>
                  <div>
                    <span className="block text-xs font-semibold text-slate-400 uppercase tracking-wider">Phone</span>
                    <span className="text-sm font-semibold text-slate-800 dark:text-slate-200">{social.phone}</span>
                  </div>
                </a>

                <div className="flex items-center space-x-4 p-3 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors group">
                  <div className="w-10 h-10 rounded-lg bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 flex items-center justify-center group-hover:scale-105 transition-transform">
                    <FaMapMarkerAlt size={18} />
                  </div>
                  <div>
                    <span className="block text-xs font-semibold text-slate-400 uppercase tracking-wider">Location</span>
                    <span className="text-sm font-semibold text-slate-800 dark:text-slate-200">{social.location}</span>
                  </div>
                </div>
              </div>

              {/* Social Channels */}
              <div className="flex space-x-4 pt-6 border-t border-slate-200/50 dark:border-slate-800/50">
                <a
                  href={social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-indigo-500 hover:text-white dark:hover:bg-indigo-500 text-slate-600 dark:text-slate-300 transition-all cursor-pointer"
                  title="GitHub"
                >
                  <FaGithub size={18} />
                </a>
                <a
                  href={social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-indigo-500 hover:text-white dark:hover:bg-indigo-500 text-slate-600 dark:text-slate-300 transition-all cursor-pointer"
                  title="LinkedIn"
                >
                  <FaLinkedin size={18} />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Form Column */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 flex"
          >
            <div className="glass-card p-8 rounded-2xl shadow-sm text-left w-full flex flex-col justify-between">
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label htmlFor="name" className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wide">
                      Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formState.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      className="w-full px-4 py-2.5 rounded-lg border border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-slate-900/50 text-slate-850 dark:text-slate-200 placeholder-slate-400 dark:placeholder-slate-500 focus:border-indigo-500 focus:bg-white dark:focus:bg-slate-900 outline-none transition-all text-sm font-medium"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label htmlFor="email" className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wide">
                      Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formState.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      className="w-full px-4 py-2.5 rounded-lg border border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-slate-900/50 text-slate-850 dark:text-slate-200 placeholder-slate-400 dark:placeholder-slate-500 focus:border-indigo-500 focus:bg-white dark:focus:bg-slate-900 outline-none transition-all text-sm font-medium"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="subject" className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wide">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formState.subject}
                    onChange={handleChange}
                    placeholder="Project Inquiry / Job Opening"
                    className="w-full px-4 py-2.5 rounded-lg border border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-slate-900/50 text-slate-850 dark:text-slate-200 placeholder-slate-400 dark:placeholder-slate-500 focus:border-indigo-500 focus:bg-white dark:focus:bg-slate-900 outline-none transition-all text-sm font-medium"
                  />
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="message" className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wide">
                    Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    value={formState.message}
                    onChange={handleChange}
                    placeholder="Hi Shabaz, I would love to connect about..."
                    className="w-full px-4 py-2.5 rounded-lg border border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-slate-900/50 text-slate-850 dark:text-slate-200 placeholder-slate-400 dark:placeholder-slate-500 focus:border-indigo-500 focus:bg-white dark:focus:bg-slate-900 outline-none transition-all text-sm font-medium resize-none"
                  />
                </div>

                {/* Error Banner */}
                {status === "error" && (
                  <div className="p-3 text-xs bg-red-500/10 border border-red-500/20 text-red-600 dark:text-red-400 rounded-lg font-semibold">
                    {errorMsg}
                  </div>
                )}

                {/* Submit button & Success banners */}
                <div className="flex items-center justify-between pt-2">
                  <button
                    type="submit"
                    disabled={status === "sending" || status === "success"}
                    className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 disabled:from-slate-400 disabled:to-slate-400 text-white font-semibold rounded-lg text-sm transition-all shadow-md shadow-indigo-500/10 cursor-pointer"
                  >
                    <span>{status === "sending" ? "Sending..." : "Send Message"}</span>
                    <FaPaperPlane size={12} className="group-hover:translate-x-1 transition-transform" />
                  </button>

                  <AnimatePresence>
                    {status === "success" && (
                      <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0 }}
                        className="inline-flex items-center space-x-1.5 text-green-600 dark:text-green-400 font-semibold text-xs"
                      >
                        <FaCheckCircle size={14} />
                        <span>Message Sent Successfully!</span>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
