import React from 'react';
interface NavbarProps {
  activeSection: string;
}
export function Navbar({
  activeSection
}: NavbarProps) {
  const navItems = [{
    id: 'home',
    label: 'Home'
  }, {
    id: 'domain',
    label: 'Domain'
  }, {
    id: 'milestones',
    label: 'Milestones'
  }, {
    id: 'documents',
    label: 'Documents'
  }, {
    id: 'slides',
    label: 'Slides'
  }, {
    id: 'about',
    label: 'About Us'
  }, {
    id: 'contact',
    label: 'Contact'
  }];
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  return <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <h1 className="text-xl font-bold text-blue-900">
              CNN Robustness Research
            </h1>
          </div>
          <div className="hidden md:block">
            <div className="flex space-x-8">
              {navItems.map(item => <button key={item.id} onClick={() => scrollToSection(item.id)} className={`px-3 py-2 text-sm font-medium transition-all duration-200 transform hover:scale-105 ${activeSection === item.id ? 'text-blue-900 border-b-2 border-blue-900' : 'text-gray-700 hover:text-blue-900'}`}>
                  {item.label}
                </button>)}
            </div>
          </div>
          <div className="md:hidden">
            <button className="text-gray-700 hover:text-blue-900 transition-colors">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>;
}