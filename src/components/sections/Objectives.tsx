import React from 'react'
import { Target, Shield, BarChart2, CheckCircle } from 'lucide-react'

interface Objective {
  id: number;
  title: string;
  description: string;
  icon: React.ElementType;
}

export function Objectives() {
  const objectives: Objective[] = [
    {
      id: 1,
      title: 'Investigate Adversarial Attacks',
      description: 'Implement and analyze the impact of various adversarial attacks, including Style Transfer Manipulation (STM), Penalizing Gradient Norm (PGN), Split Image Adversarial (SIA), and Uniform Scale Mix Mask (USMM), on ResNet CNN model used for chest X-ray classification.',
      icon: Target
    },
    {
      id: 2,
      title: 'Evaluate Model Robustness',
      description: 'Assess the robustness of the ResNet CNN model against the identified adversarial attacks using performance metrics such as accuracy, precision, recall, and F1-score.',
      icon: BarChart2
    },
    {
      id: 3,
      title: 'Test and Validate Defense Strategies',
      description: 'Test and validate the effectiveness of existing defense mechanisms, including data augmentation and adversarial training, in counteracting the effects of adversarial attacks on ResNet CNN model.',
      icon: Shield
    },
    {
      id: 4,
      title: 'Measure Defense Effectiveness',
      description: 'Evaluate the performance of defense strategies in enhancing or failing to enhance the resilience of ResNet CNN model against adversarial attacks, ensuring reliable performance on both clean and adversarial datasets.',
      icon: CheckCircle
    }
  ]

  return (
    <section id="objectives" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Research Objectives
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our research aims to strengthen the security and reliability of CNN-based medical imaging systems
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {objectives.map((objective) => (
            <div
              key={objective.id}
              className="bg-gray-50 rounded-xl p-8 hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              <div className="flex items-start gap-4">
                <div className="bg-blue-900 p-3 rounded-lg flex-shrink-0">
                  <objective.icon className="h-6 w-6 text-white" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-blue-900 font-bold">
                      Objective {objective.id}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mt-2 mb-3">
                    {objective.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-justify">
                    {objective.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Summary Box */}
        <div className="mt-12 bg-blue-900 text-white rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">Expected Outcome</h3>
          <p className="text-lg leading-relaxed max-w-3xl mx-auto">
            Development of a more robust and reliable CNN-based medical imaging system 
            that can withstand various adversarial attacks while maintaining high 
            diagnostic accuracy.
          </p>
        </div>
      </div>
    </section>
  )
} 