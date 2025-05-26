import React from 'react';
import { SearchIcon, TargetIcon, CheckCircleIcon, CogIcon, CodeIcon, BoxIcon } from 'lucide-react';
export function Domain() {
  const domainCards = [{
    icon: SearchIcon,
    title: 'Literature Survey',
    description: 'Comprehensive review of adversarial attacks on medical imaging systems, analyzing existing vulnerabilities in CNN-based diagnostic tools and current defensive strategies.'
  }, {
    icon: TargetIcon,
    title: 'Research Gap',
    description: 'Limited research on systematic evaluation of multiple adversarial attack types (USMM, PGN, STM, SIA) specifically targeting medical imaging CNNs and their defensive countermeasures.'
  }, {
    icon: BoxIcon,
    title: 'Research Problem',
    description: 'How to assess and enhance the robustness of CNN models, particularly ResNet, against adversarial attacks in medical imaging systems to ensure reliable diagnostic outcomes.'
  }, {
    icon: CheckCircleIcon,
    title: 'Objectives',
    description: 'Implement and evaluate four adversarial attack methods, develop defensive measures, assess ResNet robustness, and create a comprehensive security framework for medical imaging.'
  }, {
    icon: CogIcon,
    title: 'Methodology',
    description: 'Systematic implementation of USMM, PGN, STM, and SIA attacks on ResNet using transfer learning, followed by defense mechanism development and comprehensive evaluation.'
  }, {
    icon: CodeIcon,
    title: 'Technologies Used',
    description: 'ResNet architecture, Transfer Learning, Python, TensorFlow/PyTorch, NIH Chest X-ray Dataset, ChestX-ray14 Dataset, and adversarial attack frameworks.'
  }];
  return <section id="domain" className="w-full py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Research Domain
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A comprehensive overview of our research scope, methodology, and
            technical approach to CNN security in medical imaging
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {domainCards.map((card, index) => <div key={index} className="bg-gray-50 rounded-xl p-6 hover:shadow-xl hover:bg-white transition-all duration-300 transform hover:-translate-y-1 border border-transparent hover:border-blue-100">
              <div className="flex items-center mb-4">
                <div className="bg-blue-900 p-3 rounded-lg">
                  <card.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 ml-4">
                  {card.title}
                </h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                {card.description}
              </p>
            </div>)}
        </div>
      </div>
    </section>;
}