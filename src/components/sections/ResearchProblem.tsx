// src/components/sections/ResearchProblem.tsx
import React from 'react'
import { AlertTriangleIcon, ShieldCheckIcon } from 'lucide-react'

export function ResearchProblem() {
  return (
    <section id="research" className="py-20 bg-gray-50"> {/* Note: This section ID is "research" */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            ⚠️ Research Problem & Solution
          </h2>
        </div>
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Problem Statement */}
          <div className="bg-white rounded-lg p-8 shadow-lg">
            <div className="flex items-center mb-6">
              <AlertTriangleIcon className="h-8 w-8 text-red-600 mr-3" />
              <h3 className="text-2xl font-bold text-gray-900">
                Problem Statement
              </h3>
            </div>
            <p className="text-lg text-gray-700 leading-relaxed">
              CNNs in medical imaging are vulnerable to adversarial attacks,
              which can cause dangerous misclassifications, threatening patient
              safety and undermining trust in AI-driven healthcare diagnostics.
            </p>
            <div className="mt-6 p-4 bg-red-50 rounded-lg">
              <p className="text-red-800 font-medium">
                Critical Impact: Misdiagnosis due to adversarial attacks could
                lead to incorrect treatment decisions and patient harm.
              </p>
            </div>
          </div>
          {/* Proposed Solution */}
          <div className="bg-white rounded-lg p-8 shadow-lg">
            <div className="flex items-center mb-6">
              <ShieldCheckIcon className="h-8 w-8 text-green-600 mr-3" />
              <h3 className="text-2xl font-bold text-gray-900">
                Proposed Solution
              </h3>
            </div>
            <div className="space-y-4">
              <p className="text-lg text-gray-700 leading-relaxed">
                Implement four types of attacks against ResNet CNN models and
                test two defense strategies:
              </p>
              <div className="grid grid-cols-2 gap-4 my-6">
                <div className="bg-red-100 p-4 rounded-lg">
                  <h4 className="font-semibold text-red-800 mb-2">
                    Attack Methods
                  </h4>
                  <ul className="text-sm text-red-700 space-y-1">
                    <li>• PGN (Projected Gradient)</li>
                    <li>• SIA (Square Attack)</li>
                    <li>• USMM (Novel Method)</li>
                    <li>• STM (Style Transfer)</li>
                  </ul>
                </div>
                <div className="bg-green-100 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-800 mb-2">
                    Defense Strategies
                  </h4>
                  <ul className="text-sm text-green-700 space-y-1">
                    <li>• Adversarial Training</li>
                    <li>• Data Augmentation</li>
                    <li>• Robustness Testing</li>
                    <li>• Performance Evaluation</li>
                  </ul>
                </div>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg">
                <p className="text-blue-800 font-medium">
                  Evaluation Metrics: Accuracy, Precision, Recall, F1-Score
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}