import React from 'react';
import { MailIcon, AwardIcon, GithubIcon, LinkedinIcon } from 'lucide-react';
export function AboutUs() {
  const teamMembers = [{
    name: 'N. Premakanthan',
    role: 'Researcher – STM Attack',
    email: 'premakanthan@university.edu',
    photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face',
    achievements: ['Style Transfer Adversarial Research', 'Medical Imaging Security Analysis', 'CNN Vulnerability Assessment'],
    social: {
      github: 'npremakanthan',
      linkedin: 'n-premakanthan'
    }
  }, {
    name: 'D.S.C. Wijesuriya',
    role: 'Researcher – PGN Attack',
    email: 'wijesuriya@university.edu',
    photo: 'https://images.unsplash.com/photo-1494790108755-2616c2c0b36e?w=300&h=300&fit=crop&crop=face',
    achievements: ['Gradient Norm Attack Studies', 'Adversarial Defense Mechanisms', 'ResNet Robustness Evaluation'],
    social: {
      github: 'dscwijesuriya',
      linkedin: 'dsc-wijesuriya'
    }
  }, {
    name: 'P.G.E.J. Sandamal',
    role: 'Researcher – SIA Attack',
    email: 'sandamal@university.edu',
    photo: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face',
    achievements: ['Block-Wise Transformation Analysis', 'Medical Image Processing', 'CNN Security Framework Development'],
    social: {
      github: 'pgejsandamal',
      linkedin: 'pgej-sandamal'
    }
  }, {
    name: 'W.N. Dilsara',
    role: 'Researcher – USMM Attack',
    email: 'dilsara@university.edu',
    photo: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face',
    achievements: ['Novel Mask-Based Adversarial Strategy', 'Transfer Learning Applications', 'Medical Dataset Analysis'],
    social: {
      github: 'wndilsara',
      linkedin: 'wn-dilsara'
    }
  }];
  return <section id="about" className="w-full py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            About Our Research Team
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Meet the dedicated researchers specializing in adversarial attacks
            and CNN robustness in medical imaging systems
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {teamMembers.map((member, index) => <div key={index} className="bg-gray-50 rounded-xl p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-transparent hover:border-blue-100">
              <div className="flex items-start gap-6">
                <img src={member.photo} alt={member.name} className="w-20 h-20 rounded-full object-cover flex-shrink-0 border-4 border-blue-900" />
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">
                    {member.name}
                  </h3>
                  <p className="text-blue-900 font-medium mb-3">
                    {member.role}
                  </p>
                  <div className="flex items-center gap-2 text-gray-600 mb-4">
                    <MailIcon className="h-4 w-4" />
                    <a href={`mailto:${member.email}`} className="text-sm hover:text-blue-900 transition-colors">
                      {member.email}
                    </a>
                  </div>
                  <div className="mb-4">
                    <h4 className="text-sm font-medium text-gray-900 mb-2 flex items-center gap-1">
                      <AwardIcon className="h-4 w-4" />
                      Research Focus
                    </h4>
                    <ul className="space-y-1">
                      {member.achievements.map((achievement, idx) => <li key={idx} className="text-sm text-gray-600">
                          • {achievement}
                        </li>)}
                    </ul>
                  </div>
                  <div className="flex gap-3">
                    <a href={`https://github.com/${member.social.github}`} className="text-gray-400 hover:text-gray-600 transition-colors" target="_blank" rel="noopener noreferrer">
                      <GithubIcon className="h-5 w-5" />
                    </a>
                    <a href={`https://linkedin.com/in/${member.social.linkedin}`} className="text-gray-400 hover:text-blue-900 transition-colors" target="_blank" rel="noopener noreferrer">
                      <LinkedinIcon className="h-5 w-5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>)}
        </div>
      </div>
    </section>;
}