import React from 'react';
import { CheckCircleIcon, ClockIcon, CalendarIcon, AwardIcon } from 'lucide-react';
interface Milestone {
  title: string;
  date: string;
  marks: string;
  status: 'completed' | 'upcoming';
  description: string;
}
interface TimelineProps {
  milestones: Milestone[];
}
export function Timeline({
  milestones
}: TimelineProps) {
  return <div className="relative">
      {/* Timeline line */}
      <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-300"></div>
      <div className="space-y-8">
        {milestones.map((milestone, index) => <div key={index} className="relative flex items-start">
            {/* Timeline marker */}
            <div className={`relative z-10 flex items-center justify-center w-16 h-16 rounded-full border-4 transition-all duration-300 ${milestone.status === 'completed' ? 'bg-teal-100 border-teal-600 shadow-lg' : 'bg-blue-100 border-blue-900 shadow-lg'}`}>
              {milestone.status === 'completed' ? <CheckCircleIcon className="h-8 w-8 text-teal-600" /> : <ClockIcon className="h-8 w-8 text-blue-900" />}
            </div>
            {/* Content */}
            <div className="ml-8 flex-1">
              <div className={`bg-white rounded-lg shadow-md p-6 border-l-4 hover:shadow-lg transition-all duration-300 ${milestone.status === 'completed' ? 'border-teal-600' : 'border-blue-900'}`}>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                  <h3 className="text-xl font-semibold text-gray-900">
                    {milestone.title}
                  </h3>
                  <div className="flex items-center gap-4 mt-2 sm:mt-0">
                    <div className="flex items-center text-gray-600">
                      <CalendarIcon className="h-4 w-4 mr-1" />
                      <span className="text-sm">{milestone.date}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <AwardIcon className="h-4 w-4 mr-1" />
                      <span className="text-sm font-medium">
                        {milestone.marks}
                      </span>
                    </div>
                  </div>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  {milestone.description}
                </p>
              </div>
            </div>
          </div>)}
      </div>
    </div>;
}