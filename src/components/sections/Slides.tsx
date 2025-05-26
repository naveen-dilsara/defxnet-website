import React from 'react';
import { DownloadIcon, EyeIcon } from 'lucide-react';
export function Slides() {
  const presentations = [{
    title: 'Proposal Presentation',
    description: 'Initial project pitch on CNN robustness in medical imaging with adversarial attack methodology overview',
    date: 'March 2024',
    slides: 25,
    duration: '20 min'
  }, {
    title: 'PP1 Slides - Attack Implementation',
    description: 'First progress presentation covering USMM and PGN attack implementations with preliminary results',
    date: 'May 2024',
    slides: 32,
    duration: '25 min'
  }, {
    title: 'PP2 Slides - Defense Mechanisms',
    description: 'Second progress presentation on STM, SIA attacks and defensive measure development',
    date: 'July 2024',
    slides: 30,
    duration: '25 min'
  }, {
    title: 'Final Viva Slides',
    description: 'Complete project overview with comprehensive results, CNN robustness evaluation, and future work',
    date: 'November 2024',
    slides: 45,
    duration: '35 min'
  }];
  return <section id="slides" className="w-full py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Presentation Slides
          </h2>
          <p className="text-xl text-gray-600">
            View and download presentation slides from key research milestones
            and progress reviews
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {presentations.map((presentation, index) => <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-transparent hover:border-blue-100">
              <div className="flex items-start gap-4">
                <div className="bg-teal-600 p-3 rounded-lg flex-shrink-0">
                  <div className="h-6 w-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {presentation.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {presentation.description}
                  </p>
                  <div className="flex flex-wrap gap-4 text-sm text-gray-500 mb-4">
                    <span>{presentation.date}</span>
                    <span>•</span>
                    <span>{presentation.slides} slides</span>
                    <span>•</span>
                    <span>{presentation.duration}</span>
                  </div>
                  <div className="flex gap-3">
                    <button className="flex items-center gap-2 px-4 py-2 bg-teal-600 text-white text-sm rounded-lg hover:bg-teal-700 transition-all duration-200 transform hover:scale-105">
                      <EyeIcon className="h-4 w-4" />
                      View Slides
                    </button>
                    <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 text-gray-700 text-sm rounded-lg hover:bg-gray-50 transition-colors">
                      <DownloadIcon className="h-4 w-4" />
                      Download
                    </button>
                  </div>
                </div>
              </div>
            </div>)}
        </div>
      </div>
    </section>;
}