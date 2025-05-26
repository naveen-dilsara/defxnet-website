import React from 'react'

export function Methodology() {
  return (
    <section id="methodology" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            ⚙️ Methodology
          </h2>
        </div>
        <div className="grid md:grid-cols-2 gap-12">
          {/* System Architecture */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              System Architecture
            </h3>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="h-16 w-16 text-blue-900 mx-auto mb-6" />
              <div className="space-y-4 text-center">
                <div className="p-4 bg-blue-50 rounded-lg">
                  Input (Chest X-rays)
                </div>
                <div className="p-4 bg-red-50 rounded-lg">
                  Adversarial Attack Module
                </div>
                <div className="p-4 bg-green-50 rounded-lg">ResNet CNN</div>
                <div className="p-4 bg-yellow-50 rounded-lg">
                  Defense Modules
                </div>
                <div className="p-4 bg-purple-50 rounded-lg">
                  Output (Prediction & Evaluation)
                </div>
              </div>
            </div>
          </div>
          {/* Process Flow */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Process Flow
            </h3>
            <div className="space-y-4">
              {[
                'Dataset selection and preprocessing',
                'Implementing attacks',
                'Fine-tuning CNN model',
                'Applying defenses',
                'Evaluating results with metrics',
              ].map((step, index) => (
                <div
                  key={index}
                  className="flex items-center p-4 bg-white rounded-lg shadow"
                >
                  <div className="w-8 h-8 bg-blue-900 text-white rounded-full flex items-center justify-center mr-4">
                    {index + 1}
                  </div>
                  <p className="text-gray-800 font-medium">{step}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 