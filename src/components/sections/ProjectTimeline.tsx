import React from 'react';
import { 
  CalendarDays, 
  CheckCircle2, 
  Circle, 
  GitBranch,
  FileCheck,
  Brain,
  Beaker,
  Shield,
  FileBarChart
} from 'lucide-react';

interface TimelineItem {
  date: string;
  title: string;
  status: 'completed' | 'in-progress' | 'upcoming';
  description: string;
  icon: React.ReactNode;
}

export function ProjectTimeline() {
  const timelineItems: TimelineItem[] = [
    {
      date: 'January 2024',
      title: 'Project Initiation',
      status: 'completed',
      description: 'Research proposal submission and initial literature review on CNN security.',
      icon: <GitBranch className="w-6 h-6" />
    },
    {
      date: 'February 2024',
      title: 'Dataset Collection',
      status: 'completed',
      description: 'Collection and preprocessing of medical imaging datasets for model training.',
      icon: <FileCheck className="w-6 h-6" />
    },
    {
      date: 'March 2024',
      title: 'Model Development',
      status: 'in-progress',
      description: 'Implementation and fine-tuning of CNN architectures for medical image classification.',
      icon: <Brain className="w-6 h-6" />
    },
    {
      date: 'April 2024',
      title: 'Attack Implementation',
      status: 'in-progress',
      description: 'Development and testing of various adversarial attack methods.',
      icon: <Beaker className="w-6 h-6" />
    },
    {
      date: 'May 2024',
      title: 'Defense Mechanisms',
      status: 'upcoming',
      description: 'Implementation of defense strategies and robustness evaluation.',
      icon: <Shield className="w-6 h-6" />
    },
    {
      date: 'June 2024',
      title: 'Final Evaluation',
      status: 'upcoming',
      description: 'Comprehensive testing and performance analysis of the defense framework.',
      icon: <FileBarChart className="w-6 h-6" />
    }
  ];

  return (
    <section id="timeline" className="py-20 relative overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50/90 via-blue-50/80 to-gray-100/90"></div>
      
      {/* Mesh Pattern Overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxkZWZzPjxwYXR0ZXJuIGlkPSJncmlkIiB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiPjxwYXRoIGQ9Ik0gNDAgMCBMIDAgMCAwIDQwIiBmaWxsPSJub25lIiBzdHJva2U9InJnYmEoNTksIDEzMCwgMjQ2LCAwLjA1KSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-30"></div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Project Timeline
          </h2>
          <p className="text-xl text-gray-600">
            Our research roadmap and milestones
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-blue-200 via-blue-400 to-blue-200"></div>

          <div className="space-y-12">
            {timelineItems.map((item, index) => (
              <div key={index} className={`relative flex items-center justify-between 
                                         ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                {/* Date */}
                <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                  <div className="inline-block">
                    <CalendarDays className="w-5 h-5 text-blue-600 inline-block mr-2" />
                    <span className="text-blue-900 font-medium">{item.date}</span>
                  </div>
                </div>

                {/* Timeline Node */}
                <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center">
                  <div className={`w-12 h-12 rounded-full border-4 flex items-center justify-center
                                 ${item.status === 'completed' ? 'bg-green-100 border-green-500' :
                                   item.status === 'in-progress' ? 'bg-blue-100 border-blue-500' :
                                   'bg-gray-100 border-gray-400'}
                                 transition-all duration-300`}>
                    {item.icon}
                  </div>
                </div>

                {/* Content */}
                <div className={`w-5/12 ${index % 2 === 0 ? 'text-left pl-8' : 'text-right pr-8'}`}>
                  <div className="backdrop-blur-lg bg-white/40 border border-white/60 rounded-xl p-6
                                shadow-[0_8px_16px_rgba(148,163,184,0.1)]
                                hover:shadow-[0_8px_24px_rgba(148,163,184,0.2)]
                                hover:bg-white/50
                                transition-all duration-300">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                    <div className="mt-3 flex items-center gap-2">
                      {item.status === 'completed' ? (
                        <>
                          <CheckCircle2 className="w-5 h-5 text-green-500" />
                          <span className="text-sm text-green-600">Completed</span>
                        </>
                      ) : item.status === 'in-progress' ? (
                        <>
                          <Circle className="w-5 h-5 text-blue-500 animate-pulse" />
                          <span className="text-sm text-blue-600">In Progress</span>
                        </>
                      ) : (
                        <>
                          <Circle className="w-5 h-5 text-gray-400" />
                          <span className="text-sm text-gray-600">Upcoming</span>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-20 w-96 h-96 bg-blue-100 rounded-full opacity-20 blur-3xl"></div>
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-gray-200 rounded-full opacity-20 blur-3xl"></div>
    </section>
  );
} 