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

  return <div className="w-full min-h-screen bg-gray-50">
      <Navbar activeSection={activeSection} />
      <main className="w-full">
        <Home />
        <ProjectScope />
        <ResearchProblem />
        <Objectives />
        <Methodology />
        <Technologies />
        <Milestones />
        <Documents />
        <Slides />
        <AboutUs />
        <Contact />
      </main>
      <footer className="bg-blue-900 text-white py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm">
            © 2025 DefXNet Solutions Team. All rights reserved. |
            SLIIT
          </p>
        </div>
      </footer>
    </div>;
}