import React, { useEffect, useState } from 'react';
import { Navbar } from './components/Navbar';
import { Home } from './components/sections/Home';
import { ProjectScope } from './components/sections/ProjectScope';
import { ResearchProblem } from './components/sections/ResearchProblem';
import { Objectives } from './components/sections/Objectives';
import { Methodology } from './components/sections/Methodology';
import { Technologies } from './components/sections/Technologies';
import { Milestones } from './components/sections/Milestones';
import { Documents } from './components/sections/Documents';
import { Slides } from './components/sections/Slides';
import { AboutUs } from './components/sections/AboutUs';
import { Contact } from './components/sections/Contact';

export function App() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        'home',
        'scope',
        'research',
        'objectives',
        'methodology',
        'technologies',
        'milestones',
        'documents',
        'slides',
        'about',
        'contact'
      ];
      const scrollPosition = window.scrollY + 100;
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const {
            offsetTop,
            offsetHeight
          } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="w-full min-h-screen bg-gradient-mesh">
      <Navbar activeSection={activeSection} />
      <main className="w-full">
        <div className="bg-dot-pattern">
          <Home />
        </div>
        <div className="bg-gradient-section section-transition">
          <ProjectScope />
        </div>
        <div className="bg-gradient-section section-transition">
          <ResearchProblem />
        </div>
        <div className="bg-gradient-section section-transition">
          <Objectives />
        </div>
        <div className="bg-gradient-section section-transition">
          <Methodology />
        </div>
        <div className="bg-gradient-section section-transition">
          <Technologies />
        </div>
        <div className="bg-gradient-section section-transition">
          <Milestones />
        </div>
        <div className="bg-gradient-section section-transition">
          <Documents />
        </div>
        <div className="bg-gradient-section section-transition">
          <Slides />
        </div>
        <div className="bg-gradient-section section-transition">
          <AboutUs />
        </div>
        <div className="bg-gradient-section section-transition">
          <Contact />
        </div>
      </main>
      <footer className="bg-blue-900 text-white py-8 relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <p className="text-sm">
            © 2025 DefXNet Solutions Team. All rights reserved. |
            SLIIT
          </p>
        </div>
        <div className="absolute inset-0 bg-dot-pattern opacity-10"></div>
      </footer>
    </div>
  )
}