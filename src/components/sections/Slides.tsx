import React from 'react';
import { FileIcon, DownloadIcon, ExternalLinkIcon, PresentationIcon } from 'lucide-react';

export function Slides() {
  const presentations = [
    {
      title: 'Proposal Presentation',
      filename: 'Proposal Presentation.pptx',
      description: 'Initial project proposal presentation outlining research objectives, methodology and expected outcomes.',
      date: 'August 06, 2024',
      status: 'available'
    },
    {
      title: 'Progress Presentation 1',
      filename: '24-25J-079_PP1.pptx',
      description: 'First progress review highlighting initial findings, challenges, and preliminary results.',
      date: 'December 04, 2024',
      status: 'available'
    },
    {
      title: 'Progress Presentation 2',
      filename: '24-25J-079_PP2.pptx',
      description: 'Second progress review showcasing advanced implementation and detailed analysis of results.',
      date: 'March 19, 2025',
      status: 'available'
    },
    {
      title: 'Final Viva Presentation',
      description: 'Final research presentation demonstrating complete findings, conclusions and future work.',
      date: 'May 27, 2025',
      status: 'upcoming'
    }
  ];

  return (
    <section id="slides" className="w-full py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Presentation Slides
          </h2>
          <p className="text-xl text-gray-600">
            Access our research presentation slides showcasing project progress and findings
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {presentations.map((presentation, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-transparent hover:border-blue-100"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="bg-red-600 p-3 rounded-lg">
                  <PresentationIcon className="h-6 w-6 text-white" />
                </div>
                <span className={`text-xs font-medium px-2 py-1 rounded ${
                  presentation.status === 'upcoming' 
                    ? 'bg-yellow-100 text-yellow-800' 
                    : 'bg-gray-200 text-gray-500'
                }`}>
                  PPT
                </span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {presentation.title}
              </h3>
              <p className="text-gray-600 text-sm mb-4">{presentation.description}</p>
              <div className="text-xs text-gray-500 mb-4">
                <div>
                  {presentation.status === 'upcoming' ? (
                    <span className="text-yellow-600 font-medium">Upcoming: {presentation.date}</span>
                  ) : (
                    `Scheduled: ${presentation.date}`
                  )}
                </div>
              </div>
              <div className="flex gap-2">
                {presentation.status === 'available' ? (
                  <>
                    <a
                      href={`/slides/${presentation.filename}`}
                      download
                      className="flex items-center gap-1 px-3 py-2 bg-red-600 text-white text-sm rounded hover:bg-red-700 transition-all duration-200 transform hover:scale-105"
                    >
                      <DownloadIcon className="h-4 w-4" />
                      Download
                    </a>
                    <a
                      href={`/slides/${presentation.filename}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 px-3 py-2 border border-gray-300 text-gray-700 text-sm rounded hover:bg-gray-50 transition-colors"
                    >
                      <ExternalLinkIcon className="h-4 w-4" />
                      View
                    </a>
                  </>
                ) : (
                  <>
                    <button
                      disabled
                      className="flex items-center gap-1 px-3 py-2 bg-gray-300 text-gray-500 text-sm rounded cursor-not-allowed"
                    >
                      <DownloadIcon className="h-4 w-4" />
                      Download
                    </button>
                    <button
                      disabled
                      className="flex items-center gap-1 px-3 py-2 border border-gray-300 text-gray-400 text-sm rounded cursor-not-allowed"
                    >
                      <ExternalLinkIcon className="h-4 w-4" />
                      View
                    </button>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}