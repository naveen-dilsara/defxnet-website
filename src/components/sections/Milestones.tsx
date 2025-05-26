import React from 'react';
import { Timeline } from '../Timeline';
export function Milestones() {
  const milestones = [{
    title: 'Project Proposal',
    date: 'March 2024',
    marks: 'TBD',
    status: 'completed' as const,
    description: 'Initial project proposal presentation outlining CNN robustness research objectives, adversarial attack methodologies, and defensive strategies for medical imaging systems'
  }, {
    title: 'Progress Presentation 1',
    date: 'May 2024',
    marks: 'TBD',
    status: 'completed' as const,
    description: 'First progress review covering literature survey, initial implementation of USMM and PGN attacks, and preliminary results on ResNet vulnerability assessment'
  }, {
    title: 'Progress Presentation 2',
    date: 'July 2024',
    marks: 'TBD',
    status: 'completed' as const,
    description: 'Mid-term progress presentation with STM and SIA attack implementations, comprehensive attack evaluation results, and initial defensive mechanism development'
  }, {
    title: 'Final Assessment',
    date: 'October 2024',
    marks: 'TBD',
    status: 'upcoming' as const,
    description: 'Final project presentation demonstrating complete adversarial attack framework, defensive measures, robustness evaluation, and comprehensive security analysis'
  }, {
    title: 'Viva Voce',
    date: 'November 2024',
    marks: 'TBD',
    status: 'upcoming' as const,
    description: 'Oral examination and defense of research work on CNN robustness in medical imaging systems with comprehensive Q&A session'
  }];
  return <section id="milestones" className="w-full py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Project Milestones
          </h2>
          <p className="text-xl text-gray-600">
            Track our progress through key project deliverables and research
            assessments
          </p>
        </div>
        <Timeline milestones={milestones} />
      </div>
    </section>;
}