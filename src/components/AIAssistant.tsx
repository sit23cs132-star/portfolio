import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaRobot, FaTimes, FaPaperPlane, FaUser } from "react-icons/fa";
import { playUiBlip } from "../utils/audio";

interface Message {
  sender: "bot" | "user";
  text: string;
  isStreaming?: boolean;
}

export default function AIAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { sender: "bot", text: "Hi! I'm Shabaz's AI Portfolio Assistant. Ask me anything about his projects, internships, or skills!" }
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messageEndRef = useRef<HTMLDivElement>(null);

  const suggestions = [
    "Tell me about Shabaz.",
    "Explain his projects.",
    "Which project was most challenging?",
    "What did he learn during internships?",
    "Why should I hire him?"
  ];

  // Auto-scroll chat to bottom
  useEffect(() => {
    messageEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  const handleSend = (text: string) => {
    if (!text.trim()) return;

    // Add user message
    setMessages((prev) => [...prev, { sender: "user", text }]);
    setInput("");
    setIsTyping(true);
    playUiBlip(800, 0.05);

    // Formulate local answer
    setTimeout(() => {
      const response = getLocalResponse(text);
      setIsTyping(false);
      playUiBlip(1000, 0.08);
      
      // Add bot message with streaming state
      setMessages((prev) => [...prev, { sender: "bot", text: response, isStreaming: true }]);
    }, 1000);
  };

  const getLocalResponse = (query: string): string => {
    const q = query.toLowerCase();
    
    if (q.includes("about") || q.includes("who is") || q.includes("introduce")) {
      return `Shabaz Shaik is a Software Engineer and B.E. Computer Science student at Sri Sairam Institute of Technology, Chennai (CGPA: 8.91). He has completed 3 internships and specializes in Python, Django, React, AI/ML, and Cybersecurity. He is motivated to write clean code and build scalable, secure distributed systems.`;
    }
    if (q.includes("project") || q.includes("build") || q.includes("portfolio")) {
      return `Shabaz has built several production-level projects, including:
      1. Quantum Computing Based Security System (93% threat accuracy using lattice-based PQC and NLP).
      2. Dashboard Management System (real-time telemetry console visualizing 10+ system metrics).
      3. AI Honeypot Security System (containerized sandbox detecting intrusion sweeps at 95% accuracy).`;
    }
    if (q.includes("challenge") || q.includes("hardest") || q.includes("difficult")) {
      return `His most challenging project was the Quantum Computing Based Security System. The primary challenge was implementing mathematically complex post-quantum encryption algorithms in Python while keeping the backend handshake latency under 2 seconds. He solved this by leveraging a compiled C-based library bound to Django, meeting latency targets.`;
    }
    if (q.includes("intern") || q.includes("experience") || q.includes("work") || q.includes("job")) {
      return `Shabaz completed 3 internships:
      - Autointelli: Full Stack Developer Intern. Engineered UI components for an automation platform and resolved 40% of UI bugs.
      - CKM Buildbase: Web Development Intern. Rebuilt checkout flows, boosting page speeds by 30% and reducing layout issues by 50%.
      - Edunet Foundation: Python Developer Intern. Trained an ML activity recognition classifier with 91% accuracy, reducing input noise by 35%.`;
    }
    if (q.includes("hire") || q.includes("why should") || q.includes("recruit")) {
      return `You should hire Shabaz because:
      1. Practical experience: He has completed 3 software internships and shipped enterprise-grade widgets.
      2. Solid fundamentals: Strong academic credentials (8.91 B.E. CGPA) and experience with Data Structures, Algorithms, and System Design.
      3. Modern tech stack: Proficient in Python (Django, Flask), JavaScript (React), and containerization (Docker).
      4. Engineering mindset: Focuses on metrics, performance, and security rather than just writing layout code.`;
    }
    if (q.includes("skill") || q.includes("technolog") || q.includes("know") || q.includes("stack")) {
      return `Shabaz is proficient in:
      - Languages: Python, JavaScript, Java, C.
      - Backend: Django, Flask, FastAPI, REST APIs, Node.js, GraphQL.
      - Frontend: React.js, Tailwind CSS, Bootstrap, HTML5/CSS3.
      - AI/ML: scikit-learn, TensorFlow, Pandas, NumPy, NLP.
      - Databases & DevOps: PostgreSQL, MySQL, Docker, Git/GitHub, AWS.`;
    }
    if (q.includes("cryptography") || q.includes("security") || q.includes("quantum") || q.includes("honeypot")) {
      return `Shabaz has a strong focus on cybersecurity. His security projects include a lattice-based post-quantum cryptographic tunnel and an isolated decoy container system (AI Honeypot) built with Docker sandboxes to safely analyze attacker scans.`;
    }
    if (q.includes("aws") || q.includes("cloud")) {
      return `Shabaz holds the AWS Certified Cloud Practitioner credential (2025). He applies cloud concepts (IAM, S3, EC2, VPC) to securely deploy and isolate containerized applications.`;
    }

    return `Thanks for asking! That is a great question. Shabaz is highly proficient in Python, Django, React, Docker, and ML models. Feel free to check out his Projects and Experience sections to learn more, or contact him directly at shabazshaik565@gmail.com!`;
  };

  return (
    <>
      {/* Floating Chat Button */}
      <motion.button
        onClick={() => {
          setIsOpen(!isOpen);
          playUiBlip(isOpen ? 500 : 900, 0.08);
        }}
        className="fixed bottom-6 right-6 z-50 p-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-full shadow-lg hover:shadow-xl focus:outline-none cursor-pointer flex items-center justify-center border border-indigo-500/25"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Toggle AI assistant"
      >
        {isOpen ? <FaTimes size={20} /> : <FaRobot size={20} />}
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.95 }}
            className="fixed bottom-24 right-6 z-50 w-[350px] sm:w-[400px] h-[500px] bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-2xl flex flex-col overflow-hidden text-left"
          >
            {/* Header */}
            <div className="p-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white flex justify-between items-center">
              <div className="flex items-center space-x-2.5">
                <FaRobot size={18} />
                <div>
                  <h3 className="text-sm font-bold leading-tight">AI Portfolio Assistant</h3>
                  <span className="text-[10px] text-indigo-200 font-medium">Shabaz's Digital Double</span>
                </div>
              </div>
              <button
                onClick={() => {
                  setIsOpen(false);
                  playUiBlip(500, 0.08);
                }}
                className="text-white/80 hover:text-white cursor-pointer"
              >
                <FaTimes size={16} />
              </button>
            </div>

            {/* Message Area */}
            <div className="flex-grow p-4 overflow-y-auto space-y-4 bg-slate-50/50 dark:bg-slate-950/20">
              {messages.map((msg, idx) => (
                <div
                  key={idx}
                  className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[80%] rounded-2xl p-3 text-xs leading-relaxed font-normal ${
                      msg.sender === "user"
                        ? "bg-indigo-600 text-white rounded-tr-none"
                        : "bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 rounded-tl-none border border-slate-200/50 dark:border-slate-800/40"
                    }`}
                  >
                    <div className="flex items-center space-x-1.5 mb-1 text-[8px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                      {msg.sender === "user" ? <FaUser size={7} /> : <FaRobot size={7} />}
                      <span>{msg.sender === "user" ? "Recruiter" : "AI Assistant"}</span>
                    </div>
                    <p className="whitespace-pre-line">
                      {msg.isStreaming ? (
                        <StreamingText
                          text={msg.text}
                          onComplete={() => {
                            setMessages((prev) => {
                              const updated = [...prev];
                              if (updated[idx]) {
                                updated[idx] = { ...updated[idx], isStreaming: false };
                              }
                              return updated;
                            });
                          }}
                        />
                      ) : (
                        msg.text
                      )}
                    </p>
                  </div>
                </div>
              ))}

              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-slate-100 dark:bg-slate-800 rounded-2xl rounded-tl-none p-3 border border-slate-250/20 flex space-x-1.5 items-center">
                    <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full animate-bounce [animation-delay:-0.3s]" />
                    <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full animate-bounce [animation-delay:-0.15s]" />
                    <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full animate-bounce" />
                  </div>
                </div>
              )}
              <div ref={messageEndRef} />
            </div>

            {/* Suggestions Panel */}
            {messages.length === 1 && (
              <div className="p-3 bg-slate-50 dark:bg-slate-900 border-t border-slate-200/50 dark:border-slate-800/50">
                <span className="block text-[8px] font-bold text-slate-400 uppercase tracking-wider mb-2">
                  Suggestions:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {suggestions.map((s) => (
                    <button
                      key={s}
                      onClick={() => handleSend(s)}
                      className="px-2.5 py-1 text-[10px] font-semibold text-slate-650 hover:text-indigo-600 dark:text-slate-400 dark:hover:text-indigo-400 bg-white hover:bg-slate-50 dark:bg-slate-900/60 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800 rounded-full transition-colors cursor-pointer"
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Form Input */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSend(input);
              }}
              className="p-3 border-t border-slate-200 dark:border-slate-800 flex items-center space-x-2 bg-white dark:bg-slate-900"
            >
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask me a question..."
                className="flex-grow px-3 py-2 text-xs rounded-xl border border-slate-200 dark:border-slate-850 bg-slate-50/50 dark:bg-slate-950/20 focus:border-indigo-500 focus:bg-white dark:focus:bg-slate-900 outline-none transition-all font-medium text-slate-800 dark:text-slate-100"
              />
              <button
                type="submit"
                className="p-2 bg-indigo-600 hover:bg-indigo-750 text-white rounded-xl transition-colors cursor-pointer"
              >
                <FaPaperPlane size={12} />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

// Text-Streaming Simulation Subcomponent
function StreamingText({ text, onComplete }: { text: string; onComplete: () => void }) {
  const [displayedText, setDisplayedText] = useState("");
  const indexRef = useRef(0);

  useEffect(() => {
    const timer = setInterval(() => {
      if (indexRef.current < text.length) {
        setDisplayedText((prev) => prev + text.charAt(indexRef.current));
        indexRef.current += 1;
      } else {
        clearInterval(timer);
        onComplete();
      }
    }, 15); // Adjust typing speed here

    return () => clearInterval(timer);
  }, [text, onComplete]);

  return <>{displayedText}</>;
}
