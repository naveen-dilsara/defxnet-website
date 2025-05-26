import React from 'react';
import { FileTextIcon, DownloadIcon, ExternalLinkIcon } from 'lucide-react';

export function Documents() {
  const documents = [
    {
      title: 'Topic Assessment Form',
      filename: 'TAF_24-25J-079.pdf', // <<< ADDED: actual filename in public/documents/
      description:
        'Initial project scope, CNN robustness objectives, and research stakeholder information',
      type: 'PDF',
      size: '2.4 MB', // You might need to verify/update this
      lastModified: 'Oct 2024',
    },
    {
      title: 'Proposal Document',
      filename: 'proposal_document.pdf', // <<< ADDED
      description:
        'Detailed research proposal on adversarial attacks in medical imaging with methodology and timeline',
      type: 'PDF',
      size: '5.8 MB', // Verify/update
      lastModified: 'March 2024',
    },
    {
      title: 'Final Report',
      filename: 'final_report.pdf', // <<< ADDED
      description:
        'Complete research findings on CNN robustness, adversarial attacks evaluation, and defensive measures',
      type: 'PDF',
      size: '12.3 MB', // Verify/update
      lastModified: 'October 2024',
    },
    {
      title: 'Research Checklists',
      filename: 'research_checklists.pdf', // <<< ADDED
      description:
        'Comprehensive checklists for adversarial attack implementation and evaluation protocols',
      type: 'PDF',
      size: '1.8 MB', // Verify/update
      lastModified: 'September 2024',
    },
    // Add more documents here if needed, following the same structure
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
                  <FileTextIcon className="h-6 w-6 text-white" />
                </div>
                <span className="text-xs font-medium text-gray-500 bg-gray-200 px-2 py-1 rounded">
                  {doc.type}
                </span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {doc.title}
              </h3>
              <p className="text-gray-600 text-sm mb-4">{doc.description}</p>
              <div className="text-xs text-gray-500 mb-4">
                <div>Size: {doc.size}</div>
                <div>Modified: {doc.lastModified}</div>
              </div>
              <div className="flex gap-2">
                {/* MODIFIED: Download button is now an <a> tag */}
                <a
                  href={`/documents/${doc.filename}`} // Path to the document
                  download // This attribute triggers download
                  className="flex items-center gap-1 px-3 py-2 bg-blue-900 text-white text-sm rounded hover:bg-blue-800 transition-all duration-200 transform hover:scale-105"
                >
                  <DownloadIcon className="h-4 w-4" />
                  Download
                </a>
                {/* MODIFIED: View button is now an <a> tag */}
                <a
                  href={`/documents/${doc.filename}`} // Path to the document
                  target="_blank" // Opens in a new tab/window
                  rel="noopener noreferrer" // Security best practice for target="_blank"
                  className="flex items-center gap-1 px-3 py-2 border border-gray-300 text-gray-700 text-sm rounded hover:bg-gray-50 transition-colors"
                >
                  <ExternalLinkIcon className="h-4 w-4" />
                  View
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}