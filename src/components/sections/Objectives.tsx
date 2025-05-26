import React from 'react'
import { CheckCircleIcon } from 'lucide-react'

export function Objectives() {
  const objectives = [
    'Evaluate robustness of ResNet CNN on chest X-rays',
    'Implement PGN, SIA, STM, USMM attacks',
    'Develop adversarial defense mechanisms',
    'Assess model performance on clean and perturbed datasets',
    'Strengthen CNN reliability for clinical environments',
  ]

  return (
    <section id="objectives" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            🎯 Research Objectives
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our comprehensive approach to securing medical AI systems
          </p>
        </div>
        <div className="max-w-4xl mx-auto">
          <div className="space-y-6">
            {objectives.map((objective, index) => (
              <div
                key={index}
                className="flex items-start space-x-4 p-6 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors"
              >
                <CheckCircleIcon className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
                <div>
                  <p className="text-lg text-gray-800 font-medium">
                    {objective}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-12 bg-blue-600 text-white rounded-lg p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">Expected Outcomes</h3>
            <p className="text-lg leading-relaxed">
              Enhanced security and reliability of CNN-based medical imaging
              systems, contributing to safer AI-driven healthcare diagnostics
              and improved patient outcomes.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
} 