import React from 'react';
import { FileTextIcon, DownloadIcon, ExternalLinkIcon, BookIcon, ClipboardListIcon } from 'lucide-react';

export function Documents() {
  const documents = [
    {
      title: 'Topic Assessment Form',
      filename: 'TAF_24-25J-079.pdf',
      description:
        'Initial project scope, CNN robustness objectives, and research stakeholder information',
      type: 'PDF',
      lastModified: 'July 2024',
      status: 'available'
    },
    {
      title: 'Project Proposal Report (Premakanthan)',
      filename: 'IT21197550_PR.pdf',
      description:
        'Investigates STM-based adversarial threats on CNNs and validates model defenses using X-ray datasets.',
      type: 'PDF',
      lastModified: 'October 2024',
      status: 'available'
    },
    {
      title: 'Project Proposal Report (Wijesuriya)',
      filename: 'IT21155802_PR.pdf',
      description:
        'Evaluates CNN robustness in chest X-rays against PGN attacks and explores defensive strategies.',
      type: 'PDF',
      lastModified: 'October 2024',
      status: 'available'
    },
    {
      title: 'Project Proposal Report (Sandamal)',
      filename: 'IT21166860_PR.pdf',
      description:
        'Focuses on defending CNN models from SIA attacks using data augmentation and adversarial training.',
      type: 'PDF',
      lastModified: 'October 2024',
      status: 'available'
    },
    {
      title: 'Project Proposal Report (Dilsara)',
      filename: 'IT21182600_PR.pdf',
      description:
        'Assesses CNN vulnerability to USMM attacks in medical imaging and tests multiple defense techniques.',
      type: 'PDF',
      lastModified: 'October 2024',
      status: 'available'
    },
    {
      title: 'Final Report (Premakanthan)',
      filename: 'IT21197550_Final Report.pdf',
      description:
        'Investigates STM adversarial threats on ResNet50 and evaluates CNN defenses in chest X-ray classification.',
      type: 'PDF',
      lastModified: 'April 2025',
      status: 'available'
    },
    {
      title: 'Final Report (Wijesuriya)',
      filename: 'IT21155802_Final Report.pdf',
      description:
        'Analyzes CNN vulnerability to PGN attacks and implements defensive measures for medical imaging security.',
      type: 'PDF',
      lastModified: 'April 2025',
      status: 'available'
    },
    {
      title: 'Final Report (Sandamal)',
      filename: 'IT21166860 - Final Report.pdf',
      description:
        'Analyzes DenseNet121 vulnerability to SIA attacks with JPEG and TVM defenses in medical imaging.',
      type: 'PDF',
      lastModified: 'April 2025',
      status: 'available'
    },
    {
      title: 'Final Report (Dilsara)',
      filename: 'IT21182600_Final Report.pdf',
      description:
        'Evaluates USMM attack effectiveness and implements multi-layer defense strategies for medical CNNs.',
      type: 'PDF',
      lastModified: 'April 2025',
      status: 'available'
    },
    {
      title: 'Final Group Report',
      filename: '24-25J-079_Final_Report.pdf',
      description:
        'Evaluates CNN robustness against four adversarial attacks and defenses for secure medical image classification.',
      type: 'PDF',
      lastModified: 'May 2025',
      status: 'available'
    },
    {
      title: 'Research Paper',
      description:
        'Comprehensive research paper detailing our findings on CNN robustness against adversarial attacks in medical imaging.',
      type: 'PDF',
      lastModified: 'May 2025',
      status: 'upcoming',
      icon: BookIcon
    },
    {
      title: 'Log Book',
      description:
        'Detailed documentation of research progress, experiments, and findings throughout the project duration.',
      type: 'PDF',
      lastModified: 'May 2025',
      status: 'upcoming',
      icon: ClipboardListIcon
    }
  ];

  return (
    <section id="documents" className="w-full py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Project Documents
          </h2>
          <p className="text-xl text-gray-600">
            Access all research documentation, reports, and deliverables related
            to CNN robustness studies
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {documents.map((doc, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-lg p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-transparent hover:border-blue-100"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="bg-blue-900 p-3 rounded-lg">
                  {doc.icon ? <doc.icon className="h-6 w-6 text-white" /> : <FileTextIcon className="h-6 w-6 text-white" />}
                </div>
                <span className={`text-xs font-medium px-2 py-1 rounded ${
                  doc.status === 'upcoming' 
                    ? 'bg-yellow-100 text-yellow-800' 
                    : 'bg-gray-200 text-gray-500'
                }`}>
                  {doc.type}
                </span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {doc.title}
              </h3>
              <p className="text-gray-600 text-sm mb-4">{doc.description}</p>
              <div className="text-xs text-gray-500 mb-4">
                <div>
                  {doc.status === 'upcoming' ? (
                    <span className="text-yellow-600 font-medium">Upcoming</span>
                  ) : (
                    `Modified: ${doc.lastModified}`
                  )}
                </div>
              </div>
              <div className="flex gap-2">
                {doc.status === 'available' ? (
                  <>
                    <a
                      href={`/documents/${doc.filename}`}
                      download
                      className="flex items-center gap-1 px-3 py-2 bg-blue-900 text-white text-sm rounded hover:bg-blue-800 transition-all duration-200 transform hover:scale-105"
                    >
                      <DownloadIcon className="h-4 w-4" />
                      Download
                    </a>
                    <a
                      href={`/documents/${doc.filename}`}
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