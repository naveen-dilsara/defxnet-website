import React from 'react';
import { CheckCircle, Clock, AlertCircle } from 'lucide-react';

interface Milestone {
  title: string;
  description: string;
  date: string;
  status: 'completed' | 'inprogress' | 'upcoming';
}

export function Milestones() {
  const milestones: Milestone[] = [
    {
      title: 'Topic Assessment Form',
      description: 'Submitted Topic Assessment Form outlining the project title, research group, objectives, problem statement, proposed solution, and supervisor endorsements for formal approval of the study.',
      date: '07 July 2024',
      status: 'completed'
    },
    {
      title: 'Project Proposal Presentation',
      description: 'Initial project proposal presentation outlining CNN robustness research objectives, adversarial attack methodologies, and defensive strategies for medical imaging systems.',
      date: '06 Aug 2024',
      status: 'completed'
    },
    {
      title: 'Progress Presentation 1',
      description: 'First progress review covering literature survey, initial implementation of STM, SIA, USMM and PGN attacks, and preliminary results on models.',
      date: '04 Dec 2024',
      status: 'completed'
    },
    {
      title: 'Progress Presentation 2',
      description: 'Mid-term progress presentation with comprehensive attack evaluation results, and initial defensive mechanism development.',
      date: '19 March 2025',
      status: 'completed'
    },
    {
      title: 'Final Report',
      description: 'Comprehensive final report covering all aspects of the DefXnet project from conception to completion.',
      date: 'May 2025',
      status: 'completed'
    },
    {
      title: 'Log Book',
      description: 'Complete project logbook documenting the development process, challenges, and solutions.',
      date: 'May 2025',
      status: 'inprogress'
    },
    {
      title: 'Final Assessment',
      description: 'Final project presentation demonstrating complete adversarial attack framework, defensive measures, robustness evaluation, and overall product.',
      date: '27 May 2025',
      status: 'upcoming'
    }
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed':
        return <CheckCircle className="w-6 h-6 text-green-500" />;
      case 'inprogress':
        return <Clock className="w-6 h-6 text-blue-500 animate-pulse" />;
      case 'upcoming':
        return <AlertCircle className="w-6 h-6 text-gray-400" />;
      default:
        return null;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'bg-green-500';
      case 'inprogress':
        return 'bg-blue-500';
      case 'upcoming':
        return 'bg-gray-400';
      default:
        return 'bg-gray-200';
    }
  };

  return (
    <section id="milestones" className="py-20 relative overflow-hidden">
      {/* Background with gradient and pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-blue-50"></div>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxkZWZzPjxwYXR0ZXJuIGlkPSJncmlkIiB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiPjxwYXRoIGQ9Ik0gNDAgMCBMIDAgMCAwIDQwIiBmaWxsPSJub25lIiBzdHJva2U9InJnYmEoNTksIDEzMCwgMjQ2LCAwLjA1KSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-30"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Project Timeline</h2>
          <p className="text-xl text-gray-600">Key milestones and deliverables in our research journey</p>
        </div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-blue-900 via-blue-700 to-blue-900"></div>

          <div className="space-y-12">
            {milestones.map((milestone, index) => (
              <div 
                key={index}
                className={`relative flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} gap-8`}
              >
                {/* Timeline node */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full bg-white border-4 border-blue-900 flex items-center justify-center shadow-lg">
                  {getStatusIcon(milestone.status)}
                </div>

                {/* Content card */}
                <div className={`w-5/12 ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                  <div className="backdrop-blur-lg bg-white/40 border border-white/60 rounded-2xl p-6 
                                shadow-[0_8px_16px_rgba(148,163,184,0.1)] 
                                hover:shadow-[0_8px_24px_rgba(148,163,184,0.2)] 
                                hover:bg-white/50 
                                transition-all duration-300
                                group">
                    <div className="flex items-center gap-2 mb-2 justify-end">
                      <div className={`px-3 py-1 rounded-full text-xs font-medium text-white ${getStatusColor(milestone.status)}`}>
                        {milestone.status.charAt(0).toUpperCase() + milestone.status.slice(1)}
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-900 transition-colors">{milestone.title}</h3>
                    <p className="text-gray-600 mb-4">{milestone.description}</p>
                    <p className="text-sm font-medium text-blue-900">{milestone.date}</p>
                  </div>
                </div>

                {/* Spacer for the other side */}
                <div className="w-5/12"></div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Decorative blurred circles */}
      <div className="absolute top-20 left-20 w-96 h-96 bg-blue-200 rounded-full opacity-20 blur-3xl"></div>
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-300 rounded-full opacity-20 blur-3xl"></div>
    </section>
  );
}