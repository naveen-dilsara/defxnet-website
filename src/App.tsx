import React, { useEffect, useState } from 'react';
import { Navbar } from './components/Navbar';
import { Home } from './components/sections/Home';
import { Domain } from './components/sections/Domain';
import { Milestones } from './components/sections/Milestones';
import { Documents } from './components/sections/Documents';
import { Slides } from './components/sections/Slides';
import { AboutUs } from './components/sections/AboutUs';
import { Contact } from './components/sections/Contact';
export function App() {
  const [activeSection, setActiveSection] = useState('home');
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'domain', 'milestones', 'documents', 'slides', 'about', 'contact'];
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
        <Domain />
        <Milestones />
        <Documents />
        <Slides />
        <AboutUs />
        <Contact />
      </main>
      <footer className="bg-blue-900 text-white py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm">
            © 2024 CNN Robustness Research Team. All rights reserved. |
            University of Colombo School of Computing
          </p>
        </div>
      </footer>
    </div>;
}