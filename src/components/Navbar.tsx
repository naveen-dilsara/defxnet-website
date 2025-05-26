// src/components/Navbar.tsx
import React, { useState } from 'react'
import { MenuIcon, XIcon, ChevronDownIcon } from 'lucide-react' // Added ChevronDownIcon

interface NavbarProps {
  activeSection: string
}

export function Navbar({ activeSection }: NavbarProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)

  const navItems = [
    { id: 'home', label: 'Home' },
    {
      id: 'research',
      label: 'Research Domain',
      children: [
        { id: 'scope', label: 'Project Scope' },
        { id: 'research', label: 'Research Problem & Solution' },
        { id: 'objectives', label: 'Research Objectives' },
        { id: 'methodology', label: 'Methodology' },
        { id: 'technologies', label: 'Tools and Technologies' },
      ],
    },
    { id: 'milestones', label: 'Milestones' },
    { id: 'documents', label: 'Documents' },
    { id: 'slides', label: 'Slides' },
    { id: 'about', label: 'About Us' },
    { id: 'contact', label: 'Contact' },
  ]

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMobileMenuOpen(false)
    setIsDropdownOpen(false)
  }

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            {/* Optional: Add a logo or link to home here */}
            <button onClick={() => scrollToSection('home')} className="text-xl font-bold text-blue-900 hover:text-blue-800 transition-colors">
              CNN Robustness Research
            </button>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="flex space-x-1 lg:space-x-4"> {/* Adjusted spacing for more items */}
              {navItems.map((item) => (
                <div key={item.id} className="relative">
                  {item.children ? (
                    <div>
                      <button
                        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                        className={`px-3 py-2 text-sm font-medium transition-all duration-200 transform hover:scale-105 inline-flex items-center ${
                          activeSection === item.id
                            ? 'text-blue-900 border-b-2 border-blue-900'
                            : 'text-gray-700 hover:text-blue-900'
                        }`}
                      >
                        {item.label}
                        <ChevronDownIcon className="ml-1 h-4 w-4" />
                      </button>
                      {isDropdownOpen && (
                        <div className="absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                          <div className="py-1" role="menu">
                            {item.children.map((child) => (
                              <button
                                key={child.id}
                                onClick={() => scrollToSection(child.id)}
                                className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-blue-900"
                                role="menuitem"
                              >
                                {child.label}
                              </button>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  ) : (
                    <button
                      onClick={() => scrollToSection(item.id)}
                      className={`px-3 py-2 text-sm font-medium transition-all duration-200 transform hover:scale-105 ${
                        activeSection === item.id
                          ? 'text-blue-900 border-b-2 border-blue-900'
                          : 'text-gray-700 hover:text-blue-900'
                      }`}
                    >
                      {item.label}
                    </button>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-700 hover:text-blue-900 transition-colors p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-900"
              aria-controls="mobile-menu"
              aria-expanded={isMobileMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              {isMobileMenuOpen ? (
                <XIcon className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <MenuIcon className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu, show/hide based on menu state. */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item) =>
              item.children ? (
                <div key={item.id} className="space-y-1">
                  <div className="px-3 py-2 text-sm font-medium text-gray-900 border-b border-gray-200">
                    {item.label}
                  </div>
                  {item.children.map((child) => (
                    <button
                      key={child.id}
                      onClick={() => scrollToSection(child.id)}
                      className="block w-full text-left pl-6 pr-3 py-2 text-sm font-medium text-gray-600 hover:text-blue-900 hover:bg-gray-50"
                    >
                      {child.label}
                    </button>
                  ))}
                </div>
              ) : (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium ${
                    activeSection === item.id
                      ? 'bg-blue-50 text-blue-900'
                      : 'text-gray-700 hover:bg-gray-50 hover:text-blue-900'
                  }`}
                >
                  {item.label}
                </button>
              )
            )}
          </div>
        </div>
      )}
    </nav>
  )
}