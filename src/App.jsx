import { useState } from 'react';
import { FaCode } from 'react-icons/fa';
import Header from './components/Header/Header';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Experience from './components/Experience/Experience';
import Resume from './components/Resume/Resume';
import Contact from './components/Contact/Contact';
import { ThemeProvider, useTheme } from './context/ThemeContext';
import './App.css';

const AppContent = () => {
  const [activeSection, setActiveSection] = useState('home');
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="app">
      <Header 
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />
      <main>
        <section id="home" className="section hero">
          <div className="container">
            <div className="hero-content">
              <h1>Sohan Singh Bisht</h1>
              <p className="tagline">
                <span className="highlight">Software Developer</span> | <span className="highlight">AI Engineer</span>
              </p>
              <p className="intro">
                I build exceptional digital experiences with modern technologies and AI solutions.
              </p>
              <div className="cta-buttons">
                <a href="#projects" className="btn btn-primary">
                  View My Work
                </a>
                <a href="#contact" className="btn btn-outline">
                  Contact Me
                </a>
              </div>
            </div>
            <div className="hero-image">
              <div className="hero-icon">
                <FaCode className="code-icon" />
              </div>
            </div>
            <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle theme">
              {theme === 'light' ? '🌙' : '☀️'}
            </button>
          </div>
        </section>
        
        <About id="about" />
        <Projects id="projects" />
        <Experience id="experience" />
        <Resume id="resume" />
        <Contact id="contact" />
      </main>
      
      <footer className="footer">
        <div className="container">
          <p> {new Date().getFullYear()} Sohan Singh Bisht. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;
