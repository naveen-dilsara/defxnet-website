import React from 'react'
import {
  BookOpenIcon,
  ShieldIcon, // Make sure this is imported if used (it is)
  ServerIcon,
  BarChart3Icon,
} from 'lucide-react'

export function ProjectScope() {
  const references = [
    {
      title: 'Finlayson et al. (2019)',
      description: 'ML threats in healthcare',
      journal: 'Nature Medicine',
    },
    {
      title: 'Paschali et al. (2018)',
      description: 'Adversarial examples in imaging',
      journal: 'Medical Image Analysis',
    },
    {
      title: 'Raghu et al. (2019)',
      description: 'Transfer learning in medical imaging',
      journal: 'Nature Communications',
    },
  ]
  const researchGaps = [
    {
      icon: ShieldIcon,
      title: 'Lack of Robust Defense',
      description:
        'Current chest X-ray AI systems lack comprehensive adversarial defense mechanisms',
    },
    {
      icon: BarChart3Icon,
      title: 'Limited Real-world Evaluation',
      description:
        'Insufficient evaluation of adversarial threats in clinical environments',
    },
    {
      icon: ServerIcon,
      title: 'Novel Attack Methods',
      description:
        'USMM and STM attacks are not well studied in healthcare applications',
    },
  ]
  return (
    <section id="scope" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            📌 Project Scope
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Grounded in Medical Imaging, Cyber Security, and Computing
            Infrastructure
          </p>
        </div>
        {/* Overview */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Overview</h3>
          <div className="bg-blue-50 rounded-lg p-8">
            <p className="text-lg text-gray-700 leading-relaxed">
              The project is grounded in <strong>Medical Imaging</strong>,{' '}
              <strong>Cyber Security</strong>, and{' '}
              <strong>Computing Infrastructure</strong>, aiming to secure
              AI-driven diagnostic tools from adversarial threats using
              CNN-based classifiers.
            </p>
          </div>
        </div>
        {/* Literature Survey */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">
            Literature Survey
          </h3>
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {references.map((ref, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow"
              >
                <BookOpenIcon className="h-8 w-8 text-blue-900 mb-4" />
                <h4 className="font-semibold text-gray-900 mb-2">
                  {ref.title}
                </h4>
                <p className="text-gray-600 mb-2">{ref.description}</p>
                <p className="text-sm text-blue-900 font-medium">
                  {ref.journal}
                </p>
              </div>
            ))}
          </div>
          {/* Chart Placeholder */}
          <div className="bg-gray-50 rounded-lg p-8 text-center">
            <BarChart3Icon className="h-16 w-16 text-gray-400 mx-auto mb-4" />
            <p className="text-gray-600">ResNet Performance Analysis Chart</p>
            <p className="text-sm text-gray-500 mt-2">
              Performance metrics under various attack scenarios
            </p>
          </div>
        </div>
        {/* Research Gap */}
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-6">
            Research Gap
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {researchGaps.map((gap, index) => (
              <div key={index} className="text-center">
                <div className="bg-red-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <gap.icon className="h-8 w-8 text-red-600" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">
                  {gap.title}
                </h4>
                <p className="text-gray-600">{gap.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}