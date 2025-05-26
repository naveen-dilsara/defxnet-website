import React from 'react';
import { BookOpenIcon, TargetIcon } from 'lucide-react'; // TargetIcon for focus

export function Home() {
  return (
    <section
      id="home"
      className="w-full min-h-screen flex flex-col items-center justify-center bg-white text-gray-800 pt-24 pb-12 px-4" // Clean white bg, more padding
    >
      <div className="max-w-3xl mx-auto text-center"> {/* Reduced max-w for tighter focus */}
        <div className="mb-10">
          <TargetIcon className="h-24 w-24 text-blue-900 mx-auto" /> {/* Larger, focused icon */}
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight"> {/* Even larger title */}
          CNN Robustness:
          <br className="hidden md:block" /> {/* Line break on larger screens */}
          <span className="text-blue-900">Medical Imaging Security</span>
        </h1>

        <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
          Exploring adversarial threats and pioneering defensive measures to ensure reliable diagnostics in AI-driven healthcare.
        </p>

        <div className="flex flex-col sm:flex-row gap-5 justify-center">
          <button
            onClick={() =>
              document.getElementById('domain')?.scrollIntoView({
                behavior: 'smooth',
              })
            }
            className="px-8 py-3 bg-blue-900 text-white rounded-full hover:bg-blue-800 transition-colors duration-300 transform hover:scale-105 flex items-center justify-center gap-2 shadow-md text-md font-medium" // Rounded-full buttons
          >
            <BookOpenIcon className="h-5 w-5" />
            Explore Research
          </button>
          <button
            onClick={() =>
              document.getElementById('documents')?.scrollIntoView({
                behavior: 'smooth',
              })
            }
            className="px-8 py-3 border-2 border-blue-900 text-blue-900 rounded-full hover:bg-blue-900 hover:text-white transition-colors duration-300 transform hover:scale-105 shadow-md text-md font-medium" // Rounded-full buttons
          >
            View Documents
          </button>
        </div>
      </div>
    </section>
  );
}