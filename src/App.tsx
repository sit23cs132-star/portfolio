import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Certifications from "./components/Certifications";
import Achievements from "./components/Achievements";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

// Premium Expanded Components
import Metrics from "./components/Metrics";
import Philosophy from "./components/Philosophy";
import EngineeringProcess from "./components/EngineeringProcess";
import LearningTimeline from "./components/LearningTimeline";
import Blog from "./components/Blog";
import AIAssistant from "./components/AIAssistant";

function App() {
  return (
    <div className="min-h-screen w-full flex flex-col bg-slate-50 dark:bg-slate-950 text-slate-950 dark:text-slate-50 selection:bg-indigo-500 selection:text-white transition-colors duration-300">
      {/* Sticky Navigation */}
      <Navbar />

      {/* Main Sections */}
      <main className="flex-grow">
        <Hero />
        <About />
        
        {/* Core telemetry counters */}
        <Metrics />
        
        <Skills />
        
        {/* Software Architecture & Design Principles */}
        <Philosophy />
        <EngineeringProcess />
        
        <Experience />
        
        {/* Chronological continuous training timeline */}
        <LearningTimeline />
        
        <Projects />
        
        {/* Writing notes */}
        <Blog />
        
        <Education />
        <Certifications />
        <Achievements />
        <Contact />
      </main>

      {/* Floating chatbot assistant */}
      <AIAssistant />

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
