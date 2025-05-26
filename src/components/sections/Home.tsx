import React from 'react';
import { BookOpenIcon, ShieldIcon } from 'lucide-react';
export function Home() {
  return <section id="home" className="w-full min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-blue-50 pt-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="flex justify-center mb-8">
          <div className="relative">
            <div className="absolute inset-0 bg-blue-900 rounded-full blur-xl opacity-20 animate-pulse"></div>
            <div className="relative bg-white p-6 rounded-full shadow-lg">
              <ShieldIcon className="h-16 w-16 text-blue-900" />
            </div>
          </div>
        </div>
        <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
          Assessing CNN Robustness in Medical Imaging Systems:
          <span className="text-blue-900 block mt-2">
            Adversarial Threats and Defensive Measures
          </span>
        </h1>
        <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-4xl mx-auto leading-relaxed">
          This research focuses on enhancing the security of medical imaging
          systems like chest X-rays by evaluating the vulnerabilities of CNNs,
          specifically ResNet, to various adversarial attacks (e.g., USMM, PGN,
          STM, SIA). We aim to implement, evaluate, and defend against such
          attacks to ensure reliable diagnostics.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button onClick={() => document.getElementById('domain')?.scrollIntoView({
          behavior: 'smooth'
        })} className="px-8 py-3 bg-blue-900 text-white rounded-lg hover:bg-blue-800 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 shadow-lg">
            <BookOpenIcon className="h-5 w-5" />
            Explore Research
          </button>
          <button onClick={() => document.getElementById('documents')?.scrollIntoView({
          behavior: 'smooth'
        })} className="px-8 py-3 border-2 border-blue-900 text-blue-900 rounded-lg hover:bg-blue-900 hover:text-white transition-all duration-300 transform hover:scale-105 shadow-lg">
            View Documents
          </button>
        </div>
      </div>
    </section>;
}